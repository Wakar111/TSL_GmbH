import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import { employees } from "../data/employeeData";

const AUTO_SWIPE_INTERVAL_MS = 5000;

const DragShuffleHero = () => { 

  const [order, setOrder] = useState<number[]>(
    Array.from({ length: employees.length }, (_, i) => i)
  );

  const [videoPopup, setVideoPopup] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleShuffle = useCallback(() => {
    setOrder((prev) => {
      const copy = [...prev];
      copy.unshift(copy.pop() as number);
      return copy;
    });
  }, []);

  const handleShuffleBack = useCallback(() => {
    setOrder((prev) => {
      const copy = [...prev];
      copy.push(copy.shift() as number);
      return copy;
    });
  }, []);

  // Auto-swipe: alle 5 Sekunden, pausiert bei offenem Video-Popup oder Hover/Drag
  useEffect(() => {
    if (videoPopup || isPaused) return;
    const id = window.setInterval(handleShuffle, AUTO_SWIPE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [videoPopup, isPaused, handleShuffle, order]);

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
              Werde Teil unseres erfolgreichen Teams!
            </p>
          </div>
          <div
            className="relative h-[450px] w-[350px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {employees.map((employee, index) => (
              <Card
                key={index}
                imgUrl={employee.imgUrl}
                testimonial={employee.testimonial}
                author={employee.author}
                videoUrl={employee.videoUrl}
                handleShuffle={handleShuffle}
                handleShuffleBack={handleShuffleBack}
                position={order.indexOf(index)}
                totalCards={employees.length}
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
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoPopup(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={28} />
              </button>
              <video
                src={videoPopup}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-black"
              >
                Dein Browser unterstützt das Video-Element nicht.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface CardProps {
  handleShuffle: () => void;
  handleShuffleBack: () => void;
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
  handleShuffleBack,
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
    } else if (diff < -150) {
      handleShuffleBack();
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