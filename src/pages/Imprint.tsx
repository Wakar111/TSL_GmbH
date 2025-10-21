export default function Imprint() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Impressum</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Angaben gemäß § 5 TMG</h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Firmenname</h3>
                <p>TSL GmbH</p>
                <p>Transport & Logistik</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Anschrift</h3>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Deutschland</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Kontakt</h3>
                <p>Telefon: +49 (0) 123 456789</p>
                <p>E-Mail: info@tsl-gmbh.de</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Vertretungsberechtigte Geschäftsführer</h3>
                <p>Max Mustermann</p>
                <p>Maria Musterfrau</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Registereintrag</h3>
                <p>Handelsregister: HRB 12345</p>
                <p>Registergericht: Amtsgericht Musterstadt</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                <p>DE123456789</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Haftungsausschluss</h3>
                <p className="mb-3">
                  <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter,
                  auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
                  der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
