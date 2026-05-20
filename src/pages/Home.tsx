import { CheckCircle, GraduationCap, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { partners, servicesList } from '../data/homeData';
import { CountUpStats } from '../components/CountUpStats';
import { TiltShineCard } from '../components/TiltShineCard';
import { STELLENANGEBOTE_ENABLED } from '../config/features';

export default function Home() {

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
          preload="metadata"
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="max-w-3xl text-center md:text-left mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Ihr Partner für Transport & Logistik
            </h1>
            <p className="text-base md:text-2xl mb-8 text-gray-200">
              Mit über 140 Mitarbeitern und Standorten in ganz Deutschland bieten wir professionelle Logistiklösungen für Ihre Anforderungen.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-800 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      {/* Recruiting Announcement Banner */}
      {STELLENANGEBOTE_ENABLED && (
      <section className="py-6 md:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0b1a2e] via-[#0f2240] to-[#0b1a2e] shadow-xl hover:shadow-2xl transition-shadow">
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 left-1/3 w-56 h-56 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 text-white">
              <div className="flex items-start md:items-center gap-4 md:gap-5 flex-1">
                <div className="hidden sm:flex w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md tracking-wider">
                      NEU 2026
                    </span>
                    <Link
                      to="/jobs/ausbildung-2026"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-md transition-colors"
                    >
                      <Briefcase className="w-3 h-3" /> AUSBILDUNG
                    </Link>
                    <Link
                      to="/jobs/duales-studium-2026"
                      className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-md transition-colors"
                    >
                      <GraduationCap className="w-3 h-3" /> DUALES STUDIUM
                    </Link>
                  </div>
                  <h3 className="text-lg md:text-2xl font-extrabold leading-tight">
                    Wir stellen ein! <span className="text-red-400">Neue Stellenangebote 2026</span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mt-1">
                    Starte deine Karriere bei TSL – Ausbildung &amp; Duales Studium ab 2026 verfügbar.
                  </p>
                </div>
              </div>

              <Link
                to="/jobs#aktuelle-stellen"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-5 md:px-6 py-3 rounded-lg font-bold text-sm md:text-base shadow-lg flex-shrink-0"
              >
                Jetzt entdecken
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      )}

      <section className="py-12 md:py-16 bg-white">
        <CountUpStats />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Mit über 30 Jahren Erfahrung in der Logistikbranche bietet TSL GmbH umfassende Transport- und Logistikdienstleistungen. Unser Team von 140 hochqualifizierten Mitarbeitern arbeitet täglich daran, die Bedürfnisse unserer Kunden zu erfüllen und zu übertreffen.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Mit Standorten in mehreren deutschen Städten sind wir optimal positioniert, um schnelle und effiziente Lieferungen in ganz Deutschland und darüber hinaus zu gewährleisten. Unsere moderne Flotte und individuell angepasste Software-Lösungen ermöglichen es uns, auch komplexeste logistische Herausforderungen zu meistern.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Kundenzufriedenheit steht bei uns an erster Stelle. Wir entwickeln maßgeschneiderte Logistikpakete, die perfekt auf die spezifischen Anforderungen unserer Kunden zugeschnitten sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Unsere Leistungen</h2>
            <p className="text-base md:text-lg text-gray-600">
              Die folgende Liste zeigt eine Übersicht unserer aktuellen Leistungen.
              <br />
              Fragen zu den Positionen oder evtl. angebotenen Leistungen beantworten wir gerne unter
              {' '}<a href="contact" className="text-gray-800 hover:text-gray-900 font-medium transition-colors">KONTAKT</a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <ul className="space-y-4 text-left">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{feature.text}</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Über TSL GmbH</h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong>30+ Jahre Erfahrung</strong> in der Logistikbranche. Unser Team von 65 Spezialisten arbeitet täglich daran, Ihre Erwartungen zu übertreffen.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  Mit Standorten in ganz Deutschland sind wir optimal positioniert für <strong>schnelle und effiziente Lieferungen</strong>. Unsere moderne Flotte und individuellen Software-Lösungen meistern auch komplexeste Herausforderungen.
                </p>
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-800">99.2%</div>
                    <div className="text-xs md:text-sm text-gray-600">Pünktlichkeit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-800">24/7</div>
                    <div className="text-xs md:text-sm text-gray-600">Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-800">100%</div>
                    <div className="text-xs md:text-sm text-gray-600">Kundenfokus</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Warum TSL wählen?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm md:text-base">Deutschlandweites Netzwerk</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm md:text-base">Maßgeschneiderte Lösungen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm md:text-base">Transparente Preisgestaltung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm md:text-base">Persönlicher Ansprechpartner</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block mt-6 bg-gray-800 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium text-sm md:text-base"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Unsere Partner</h2>
          <p className="text-sm md:text-base text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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
          <h2 className="text-2xl md:text-5xl font-bold mb-6">Starten Sie jetzt durch!</h2>
          <p className="text-base md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Logistik optimieren. Kostenlose Erstberatung und maßgeschneiderte Lösungen für Ihr Unternehmen.
          </p>

          {/* Google Map with Tilt Effect */}
          <TiltShineCard />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-block w-full sm:w-auto bg-white text-gray-800 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg shadow-lg"
            >
              📞 Kostenlose Beratung anfragen
            </a>
            <a
              href="tel:+49123456789"
              className="inline-block w-full sm:w-auto border-2 border-white text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors text-base md:text-lg"
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
