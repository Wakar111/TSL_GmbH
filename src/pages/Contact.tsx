import { Mail, Phone } from 'lucide-react';

interface ContactPerson {
  name: string;
  role?: string;
  phone?: string;
  email?: string;
}

interface Department {
  title: string;
  people: ContactPerson[];
}

export default function Contact() {
  const departments: Department[] = [
    {
      title: 'Geschäftsführung',
      people: [
        { name: 'Alen Houssepian', phone: '06078 935640', email: 'alen.houssepian@tsl-gmbh.de' },
        { name: 'Ron Landgraf', phone: ' 06078 935660', email: ' ron.landgraf@tsl-gmbh.de' },
        { name: 'Felix Fuhrer', phone: '06078 935626', email: 'felix.fuhrer@tsl-gmbh.de' },
        { name: 'Andreas Hillmann' }
      ],
    },
    {
      title: 'Disposition Magdeburg',
      people: [
        { name: 'Enrico Lobenstein', phone: '06078 935665', email: 'enrico.lobenstein@tsl-gmbh.de' },
        { name: 'Melanie Kiesewetter', phone: '06078 935625', email: 'melanie.kiesewetter@tsl-gmbh.de' },
        { name: 'Andreas Stamer', phone: '0172 6380063', email: 'andreas.stamer@tsl-gmbh.de' },
        { name: 'Uwe Pohl' }
      ],
    },
    {
      title: 'Disposition Groß-Umstadt',
      people: [
        { name: 'Tobias Bischoff', phone: '06078 935642', email: 'tobias.bischoff@tsl-gmbh.de' },
        { name: 'Tatjana Volke', phone: '06078 935617', email: 'tatjana.volke@tsl-gmbh.de' },
        { name: 'Anni Torossian', phone: '06078 935644', email: 'anni.torossian@tsl-gmbh.de' },
        { name: 'Matvei Eidemiller', phone: '06078 935654', email: 'matvei.eidemiller@tsl-gmbh.de' },
        { name: 'Artin Houssepian', phone: '06078 935613', email: 'artin.houssepian@tsl-gmbh.de' },
        { name: 'Tim Kurz', phone: '06078 935669', email: 'tim.kurz@tsl-gmbh.de' },
        { name: 'Edwin de Waal', phone: '06078 935616', email: 'edwin.dewaal@tsl-gmbh.de' },
        { name: 'Denise Dias', phone: '06078 935689', email: 'denise.dias@tsl-gmbh.de' },
        { name: 'Lubomir Kostal', phone: '06078935649', email: 'lubomir.kostal@tsl-gmbh.de' },
      ],
    },
    {
      title: 'Administrative',
      people: [
        { name: 'Anita Qamar', role: 'Personal', phone: '060789325646', email: 'anni.qama@tsl-gmbh.de' },
        { name: 'Maximilian Rollmann', role: 'Kaufmännische Leitung Administrative/Palettenverwaltung', phone: '06078115633', email: 'max.rollmann@tsl-gmbh.de' },
        { name: 'Jürgen Grasmück', phone: '06078935623', email: 'juergen.grasmueck@tsl-gmbh.de' },
      ],
    },
    {
      title: 'Buchhaltung',
      people: [
        { name: 'Andrea Priesel', phone: '060789352241', email: 'andrea.priesel@tsl-gmbh.de' },
        { name: 'Sebastian Schork', phone: '06078922622', email: 'sasha.stark@tsl-gmbh.de' },
        { name: 'Merve Mermertas', phone: '06078935633', email: 'merve.mermeas@tsl-gmbh.de' },
      ],
    },
    {
      title: 'Fuhrpark',
      people: [
        { name: 'Jürgen Eisenmann', role: 'Leitung Fuhrpark', phone: '06078935664', email: 'juergen.eisenmann@tsl-gmbh.de' },
        { name: 'Christoph Illig', role: 'Fuhrpark', phone: '06078935653', email: 'christoph.illig@tsl-gmbh.de' },
      ],
    },
    {
      title: 'Außenstelle Dietzenbach',
      people: [
        { name: 'Ninus Bahbah', phone: '06078935615', email: 'ninus.bahbah@tsl-gmbh.de' },
        { name: 'Maciej Grembowski', phone: '06078935621', email: 'maciej.grembowski@tsl-gmbh.de' },
        { name: 'Melanie Kiesewetter', phone: '06078935621', email: 'melanie.kiesewetter@tsl-gmbh.de' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-300">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Unsere Ansprechpartner</h2>
            
            <div className="space-y-8">
              {departments.map((department, deptIndex) => (
                <div key={deptIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-700 px-6 py-4">
                    <h3 className="text-2xl font-bold text-white">{department.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {department.people.map((person, personIndex) => (
                        <div key={personIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-gray-800 text-lg mb-1">{person.name}</h4>
                          {person.role && (
                            <p className="text-sm text-gray-600 mb-3 italic">{person.role}</p>
                          )}
                          <div className="space-y-2">
                            {person.phone && (
                              <div className="flex items-center text-gray-700">
                                <Phone size={16} className="mr-2 text-gray-600 flex-shrink-0" />
                                <a href={`tel:${person.phone}`} className="text-sm hover:text-gray-900">
                                  {person.phone}
                                </a>
                              </div>
                            )}
                            {person.email && (
                              <div className="flex items-center text-gray-700">
                                <Mail size={16} className="mr-2 text-gray-600 flex-shrink-0" />
                                <a href={`mailto:${person.email}`} className="text-sm hover:text-gray-900 break-all">
                                  {person.email}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
