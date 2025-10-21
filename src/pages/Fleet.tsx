import { Truck, Gauge, Weight, Thermometer } from 'lucide-react';

export default function Fleet() {
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
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Unser Fuhrpark</h1>
          <p className="text-xl text-teal-100">
            Moderne Fahrzeuge für alle Ihre Transportbedürfnisse
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unsere moderne Flotte umfasst über 50 Fahrzeuge unterschiedlicher Größen und Ausstattungen.
              Jedes Fahrzeug wird regelmäßig gewartet und entspricht den neuesten Umwelt- und Sicherheitsstandards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mit GPS-Tracking, temperaturgeführten Kühlaufbauten und modernster Telematik garantieren wir
              sichere und pünktliche Lieferungen zu jeder Zeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-teal-600 p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{vehicle.type}</h3>
                    <p className="text-teal-100 text-lg">{vehicle.count} Fahrzeuge</p>
                  </div>
                  <vehicle.icon className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Eigenschaften:</h4>
                  <ul className="space-y-2">
                    {vehicle.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
