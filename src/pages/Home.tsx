import { Truck, Users, MapPin, Award, CheckCircle, ArrowRight, Box, Cpu, ShieldCheck, BarChart2, Target, Clock as ClockIcon, Wrench, Shield, RefreshCw, Layers } from 'lucide-react';

export default function Home() {
  const partners = [
    { name: 'REWE', logo: '/Firmen-Logos/REWE.png', className: 'h-12' },
    { name: 'PENNY', logo: '/Firmen-Logos/PENNY.png', className: 'h-12' },
    { name: 'TOOM', logo: '/Firmen-Logos/TOOM.png', className: 'h-12' },
    { name: 'SCANIA', logo: '/Firmen-Logos/SCANIA.png', className: 'h-12' },
    { name: '4media', logo: '/Firmen-Logos/4media.png', className: 'h-12' },
    { name: 'ECK', logo: '/Firmen-Logos/ECK.png', className: 'h-12' },
  ];

  const mediaItems = [
    {
      title: 'Sicherheit hat bei uns oberste Priorität.',
      description:
        'Jeder Handgriff zählt – vom ersten Check bis zur letzten Lieferung. Mit Erfahrung, Präzision und Verantwortungsbewusstsein sorgen wir dafür, dass Menschen, Fahrzeuge und Waren sicher und zuverlässig ans Ziel gelangen.',
      media: { type: 'video' as const, src: '/Videos/Abschnitt-1.mp4', alt: 'Fahrereinweisung' },
    },
  ];

  const servicesList = [
    {
      title: 'NUTZUNGSPAKETE',
      icon: Box,
      features: [
        { text: 'Schneller Lagerumschlag (24 Std. im Umkreis von 100 km)', icon: ClockIcon },
        { text: 'Einsatz modernster Technik', icon: Cpu },
        { text: 'Unser Equipment genügt höchsten logistischen Ansprüchen', icon: ShieldCheck },
        { text: 'Exzellenter Qualitätsstandard', icon: Award },
        { text: 'Ladekapazitätserhöhung von 55% durch Doppeldecker-Lastzüge', icon: Layers },
      ],
    },
    {
      title: 'LEISTUNGSMERKMALE',
      icon: Target,
      features: [
        { text: 'Individuelle Erstellung logistischer Konzepte gemäß dem Anforderungsprofil des Kunden', icon: Wrench },
        { text: 'Effektive Mehrwertdienste für kundenrelevante Anforderungen', icon: BarChart2 },
        { text: 'Ständige Optimierung der Transportwegeplanung', icon: RefreshCw },
        { text: 'Erhöhte Flexibilität durch individuelle Softwarelösungen', icon: Cpu },
        { text: 'Maximaler Service bei kalkulierbarer Kostenstruktur', icon: Shield },
        { text: 'Speziell auch Transporte für die Frische-Logistik', icon: Truck },
        { text: 'Gerne übernehmen wir auch die Disposition direkt bei Ihnen vor Ort', icon: MapPin },
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
      <section className="relative text-white py-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Hero-Section.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ihr Partner für Transport & Logistik
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600">
              Die folgende Liste zeigt eine Übersicht unserer aktuellen Leistungen.
              <br />
              Fragen zu den Positionen oder evtl. angebotenen Leistungen beantworten wir gerne unter
              {' '}<a href="contact" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">KONTAKT</a>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Sicherheit und Qualität im Transport
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Einblicke in unsere Arbeitsweise: geschulte Fahrer, klare Prozesse und moderne Fahrzeuge für sichere und pünktliche Lieferungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaItems.map((item, idx) => {
              if (item.media.type === 'video') {
                return (
                  <>
                    <div key={`${idx}-media`} className="bg-white rounded-xl overflow-hidden shadow-sm border md:col-span-2">
                      <div className="p-0">
                        <video
                          className="w-full h-72 md:h-[420px] object-cover"
                          controls
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        >
                          <source src={item.media.src} type="video/mp4" />
                          Ihr Browser unterstützt das Video-Element nicht.
                        </video>
                      </div>
                    </div>
                    <div key={`${idx}-text`} className="bg-gray-50 rounded-xl shadow-sm border p-6 md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                    </div>
                  </>
                );
              }

              return (
                <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2 p-6 flex items-center justify-center bg-white">
                      <img
                        src={item.media.src}
                        alt={item.media.alt}
                        className="max-h-56 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:border-l">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 mb-4">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Unsere Partner</h2>
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
