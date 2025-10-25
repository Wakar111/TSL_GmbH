import { Phone, Mail, FileText, Users, CheckCircle, Send } from 'lucide-react';
import DragShuffleHero from '../components/DragShuffleHero';

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}      
      <DragShuffleHero />


      {/* Main Content Section - Video & Application */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
            
            {/* Left Side - HR Video */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Lernen Sie uns kennen
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Erfahren Sie mehr über TSL GmbH und was uns als Arbeitgeber auszeichnet.
                </p>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <video
                  src="/optimized/jobs_videos/hr_videos/hr-video.mp4"
                  controls
                  className="w-full"
                  poster="/trucks-hiring.jpg"
                >
                  Ihr Browser unterstützt das Video-Element nicht.
                </video>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Users className="w-6 h-6 text-gray-700" />
                  Warum TSL GmbH?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Familiäres Arbeitsumfeld mit flachen Hierarchien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Moderne Flotte und neueste Technologie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexible Arbeitszeiten und Work-Life-Balance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Vielfältige Entwicklungsmöglichkeiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Über 20 Jahre Erfahrung in der Logistikbranche</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Application Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8" />
                  <h2 className="text-3xl font-bold">Initiativbewerbung</h2>
                </div>
                
                <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                  Sie haben Ihre Traumstelle nicht gefunden? Kein Problem! Wir freuen uns über Ihre 
                  Initiativbewerbung und lernen Sie gerne kennen.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      So bewerben Sie sich:
                    </h3>
                    <ol className="space-y-3 text-gray-200">
                      <li className="flex items-start gap-3">
                        <span className="bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                        <span>Bereiten Sie Ihre Bewerbungsunterlagen vor (Lebenslauf, Anschreiben, Zeugnisse)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                        <span>Senden Sie Ihre Bewerbung per E-Mail oder rufen Sie uns an</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-white text-gray-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                        <span>Wir melden uns zeitnah bei Ihnen für ein persönliches Gespräch</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
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
                        className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors"
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
                        href="mailto:tsl@tsl-gmbh.de" 
                        className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors break-all"
                      >
                        tsl@tsl-gmbh.de
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
                    href="mailto:tsl@tsl-gmbh.de?subject=Initiativbewerbung"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Haben Sie Fragen?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
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
                href="mailto:tsl@tsl-gmbh.de"
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
