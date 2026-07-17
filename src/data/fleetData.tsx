// Data used in Fleet.tsx
import { Truck, Gauge, Weight, Thermometer } from 'lucide-react';


export const truckSlides = [
    { image: '/fuhrpark/truck1.jpg', title: 'Moderne Kühlfahrzeuge', description: 'Temperaturgeführte Transporte von -20°C bis +20°C' },
    { image: '/fuhrpark/truck2.jpg', title: 'Sattelzüge', description: 'Optimiert für Langstrecken und Wechselbrücken-System' },
    { image: '/fuhrpark/truck3.jpg', title: 'Professionelle Fahrer', description: 'Geschult und zertifiziert' },
    { image: '/fuhrpark/truck4.jpg', title: 'Tägliche Transporter', description: 'Flexible Lösungen für urbane Logistik' },
    { image: '/fuhrpark/truck5.jpg', title: 'Doppeldecker-Auflieger', description: 'Bis zu 55% mehr Ladevolumen pro Fahrt' },
    { image: '/fuhrpark/truck6.jpg', title: 'GPS-Tracking', description: 'Lückenlose Sendungsverfolgung in Echtzeit' },
    { image: '/fuhrpark/truck7.jpg', title: 'Moderne Technologie', description: 'Telematik-Systeme für optimierte Routen' },
    { image: '/fuhrpark/truck8.jpg', title: 'Sicherheit First', description: 'TÜV-geprüft und regelmäßig gewartet' },
    { image: '/fuhrpark/truck9.jpg', title: 'Umweltstandards', description: 'Euro 6 Norm für reduzierten CO₂-Ausstoß' },
    { image: '/fuhrpark/truck10.jpg', title: 'Ladebordwände', description: 'Effizientes Be- und Entladen' },
    { image: '/fuhrpark/truck11.jpg', title: 'Lang-Auflieger', description: 'Mehrere Europaletten-Stellplätze' },
    { image: '/fuhrpark/truck12.jpg', title: 'Große Lage Fläche', description: 'Große Lagerflächen für schnelle Lieferungen' },
    { image: '/fuhrpark/truck13.jpg', title: 'Lang-Auflieger', description: 'Mehrere Europaletten-Stellplätze' },
    { image: '/fuhrpark/truck14.jpg', title: 'Deutschlandweit', description: 'Mehrere Standorte für schnelle Lieferungen' },
    { image: '/fuhrpark/truck15.jpg', title: 'Optimale Tourenplanung', description: 'Optimale Tourenplanung für deine Anforderungen' },
    { image: '/fuhrpark/truck16.jpg', title: 'Kühlkette garantiert', description: 'Durchgehende Temperaturüberwachung' },
    { image: '/fuhrpark/truck17.jpg', title: 'Flexible Lösungen', description: 'Maßgeschneidert für deine Anforderungen' },
    { image: '/fuhrpark/truck18.jpg', title: 'Zuverlässig', description: '30+ Jahre Erfahrung in der Logistik' },
    { image: '/fuhrpark/truck19.jpg', title: 'Express-Service', description: 'Schnelle Lieferungen wenn es eilig ist' },
  ];

export const vehicles = [
    {
      type: 'Kühl-LKW',
      icon: Thermometer,
      specs: ['7,5t - 12t Nutzlast', 'Temperaturbereich -20°C bis +20°C', 'Durchgehende Kühlkette'],
    },
    {
      type: 'Standard-LKW',
      icon: Truck,
      specs: ['12t - 40t Nutzlast', 'Ladebordwand', 'Mehrere Europaletten-Stellplätze'],
    },
    {
      type: 'Sattelzug',
      icon: Weight,
      specs: ['Bis 40t Nutzlast', 'Wechselbrücken-System', 'Langstrecke optimiert'],
    },
    {
      type: 'Transporter',
      icon: Gauge,
      specs: ['Bis 3,5t Nutzlast', 'City-Logistik', 'Express-Lieferungen'],
    },
  ];