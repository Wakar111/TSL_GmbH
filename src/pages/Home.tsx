import { Truck, Users, MapPin, Award, Package, Clock } from 'lucide-react';

export default function Home() {
  const partners = ['REWE', 'PENNY', 'TOOM', 'Scania'];

  const services = [
    {
      icon: Package,
      title: 'Logistikpakete',
      description: 'Individuelle Logistiklösungen für Ihre Bedürfnisse',
    },
    {
      icon: Truck,
      title: 'Transportkapazitäten',
      description: 'Moderne Flotte für sichere und pünktliche Lieferungen',
    },
    {
      icon: Clock,
      title: 'Frische-Logistik',
      description: 'Spezialisiert auf temperaturgeführte Transporte',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ihr Partner für Transport & Logistik
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Mit 65 Mitarbeitern und Standorten in ganz Deutschland bieten wir professionelle Logistiklösungen für Ihre Anforderungen.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">65</h3>
              <p className="text-gray-600">Mitarbeiter</p>
            </div>
            <div className="p-6">
              <Truck className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Fahrzeuge</p>
            </div>
            <div className="p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10+</h3>
              <p className="text-gray-600">Standorte</p>
            </div>
            <div className="p-6">
              <Award className="w-12 h-12 mx-auto mb-4 text-gray-700" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Über uns</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            TSL GmbH ist Ihr zuverlässiger Partner für professionelle Logistiklösungen in ganz Deutschland
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mit über 20 Jahren Erfahrung in der Logistikbranche bietet TSL GmbH umfassende Transport- und Logistikdienstleistungen. Unser Team von 65 hochqualifizierten Mitarbeitern arbeitet täglich daran, die Bedürfnisse unserer Kunden zu erfüllen und zu übertreffen.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mit Standorten in mehreren deutschen Städten sind wir optimal positioniert, um schnelle und effiziente Lieferungen in ganz Deutschland und darüber hinaus zu gewährleisten. Unsere moderne Flotte und individuell angepasste Software-Lösungen ermöglichen es uns, auch komplexeste logistische Herausforderungen zu meistern.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kundenzufriedenheit steht bei uns an erster Stelle. Wir entwickeln maßgeschneiderte Logistikpakete, die perfekt auf die spezifischen Anforderungen unserer Kunden zugeschnitten sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Unsere Dienstleistungen</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Maßgeschneiderte Lösungen für Ihre Logistikanforderungen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 mb-4 text-gray-700" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Unsere Partner</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl font-bold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bereit für die Zusammenarbeit?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihre Logistik optimieren können.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </section>
    </div>
  );
}
