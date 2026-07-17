import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Users, Truck, MapPin, Award } from 'lucide-react';

export const CountUpStats = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
        <Stat
          num={180}
          suffix="+"
          subheading="Mitarbeiter"
          icon={Users}
        />
        <Stat
          num={100}
          suffix="+"
          subheading="Fahrzeuge"
          icon={Truck}
        />
        <Stat
          num={4}
          suffix="+"
          subheading="Standorte"
          icon={MapPin}
        />
        <Stat
          num={30}
          suffix="+"
          subheading="Jahre Erfahrung"
          icon={Award}
        />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Stat = ({ num, suffix, decimals = 0, subheading, icon: Icon }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center w-full">
      <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
        <span ref={ref}></span>
        {suffix}
      </h3>
      <p className="text-sm md:text-base text-gray-600">{subheading}</p>
    </div>
  );
};