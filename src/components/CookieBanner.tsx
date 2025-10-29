import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ necessary: true }));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4"
        >
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-4 md:p-6">
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Cookie className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">Cookie-Hinweis</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Wir verwenden nur technisch notwendige Cookies. Mehr Informationen in der
                    {' '}<a href="/privacy" className="text-blue-600 hover:underline">Datenschutzerklärung</a>.
                  </p>
                  <div className="mt-3">
                    <button
                      onClick={acceptNecessary}
                      className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm md:text-base hover:bg-gray-700 transition-colors"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
  );
}

