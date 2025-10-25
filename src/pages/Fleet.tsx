import { Truck, Gauge, Weight, Thermometer, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Fleet() {
  // Gallery images - add more truck images here
  const galleryImages = [
    '/fuhrpark/truck1.jpg',
    '/fuhrpark/truck2.jpg',
    '/fuhrpark/truck3.jpg',
    '/fuhrpark/truck4.jpg',
    '/fuhrpark/truck5.jpg',
    '/fuhrpark/truck6.jpg',
    '/fuhrpark/truck7.jpg',
    '/fuhrpark/truck8.jpg',
    '/fuhrpark/truck9.jpg',
    '/fuhrpark/truck10.jpg',
    '/fuhrpark/truck11.jpg',
    '/fuhrpark/truck12.jpg',
    '/fuhrpark/truck13.jpg',
    '/fuhrpark/truck14.jpg',
    '/fuhrpark/truck15.jpg',
    '/fuhrpark/truck16.jpg',
    '/fuhrpark/truck17.jpg',
    '/fuhrpark/truck18.jpg',
    '/fuhrpark/truck19.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  const vehicles = [
    {
      type: 'Kühl-LKW',
      count: 15,
      icon: Thermometer,
      specs: ['7,5t - 12t Nutzlast', 'Temperaturgeführt -20°C bis +20°C', 'GPS-Tracking'],
    },
    {
      type: 'Standard-LKW',
      count: 20,
      icon: Truck,
      specs: ['12t - 40t Nutzlast', 'Ladebordwand', 'Europaletten'],
    },
    {
      type: 'Sattelzug',
      count: 10,
      icon: Weight,
      specs: ['Bis 40t Nutzlast', 'Wechselbrücken-System', 'Langstrecke optimiert'],
    },
    {
      type: 'Transporter',
      count: 5,
      icon: Gauge,
      specs: ['Bis 3,5t Nutzlast', 'City-Logistik', 'Express-Lieferungen'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/fuhrpark/hero_trucks.jpg"
          alt="TSL Fuhrpark"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-800/60 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Unser Fuhrpark
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Moderne Fahrzeuge für alle Ihre Transportbedürfnisse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unser moderner Fuhrpark umfasst eine Vielzahl von Fahrzeugen, die speziell für unterschiedliche 
                  Transportanforderungen konzipiert sind. Alle Fahrzeuge werden regelmäßig gewartet und entsprechen 
                  den neuesten Umwelt- und Sicherheitsstandards.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mit GPS-Tracking, temperaturgeführten Kühlaufbauten und modernster Telematik garantieren wir 
                  sichere und pünktliche Lieferungen zu jeder Zeit.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Unsere Flotte im Überblick</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Über 50 moderne Fahrzeuge verschiedener Größen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Regelmäßige Wartung und Sicherheitschecks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Neueste Umweltstandards (Euro 6)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">GPS-Tracking für lückenlose Sendungsverfolgung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Temperaturgeführte Kühlfahrzeuge verfügbar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Slideshow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Unsere Flotte in Bildern</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Werfen Sie einen Blick auf unsere modernen Fahrzeuge
            </p>

            {/* Main Slideshow */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
              <div className="relative h-[500px] md:h-[600px]">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`TSL Truck ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation - Disabled */}
            {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? 'ring-4 ring-gray-700 scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Fahrzeugtypen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Unsere Fahrzeugtypen</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Von Kühlfahrzeugen bis zu Sattelzügen – wir haben das passende Fahrzeug für jeden Transportbedarf
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gray-700 p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{vehicle.type}</h3>
                      <p className="text-gray-300 text-lg">{vehicle.count} Fahrzeuge</p>
                    </div>
                    <vehicle.icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Eigenschaften:</h4>
                    <ul className="space-y-2">
                      {vehicle.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-700 mr-2">•</span>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doppeldecker Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Vorteile Doppeldecker</h2>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl p-8 md:p-10 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Vorteile der Doppeldecker-Sattelauflieger:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-100">Erhöhung des Auslastungsgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-100">Müllvermeidung durch Reduzierung der Transportverpackungen mit zweiter Ladeebene</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-100">Verkehrsentlastung durch drastische Einsparung von Leerfahrten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-100">Vermeidung der Umweltbelastungen durch hohen Auslastungsgrad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Auflieger Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Auflieger</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Lang-Auflieger</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wir setzen unter anderem Lang-Auflieger der Firmen <strong>Kögel</strong> und <strong>Schmitz</strong> ein, 
                  welche über eine Ladefläche von bis zu <strong>37 Europaletten-Stellplätze</strong> verfügen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Doppeldeckerauflieger</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bei Doppeldeckerauflieger ist eine Kapazität von bis zu <strong>55 Stellplätzen</strong> vorhanden.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="text-green-800 font-semibold">
                    Dies entspricht eine Steigerung des Ladevolumens von bis zu 55% pro Fahrt.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Hydraulisches Be- und Entladesystem</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Be- und entladen werden die Rollcontainer / Europaletten durch ein <strong>hydraulisches System</strong>, 
                  das die Ware problemlos vom Rampenniveau des Lagers (bis 2,20m Höhe) heben oder auf Grundhöhe absenken kann.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-gray-800 mb-2">3,2t</p>
                    <p className="text-sm text-gray-600">Max. Gesamtgewicht</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-gray-800 mb-2">4m</p>
                    <p className="text-sm text-gray-600">Bär-Lift Länge</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-gray-800 mb-2">182,5cm</p>
                    <p className="text-sm text-gray-600">Innenhöhe je Deck</p>
                  </div>
                </div>
                <p className="mt-4">
                  Auch schwere Lasten bis zu einem Gesamtgewicht von 3,2 Tonnen lassen sich von dem 4 Meter langen 
                  Bär-Lift bewältigen. Die Innenhöhen der beiden Decks betragen je 182,5 cm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Technologie & Ausstattung
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-800">GPS-Tracking</h3>
                <p className="text-gray-700">
                  Alle Fahrzeuge sind mit modernster GPS-Technologie ausgestattet für lückenlose Sendungsverfolgung.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-800">Temperaturkontrolle</h3>
                <p className="text-gray-700">
                  Unsere Kühlfahrzeuge garantieren durchgehende Kühlkette von -20°C bis +20°C.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-800">Telematik-System</h3>
                <p className="text-gray-700">
                  Intelligente Flottensteuerung für optimierte Routen und Kraftstoffeffizienz.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-800">Sicherheit</h3>
                <p className="text-gray-700">
                  Modernste Sicherheitssysteme und regelmäßige Wartung für maximale Betriebssicherheit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
