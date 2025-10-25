import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const PUBLIC_DIR = './public';
const OUTPUT_DIR = './public/optimized';

async function optimizeImages() {
  try {
    const files = await readdir(PUBLIC_DIR);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
    );

    console.log(`Found ${imageFiles.length} images to optimize...\n`);

    for (const file of imageFiles) {
      const inputPath = join(PUBLIC_DIR, file);
      const outputPath = join(OUTPUT_DIR, file);

      try {
        const info = await sharp(inputPath)
          .resize(400, 400, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 85, mozjpeg: true })
          .toFile(outputPath);

        const sizeMB = (info.size / 1024 / 1024).toFixed(2);
        console.log(`✓ ${file} → ${sizeMB} MB`);
      } catch (err) {
        console.error(`✗ Failed to optimize ${file}:`, err.message);
      }
    }

    console.log('\n✅ Image optimization complete! Optimized images saved to /public/optimized/');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function optimizeVideos() {
  try {
    const files = await readdir(PUBLIC_DIR);
    const videoFiles = files.filter(file => 
      /\.(mp4|mov|avi|mkv)$/i.test(file) && !file.startsWith('.')
    );

    if (videoFiles.length === 0) {
      console.log('\nNo videos found to optimize.');
      return;
    }

    console.log(`\nFound ${videoFiles.length} videos to optimize...\n`);

    // Check if ffmpeg is installed
    try {
      await execAsync('ffmpeg -version');
    } catch (err) {
      console.error('❌ FFmpeg is not installed. Please install it first:');
      console.error('   Mac: brew install ffmpeg');
      console.error('   Windows: Download from https://ffmpeg.org/download.html');
      console.error('   Linux: sudo apt-get install ffmpeg');
      return;
    }

    for (const file of videoFiles) {
      const inputPath = join(PUBLIC_DIR, file);
      const outputPath = join(OUTPUT_DIR, file);

      try {
        // Get original file size
        const stats = await stat(inputPath);
        const originalSizeMB = (stats.size / 1024 / 1024).toFixed(2);

        // Optimize video: reduce resolution to 1280x720, compress with H.264
        const command = `ffmpeg -i "${inputPath}" -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart -y "${outputPath}"`;
        
        await execAsync(command);

        // Get optimized file size
        const newStats = await stat(outputPath);
        const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

        console.log(`✓ ${file} → ${originalSizeMB} MB → ${newSizeMB} MB (${reduction}% reduction)`);
      } catch (err) {
        console.error(`✗ Failed to optimize ${file}:`, err.message);
      }
    }

    console.log('\n✅ Video optimization complete! Optimized videos saved to /public/optimized/');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function optimizeAll() {
  console.log('🚀 Starting optimization process...\n');
  await optimizeImages();
  await optimizeVideos();
  console.log('\n📝 Update your paths to use /optimized/filename');
  console.log('   Images: <img src="/optimized/photo.jpg" />');
  console.log('   Videos: <video src="/optimized/video.mp4" />');
}

optimizeAll();


// ============================================
// HOW TO USE THIS SCRIPT
// ============================================
//
// 1. Add new images or videos to /public/ folder
//    - Images: .jpg, .jpeg, .png
//    - Videos: .mp4, .mov, .avi, .mkv
//
// 2. Run optimization
//    node optimize-images.js
//
// 3. Script creates optimized versions in /public/optimized/
//    - Images: Resized to 400x400px, ~0.02 MB
//    - Videos: Max 1280x720p, H.264 compressed
//
// 4. Use in your code
//    <img src="/optimized/photo.jpg" />
//    <video src="/optimized/video.mp4" />
//
// Note: FFmpeg is required for video optimization
//       Mac: brew install ffmpeg
//       Windows: Download from https://ffmpeg.org/
//       Linux: sudo apt-get install ffmpeg
// ============================================