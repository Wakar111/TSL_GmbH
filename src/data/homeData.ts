// Data used in Home.tsx

import { Truck, MapPin, Award, Cpu, ShieldCheck, BarChart2, Target, Clock as ClockIcon, Wrench, Shield, RefreshCw, Layers } from 'lucide-react';


export const partners = [
    { name: 'REWE', logo: '/Firmen-Logos/REWE.png', className: 'h-12' },
    { name: 'PENNY', logo: '/Firmen-Logos/PENNY.png', className: 'h-12' },
    { name: 'TOOM', logo: '/Firmen-Logos/TOOM.png', className: 'h-12' },
    { name: 'SCANIA', logo: '/Firmen-Logos/SCANIA.png', className: 'h-12' },
    { name: '4media', logo: '/Firmen-Logos/4media.png', className: 'h-12' },
    { name: 'ECK', logo: '/Firmen-Logos/ECK.png', className: 'h-12' },
  ];

export const servicesList = [
    {
      title: 'TRANSPORT & LOGISTIK',
      icon: Truck,
      features: [
        { text: '24h Lagerumschlag im 100km Umkreis', icon: ClockIcon },
        { text: 'Modernste Fahrzeugflotte', icon: Cpu },
        { text: 'Höchste Sicherheitsstandards', icon: ShieldCheck },
        { text: 'Pünktliche Liefergarantie', icon: Award },
        { text: '+55% Kapazität durch Doppeldecker', icon: Layers },
      ],
    },
    {
      title: 'INDIVIDUELLE LÖSUNGEN',
      icon: Target,
      features: [
        { text: 'Maßgeschneiderte Logistikkonzepte', icon: Wrench },
        { text: 'Flexible Zusatzservices', icon: BarChart2 },
        { text: 'Optimierte Routenplanung', icon: RefreshCw },
        { text: 'Eigene Software-Lösungen', icon: Cpu },
        { text: 'Transparente Kostenstruktur', icon: Shield },
        { text: 'Kühlketten-Transport', icon: Truck },
        { text: 'Vor-Ort Disposition möglich', icon: MapPin },
      ],
    },
  ];