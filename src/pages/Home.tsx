import { Truck, Users, MapPin, Award, CheckCircle, ArrowRight, Cpu, ShieldCheck, BarChart2, Target, Clock as ClockIcon, Wrench, Shield, RefreshCw, Layers } from 'lucide-react';
import ImageSlideshow from '../components/ImageSlideshow';

export default function Home() {
  const partners = [
    { name: 'REWE', logo: '/Firmen-Logos/REWE.png', className: 'h-12' },
    { name: 'PENNY', logo: '/Firmen-Logos/PENNY.png', className: 'h-12' },
    { name: 'TOOM', logo: '/Firmen-Logos/TOOM.png', className: 'h-12' },
    { name: 'SCANIA', logo: '/Firmen-Logos/SCANIA.png', className: 'h-12' },
    { name: '4media', logo: '/Firmen-Logos/4media.png', className: 'h-12' },
    { name: 'ECK', logo: '/Firmen-Logos/ECK.png', className: 'h-12' },
  ];


  // Slideshow images
  const truckSlides = [
    {
      image: '/LKW-1.png',
      title: 'Moderne LKW Flotte',
      description: 'Unsere modernen Fahrzeuge für zuverlässige Transporte',
    },
    {
      image: '/LKW-2.png',
      title: 'Professionelle Logistik',
      description: 'Zuverlässiger Transport Ihrer Waren',
    },
  ];

  const servicesList = [
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

  // removed old 'services' cards in favor of detailed Leistungen section

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes partner-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <section className="relative text-white py-16 sm:py-24 md:py-32 overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Hero-Section.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="max-w-3xl text-center md:text-left mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ihr Partner für Transport & Logistik
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-200">
              Mit über 140 Mitarbeitern und Standorten in ganz Deutschland bieten wir professionelle Logistiklösungen für Ihre Anforderungen.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-800 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex md:grid md:grid-cols-4 md:gap-8 gap-6 overflow-x-auto no-scrollbar justify-center">
            <div className="shrink-0 md:shrink md:bg-white md:p-6 md:rounded-xl md:shadow-sm text-center">
              <div className="hidden md:flex w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">140+</h3>
              <p className="text-sm md:text-base text-gray-600">Mitarbeiter</p>
            </div>
            <div className="shrink-0 md:shrink md:bg-white md:p-6 md:rounded-xl md:shadow-sm text-center">
              <div className="hidden md:flex w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full items-center justify-center">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">50+</h3>
              <p className="text-sm md:text-base text-gray-600">Fahrzeuge</p>
            </div>
            <div className="shrink-0 md:shrink md:bg-white md:p-6 md:rounded-xl md:shadow-sm text-center">
              <div className="hidden md:flex w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">5+</h3>
              <p className="text-sm md:text-base text-gray-600">Standorte</p>
            </div>
            <div className="shrink-0 md:shrink md:bg-white md:p-6 md:rounded-xl md:shadow-sm text-center">
              <div className="hidden md:flex w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full items-center justify-center">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">30+</h3>
              <p className="text-sm md:text-base text-gray-600">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mit über 30 Jahren Erfahrung in der Logistikbranche bietet TSL GmbH umfassende Transport- und Logistikdienstleistungen. Unser Team von 140 hochqualifizierten Mitarbeitern arbeitet täglich daran, die Bedürfnisse unserer Kunden zu erfüllen und zu übertreffen.
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600">
              Die folgende Liste zeigt eine Übersicht unserer aktuellen Leistungen.
              <br />
              Fragen zu den Positionen oder evtl. angebotenen Leistungen beantworten wir gerne unter
              {' '}<a href="contact" className="text-gray-800 hover:text-gray-900 font-medium transition-colors">KONTAKT</a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <ul className="space-y-4 text-left">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
            

      {/* Über uns - moved after safety video */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Über TSL GmbH</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong>30+ Jahre Erfahrung</strong> in der Logistikbranche. Unser Team von 65 Spezialisten arbeitet täglich daran, Ihre Erwartungen zu übertreffen.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mit Standorten in ganz Deutschland sind wir optimal positioniert für <strong>schnelle und effiziente Lieferungen</strong>. Unsere moderne Flotte und individuellen Software-Lösungen meistern auch komplexeste Herausforderungen.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">99.2%</div>
                    <div className="text-sm text-gray-600">Pünktlichkeit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">24/7</div>
                    <div className="text-sm text-gray-600">Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">100%</div>
                    <div className="text-sm text-gray-600">Kundenfokus</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Warum TSL wählen?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Deutschlandweites Netzwerk</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Maßgeschneiderte Lösungen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Transparente Preisgestaltung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Persönlicher Ansprechpartner</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Kostenlose Beratung anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Unsere Partner</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vertrauen Sie auf bewährte Partnerschaften mit führenden Unternehmen
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex w-max gap-12 items-center"
              style={{ animation: 'partner-scroll 30s linear infinite' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Starten Sie jetzt durch!</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Logistik optimieren. Kostenlose Erstberatung und maßgeschneiderte Lösungen für Ihr Unternehmen.
          </p>

          {/* Google Map (Footer) */}
          <div className="mt-8 mb-8">
            <div className="mx-auto bg-gray-800/60 rounded-lg overflow-hidden shadow-inner w-full">
              <div className="relative w-full h-48 md:h-64">
                <iframe
                  title="TSL GmbH Standort"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Am%20Sportplatz%201%2C%2064823%20Gro%C3%9F-Umstadt%20Richen%2C%20Deutschland&output=embed"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block bg-white text-gray-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📞 Kostenlose Beratung anfragen
            </a>
            <a
              href="tel:+49123456789"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              Sofort anrufen
            </a>
          </div>
          <p className="mt-6 text-gray-300 text-sm">
            ✓ Unverbindlich ✓ Kostenlos ✓ Innerhalb 24h Rückmeldung
          </p>
        </div>
      </section>
    </div>
  );
}
