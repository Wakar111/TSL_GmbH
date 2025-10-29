import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const PERSPECTIVE = "1500px";

export const TiltShineCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const sheenOpacity = useTransform(
    ySpring,
    [-HALF_ROTATION_RANGE, 0, HALF_ROTATION_RANGE],
    [0.3, 0, 0.3]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="mt-8 mb-8">
      <div
        style={{
          perspective: PERSPECTIVE,
        }}
        className="mx-auto max-w-4xl"
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform,
          }}
          className="relative bg-gray-800/60 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="relative w-full h-48 md:h-64">
            <iframe
              title="TSL GmbH Standort"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Am%20Sportplatz%201%2C%2064823%20Gro%C3%9F-Umstadt%20Richen%2C%20Deutschland&output=embed"
            />
          </div>
          <motion.div
            style={{
              opacity: sheenOpacity,
            }}
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/30 to-white/20 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};