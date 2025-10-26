import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/tsl-logo.jpg" alt="Logo" className="w-24 mb-4" />
            <p className="text-gray-400 mb-4">
              Ihr zuverlässiger Partner für Transport und Logistik seit über 20 Jahren.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/TSL-GmbH-Gro%c3%9f-Umstadt-112782854818567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/tslgmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-300">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Hauptsitz Deutschland<br />
                  Groß-Umstadt
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-300 flex-shrink-0" />
                <p className="text-gray-400">+49 (0) 6078 93560</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-300 flex-shrink-0" />
                <p className="text-gray-400">tsl@tsl-gmbh.de</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Fuhrpark
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Stellenangebote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gray-200 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

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

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TSL GmbH. Alle Rechte vorbehalten.
          </p>
          {/*add here text - developed by innovative-tech */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">Entwickelt von <a href="https://innovativ-tech.de/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">Innovative-Tech</a></p>
          <div className="flex space-x-6 text-sm">
            <Link to="/imprint" className="text-gray-400 hover:text-gray-200 transition-colors">
              Impressum
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-gray-200 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
