import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">TSL GmbH</h3>
            <p className="text-gray-400 mb-4">
              Ihr zuverlässiger Partner für Transport und Logistik seit über 20 Jahren.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Hauptsitz Deutschland<br />
                  Standorte in ganz Deutschland
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <p className="text-gray-400">+49 (0) 123 456789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <p className="text-gray-400">info@tsl-gmbh.de</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Fuhrpark
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Stellenangebote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TSL GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/imprint" className="text-gray-400 hover:text-teal-400 transition-colors">
              Impressum
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
