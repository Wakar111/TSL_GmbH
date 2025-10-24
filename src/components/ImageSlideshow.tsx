import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface ImageSlideshowProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageSlideshow({
  slides,
  autoPlay = true,
  interval = 5000,
}: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const slideTo = (index: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const slidesEls = Array.from(track.children) as HTMLElement[];
    const safeIndex = (index + slides.length) % slides.length;
    const target = slidesEls[safeIndex];
    target?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setCurrent(safeIndex);
  };

  const next = () => slideTo(current + 1);
  const prev = () => slideTo(current - 1);

  // autoplay by scrolling to next card
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(id);
  }, [current, autoPlay, interval]);

  // sync current index based on scroll position
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handler = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (!children.length) return;
      const centers = children.map((el) => Math.abs((el.offsetLeft + el.offsetWidth / 2) - (track.scrollLeft + track.clientWidth / 2)));
      const nearest = centers.indexOf(Math.min(...centers));
      setCurrent(nearest);
    };
    track.addEventListener('scroll', handler, { passive: true });
    return () => track.removeEventListener('scroll', handler as any);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80">
      <div
        ref={trackRef}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-2 md:px-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="snap-center flex-none w-[85%] md:w-[72%] h-full rounded-xl overflow-hidden shadow-xl relative"
          >
            <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{slide.title}</h3>
              <p className="text-gray-200 text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => slideTo(i)}
            className={`h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
            aria-label={`Gehe zu Bild ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
