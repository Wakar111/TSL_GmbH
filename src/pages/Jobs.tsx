import { Phone, Mail, FileText, Users, CheckCircle, Send, GraduationCap, Briefcase, ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import DragShuffleHero from '../components/DragShuffleHero';
import { STELLENANGEBOTE_ENABLED } from '../config/features';

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}      
      <DragShuffleHero />

      {/* Aktuelle Stellenangebote */}
      {STELLENANGEBOTE_ENABLED && (
      <section id="aktuelle-stellen" className="py-12 md:py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
                Aktuelle Stellenangebote 2026
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Starte deine Karriere bei TSL – wähle deinen Weg in die Logistikbranche.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ProgramCard
                to="/jobs/ausbildung-2026"
                icon={Briefcase}
                tag="AUSBILDUNG"
                title="Ausbildung bei TSL 2026"
                subtitle="Kaufmann/Frau für Spedition und Logistikdienstleistung (m/w/d)"
                startLabel="Ausbildungsbeginn"
                startValue="1. September 2026"
              />
              <ProgramCard
                to="/jobs/duales-studium-2026"
                icon={GraduationCap}
                tag="DUALES STUDIUM"
                title="Duales Studium Wintersemester 2026"
                subtitle="BWL – Spedition, Transport & Logistik"
                startLabel="Studienstart"
                startValue="Wintersemester 2026"
              />
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Main Content Section - Video & Application */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            
            {/* Left Side - HR Video */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                  Lernen Sie uns kennen
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 text-center md:text-left">
                  Erfahren Sie mehr über TSL GmbH und was uns als Arbeitgeber auszeichnet.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <video
                  src="/tsl-employees/jobs_videos/hr-video.mp4"
                  controls
                  className="w-full"
                  poster="/tsl-logo.jpg"
                >
                  Ihr Browser unterstützt das Video-Element nicht.
                </video>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-gray-700" />
                  Warum TSL GmbH?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Familiäres Arbeitsumfeld mit flachen Hierarchien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Moderne Flotte und neueste Technologie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Flexible Arbeitszeiten und Work-Life-Balance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Vielfältige Entwicklungsmöglichkeiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">Über 20 Jahre Erfahrung in der Logistikbranche</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Application Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                  <FileText className="w-8 h-8" />
                  <h2 className="text-2xl md:text-3xl font-bold">Initiativbewerbung</h2>
                </div>
                
                <p className="text-gray-200 mb-8 text-base md:text-lg leading-relaxed text-center md:text-left">
                  Sie haben Ihre passende Stelle nicht gefunden? Kein Problem! Wir freuen uns über Ihre 
                  Initiativbewerbung und lernen Sie gerne kennen.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start">
                      <Send className="w-5 h-5" />
                      So bewerben Sie sich:
                    </h3>
                    <ol className="space-y-3 text-gray-200">
                      <li className="flex items-start gap-3">
                        <span className="bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                        <span className="text-sm md:text-base">Bereiten Sie Ihre Bewerbungsunterlagen vor (Lebenslauf, Anschreiben, Zeugnisse)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                        <span className="text-sm md:text-base">Senden Sie Ihre Bewerbung per E-Mail oder rufen Sie uns an</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                        <span className="text-sm md:text-base">Wir melden uns zeitnah bei Ihnen für ein persönliches Gespräch</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Telefon</p>
                      <a 
                        href="tel:+4960789356" 
                        className="text-base md:text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors"
                      >
                        +49 (0) 6078 93560
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">E-Mail</p>
                      <a 
                        href="mailto:bewerbung@tsl-gmbh.de" 
                        className="text-base md:text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors break-all"
                      >
                        bewerbung@tsl-gmbh.de
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">
                      Betreff für Ihre Bewerbung:
                    </p>
                    <p className="font-medium text-gray-800 bg-gray-50 px-4 py-2 rounded-lg">
                      "Initiativbewerbung - [Ihr Name]"
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="mailto:bewerbung@tsl-gmbh.de?subject=Initiativbewerbung"
                    className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Jetzt per E-Mail bewerben
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Haben Sie Fragen?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Unser HR-Team steht Ihnen gerne zur Verfügung und beantwortet alle Ihre Fragen 
              rund um Karrieremöglichkeiten bei TSL GmbH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49607893560"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Anrufen
              </a>
              <a
                href="mailto:bewerbung@tsl-gmbh.de"
                className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProgramCardProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  subtitle: string;
  startLabel: string;
  startValue: string;
}

function ProgramCard({ to, icon: Icon, tag, title, subtitle, startLabel, startValue }: ProgramCardProps) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl bg-[#0b1a2e] text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[280px]">
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-md tracking-wider">
            <Icon className="w-4 h-4" />
            {tag}
          </span>
          <span className="text-xs text-gray-400">2026</span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold mb-2 leading-tight">{title}</h3>
        <p className="text-sm md:text-base text-gray-300 mb-6 flex-grow">{subtitle}</p>

        <div className="flex items-center gap-3 mb-6 text-sm">
          <CalendarDays className="w-5 h-5 text-red-500 flex-shrink-0" />
          <div>
            <div className="text-[11px] uppercase font-semibold text-gray-400">{startLabel}</div>
            <div className="font-bold">{startValue}</div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-red-400 group-hover:text-red-300 font-semibold text-sm">
          Mehr erfahren
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
