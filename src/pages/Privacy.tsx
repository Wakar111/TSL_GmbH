export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-semibold text-lg mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Datenerfassung auf unserer Website</h2>
                <h3 className="font-semibold text-lg mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h3 className="font-semibold text-lg mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                  z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind
                  vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="font-semibold text-lg mb-2">Datenschutz</h3>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                  Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                  sowie dieser Datenschutzerklärung.
                </p>
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende
                  Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Datenerfassung auf unserer Website</h2>
                <h3 className="font-semibold text-lg mb-2">Cookies</h3>
                <p className="mb-4">
                  Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner
                  keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
                  effektiver und sicherer zu machen.
                </p>

                <h3 className="font-semibold text-lg mb-2">Server-Log-Dateien</h3>
                <p className="mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Kontaktformular</h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
                  ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Ihre Rechte</h2>
                <p className="mb-4">
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                  Sperrung oder Löschung dieser Daten zu verlangen.
                </p>
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
                  Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
