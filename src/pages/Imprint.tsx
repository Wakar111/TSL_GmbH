export default function Imprint() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
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
                <p>Am Sportplatz 1</p>
                <p>64823 Groß-Umstadt/ Richen</p>
                <p>Deutschland</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Kontakt</h3>
                <p>Telefon: <a href="tel:+49607893560">+49 (0) 6078 93560</a></p>
                <p>E-Mail: <a href="mailto:tsl@tsl-gmbh.de">tsl@tsl-gmbh.de</a></p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Vertretungsberechtigte Geschäftsführer</h3>
                <p>Alen Houssepian</p>
                <p>Ron Landgraf</p>
                <p>Andreas Hillmann</p>
              </div>


              <div>
                <h3 className="font-semibold text-lg mb-2">Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                <p>DE 165938488</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Rechtliche Hinweise</h3>
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

              {/* TODO: Add that innvative-tech has built this website */}
              <div> 
                <h3 className="font-semibold text-lg mb-2">Technische Umsetzung</h3>
                <p>Diese Website wurde technisch umgesetzt von 
                  <a href="https://innovativ-tech.de" target="_blank" className="text-blue-600 hover:underline" rel="noopener noreferrer"> Innovativ-Tech</a>
                  </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
