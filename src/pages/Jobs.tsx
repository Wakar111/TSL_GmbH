import { BriefcaseIcon, MapPin, Clock, Euro } from 'lucide-react';

export default function Jobs() {
  const jobListings = [
    {
      title: 'Berufskraftfahrer (m/w/d)',
      location: 'Deutschland, mehrere Standorte',
      type: 'Vollzeit',
      salary: 'Ab 3.000€ brutto',
      description: 'Wir suchen erfahrene Berufskraftfahrer für unsere moderne Flotte. CE-Führerschein erforderlich.',
      requirements: [
        'Gültiger Führerschein Klasse CE',
        'Berufserfahrung im Güterverkehr',
        'Zuverlässigkeit und Pünktlichkeit',
        'Deutschkenntnisse',
      ],
    },
    {
      title: 'Disponent (m/w/d)',
      location: 'Hauptsitz Deutschland',
      type: 'Vollzeit',
      salary: 'Nach Vereinbarung',
      description: 'Zur Verstärkung unseres Teams suchen wir einen erfahrenen Disponenten für die Tourenplanung.',
      requirements: [
        'Erfahrung in der Disposition',
        'Kenntnisse in Logistiksoftware',
        'Organisationstalent',
        'Teamfähigkeit',
      ],
    },
    {
      title: 'KFZ-Mechatroniker (m/w/d)',
      location: 'Deutschland',
      type: 'Vollzeit',
      salary: 'Ab 2.800€ brutto',
      description: 'Für unsere Werkstatt suchen wir einen qualifizierten KFZ-Mechatroniker zur Wartung unserer Fahrzeuge.',
      requirements: [
        'Abgeschlossene Ausbildung',
        'Erfahrung mit Nutzfahrzeugen',
        'Selbstständige Arbeitsweise',
        'Führerschein Klasse B',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Stellenangebote</h1>
          <p className="text-xl text-teal-100">
            Werden Sie Teil unseres erfolgreichen Teams
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Arbeiten bei TSL GmbH</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wir sind ein dynamisches Unternehmen mit flachen Hierarchien und einem kollegialen Arbeitsklima.
              Bei uns erwartet Sie ein modernes Arbeitsumfeld mit vielfältigen Entwicklungsmöglichkeiten.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unser Team von 65 Mitarbeitern freut sich auf Ihre Verstärkung!
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1 text-teal-600" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1 text-teal-600" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Euro size={16} className="mr-1 text-teal-600" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <BriefcaseIcon className="w-12 h-12 text-teal-600 hidden md:block" />
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Anforderungen:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-teal-600 mr-2">✓</span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Initiativbewerbung</h2>
            <p className="text-lg text-gray-700 mb-8">
              Sie haben Ihre Traumstelle nicht gefunden? Senden Sie uns gerne eine Initiativbewerbung!
            </p>
            <a
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Initiativbewerbung senden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
