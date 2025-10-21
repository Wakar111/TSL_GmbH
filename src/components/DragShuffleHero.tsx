import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface TestimonialData {
  imgUrl?: string;
  testimonial: string;
  author: string;
}

const DragShuffleHero = () => {
  // Define your testimonials here - add or remove as many as you want!
  const testimonials: TestimonialData[] = [
    {
      imgUrl: "/optimized/A7V01808.jpg",
      testimonial: "Professionelle und zuverlässige Transportlösungen. TSL ist unser Partner der ersten Wahl.",
      author: "Klaus M. - Logistikleiter"
    },
    {
      imgUrl: "/optimized/A7V01759.jpg",
      testimonial: "Schnelle Reaktionszeiten und exzellenter Service. Wir sind sehr zufrieden mit der Zusammenarbeit.",
      author: "Sarah K. - Geschäftsführerin"
    },
    {
      imgUrl: "/optimized/A7V01842.jpg",
      testimonial: "TSL überzeugt durch Flexibilität und Termintreue. Eine klare Empfehlung!",
      author: "Michael B. - Supply Chain Manager"
    },
    {
      imgUrl: "/optimized/A7V01881.jpg",
      testimonial: "TSL - arbeitet gerne mit uns zusammen!",
      author: "Management - TSL GmbH"
    },
    {
      imgUrl: "/optimized/A7V01874.jpg",
      testimonial: "TSL - arbeitet gerne mit uns zusammen!",
      author: "Management - TSL GmbH"
    },
    {
      imgUrl: "/optimized/A7V01881.jpg",
      testimonial: "TSL - arbeitet gerne mit uns zusammen!",
      author: "Management - TSL GmbH"
    },
  ];

  const [order, setOrder] = useState<number[]>(
    Array.from({ length: testimonials.length }, (_, i) => i)
  );

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as number);
    setOrder(orderCopy);
  };

  return (
    <section className="overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-4xl font-black leading-[1.25] md:text-6xl">
            Stellenangebote
          </h3>
          <p className="mb-8 mt-4 text-lg text-gray-300">
            Werden Sie Teil unseres erfolgreichen Teams
          </p>
        </div>
        <div className="relative h-[450px] w-[350px]">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              imgUrl={testimonial.imgUrl}
              testimonial={testimonial.testimonial}
              author={testimonial.author}
              handleShuffle={handleShuffle}
              position={order.indexOf(index)}
              totalCards={testimonials.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  handleShuffle: Function;
  testimonial: string;
  position: number;
  totalCards: number;
  imgUrl?: string;
  author: string;
}

const Card = ({
  handleShuffle,
  testimonial,
  position,
  totalCards,
  author,
  imgUrl,
}: CardProps) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
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
    </motion.div>
  );
};

export default DragShuffleHero;