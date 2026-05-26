import { Mail, Phone, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="text-center md:text-left">
            <img src="/tsl-logo.jpg" alt="Logo" className="hidden md:block w-24 mb-4 mx-auto md:mx-0" />
            <p className="hidden md:block text-gray-400 mb-4">
              Ihr zuverlässiger Partner für Transport und Logistik seit über 20 Jahren.
            </p>
            <div className="hidden md:flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/TSL-GmbH-Gro%c3%9f-Umstadt-112782854818567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/tslgmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-300">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin size={24} className="text-gray-300 mt-1 flex-shrink-0 md:w-5 md:h-5" />
                <p className="text-gray-400">
                  Hauptsitz Deutschland<br />
                  Groß-Umstadt<br />
                  Am Sportplatz 1
                </p>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone size={24} className="text-gray-300 flex-shrink-0 md:w-5 md:h-5" />
                <p className="text-gray-400">+49 (0) 6078 93560</p>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail size={24} className="text-gray-300 flex-shrink-0 md:w-5 md:h-5" />
                <p className="text-gray-400">info@tsl-gmbh.de</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-300">Quick Links</h3>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:block md:space-y-2 md:gap-0">
              <li>
                <Link to="/" className="inline-block py-1 text-gray-400 hover:text-gray-200 transition-colors">
                  Über uns
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to="/fleet" className="inline-block py-1 text-gray-400 hover:text-gray-200 transition-colors">
                  Fuhrpark
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to="/jobs" className="inline-block py-1 text-gray-400 hover:text-gray-200 transition-colors">
                  Stellenangebote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1 text-gray-400 hover:text-gray-200 transition-colors">
                  Kontakt
                </Link>
              </li>
              {/* Mobile-only legal links under Quick Links */}
              <li className="md:hidden">
                <Link to="/imprint" className="inline-block py-1 text-gray-400 hover:text-gray-200 transition-colors">
                  Impressum
                </Link>
              </li>
              <li className="md:hidden">
                <Link to="/privacy" className="inline-block py-1 text-gray-400 hover:text-gray-200 transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
            {/* Mobile social icons below Quick Links */}
            <div className="md:hidden mt-3 flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/TSL-GmbH-Gro%c3%9f-Umstadt-112782854818567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/tslgmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 TSL GmbH. Alle Rechte vorbehalten.
          </p>
          {/*add here text - developed by innovative-tech */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">Entwickelt von <a href="https://innovativ-tech.de/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">Innovative-Tech</a></p>
          <div className="hidden md:flex space-x-6 text-sm">
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
