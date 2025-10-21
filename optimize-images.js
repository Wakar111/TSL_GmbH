import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

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

    console.log('\n✅ Optimization complete! Optimized images saved to /public/optimized/');
    console.log('📝 Update your image paths to use /optimized/filename.jpg');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages();
