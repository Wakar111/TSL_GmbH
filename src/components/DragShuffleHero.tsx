import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Play } from "lucide-react";

interface TestimonialData {
  imgUrl?: string;
  testimonial: string;
  author: string;
  videoUrl?: string;
}

const DragShuffleHero = () => {
  // Define your testimonials here - add or remove as many as you want!
  const testimonials: TestimonialData[] = [
    {
      imgUrl: "/optimized/felix.jpg",
      testimonial: "Bei TSL erwartet dich ein familiäres Arbeitsumfeld, das offen für Neues und Veränderungen ist.",
      author: "Felix F. - Prokurist",
      videoUrl: "/optimized/jobs_videos/felix.mp4"
    },
    {
      imgUrl: "/optimized/anni.jpg",
      testimonial: "Bei der TSL stellen wir uns regelmäßig neuen Herausforderungen – Abwechslung ist somit garantiert.",
      author: "Anni Q. - Disponentin",
      videoUrl: "/optimized/jobs_videos/anni.mp4"
    },
    {
      imgUrl: "/optimized/ingo.jpg",
      testimonial: "TSL überzeugt mit flexiblen Arbeitszeiten und einer offenen, partnerschaftlichen Zusammenarbeit mit den Kunden.",
      author: "Ingo F. - Disponent",
      videoUrl: "/optimized/jobs_videos/ingo.mp4"
    },
    {
      imgUrl: "/optimized/celine.jpg",
      testimonial: "Bei TSL erwarten dich eine tolle Stimmung, klare Aufgabenstrukturen und verlässliche Kolleginnen und Kollegen.",
      author: "Celine D. - Kaufmännische Angestelltin",
      videoUrl: "/optimized/jobs_videos/celine.mp4"
    },
    {
      imgUrl: "/optimized/christoph.jpg",
      testimonial: "Offene Kommunikation und ein flexibles Arbeitsumfeld sorgen dafür, dass jeder Tag neue Herausforderungen bereithält.",
      author: "Christoph I. - Fuhrpark Mitarbeiter",
      videoUrl: "/optimized/jobs_videos/christoph.mp4"
    }
  ];

  const [order, setOrder] = useState<number[]>(
    Array.from({ length: testimonials.length }, (_, i) => i)
  );

  const [videoPopup, setVideoPopup] = useState<string | null>(null);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as number);
    setOrder(orderCopy);
  };

  return (
    <>
      <section className="relative overflow-hidden px-8 py-24 text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/trucks-hiring.jpg)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-800/75" />
        
        {/* Content */}
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-4xl font-black leading-[1.25] md:text-6xl">
              Wir stellen ein!
            </h3>
            <p className="mb-8 mt-4 text-lg text-gray-300">
              Werden Sie Teil unseres erfolgreichen Teams!
            </p>
          </div>
          <div className="relative h-[450px] w-[350px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                imgUrl={testimonial.imgUrl}
                testimonial={testimonial.testimonial}
                author={testimonial.author}
                videoUrl={testimonial.videoUrl}
                handleShuffle={handleShuffle}
                position={order.indexOf(index)}
                totalCards={testimonials.length}
                onVideoClick={setVideoPopup}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {videoPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setVideoPopup(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoPopup(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <video
                src={videoPopup}
                controls
                autoPlay
                className="w-full rounded-lg shadow-2xl"
              >
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface CardProps {
  handleShuffle: Function;
  testimonial: string;
  position: number;
  totalCards: number;
  imgUrl?: string;
  author: string;
  videoUrl?: string;
  onVideoClick: (url: string) => void;
}

const Card = ({
  handleShuffle,
  testimonial,
  position,
  totalCards,
  author,
  imgUrl,
  videoUrl,
  onVideoClick,
}: CardProps) => {
  const mousePosRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX;
    dragDistanceRef.current = 0;
  };

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX;
    dragDistanceRef.current = Math.abs(diff);

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
    
    // Reset drag distance after a short delay
    setTimeout(() => {
      dragDistanceRef.current = 0;
    }, 100);
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Only open video if drag distance was minimal (less than 5px)
    if (dragDistanceRef.current < 5 && videoUrl) {
      onVideoClick(videoUrl);
    }
  };

  // Dynamic positioning based on card position and total number of cards
  const xOffset = totalCards > 1 ? (position * 100) / (totalCards - 1) : 0;
  const x = `${xOffset}%`;
  
  // Dynamic rotation: front card rotates left, back card rotates right
  const maxRotation = 6;
  const rotateZ = totalCards > 1 
    ? `${-maxRotation + (position * (2 * maxRotation)) / (totalCards - 1)}deg`
    : "0deg";
  
  const zIndex = String(totalCards - position - 1);

  const draggable = position === 0;

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-gray-600 bg-gray-800/30 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={`Image of ${author}`}
          className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-gray-600 bg-gray-200 object-cover"
        />
      ) : (
        <div className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-gray-600 bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">
            {author.split(' ')[0]?.charAt(0) || '?'}
          </span>
        </div>
      )}
      <span className="text-center text-lg italic text-gray-300">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-gray-400">
        {author}
      </span>
      
      {/* Video Button */}
      {videoUrl && draggable && (
        <button
          onClick={handleVideoClick}
          className="mx-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors backdrop-blur-sm border border-white/20 pointer-events-auto"
        >
          <Play size={20} />
          <span className="text-sm font-medium">Video ansehen</span>
        </button>
      )}
    </motion.div>
  );
};

export default DragShuffleHero;