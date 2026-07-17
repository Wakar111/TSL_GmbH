// Data used in Contact.tsx

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

export const departments: Department[] = [
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
    title: 'Key Account',
    people: [
    { name: 'Tatjana Volke', role: 'Key Account', phone: '06078 935617', email: 'tatjana.volke@tsl-gmbh.de' },
    ],
},
{
    title: 'Disposition Magdeburg',
    people: [
    { name: 'Melanie Kiesewetter', phone: '06078 935625', email: 'melanie.kiesewetter@tsl-gmbh.de' },
    { name: 'Marcus Laue', phone: '06078 955676', email: 'marcus.laue@tsl-gmbh.de' },
    { name: 'Uwe Pohl' }
    ],
},
{
    title: 'Disposition Groß-Umstadt',
    people: [
    { name: 'Matvei Eidemiller', role: 'Dispositionsleiter', phone: '06078 935654', email: 'matvei.eidemiller@tsl-gmbh.de' },
    { name: 'Anni Torossian', phone: '06078 935644', email: 'anni.torossian@tsl-gmbh.de' },
    { name: 'Artin Houssepian', phone: '06078 935613', email: 'artin.houssepian@tsl-gmbh.de' },
    { name: 'Tim Kurz', phone: '06078 935669', email: 'tim.kurz@tsl-gmbh.de' },
    { name: 'Edwin de Waal', phone: '06078 935616', email: 'edwin.dewaal@tsl-gmbh.de' },
    { name: 'Leon Amann', phone: '06078 935656', email: 'leon.amann@tsl-gmbh.de' },
    { name: 'Andreas Stamer', phone: '0172 6380063', email: 'andreas.stamer@tsl-gmbh.de' }
    ],
},
{
    title: 'Disposition Dietzenbach',
    people: [
    { name: 'Tobias Bischoff', role: 'Dispositionsleiter', phone: '06078 935642', email: 'tobias.bischoff@tsl-gmbh.de' },
    { name: 'Kevin Baron', phone: '06078 935629', email: 'kevin.baron@tsl-gmbh.de' },
    { name: 'Ilias Arida', phone: '06078 935619', email: 'ilias.arida@tsl-gmbh.de' },
    { name: 'Ninus Bahbah', phone: '06078 935615', email: 'ninus.bahbah@tsl-gmbh.de' },
    { name: 'Ingo Forner', phone: '06078 935658', email: 'ingo.forner@tsl-gmbh.de' },
    { name: 'Melih Heptazehler', phone: '06078 935675', email: 'melih.heptazehler@tsl-gmbh.de' }
    ],
},
{
    title: 'Administrative',
    people: [
    { name: 'Maximilian Rollmann', role: 'Kaufmännische Leitung Administrative/Palettenverwaltung', phone: '06078115633', email: 'max.rollmann@tsl-gmbh.de' },
    { name: 'Jürgen Grasmück', phone: '06078 935623', email: 'juergen.grasmueck@tsl-gmbh.de' },
    { name: 'Ivone Marques', phone: '06078 935628', email: 'ivone.marques@tsl-gmbh.de' },
    { name: 'Celine Dias', phone: '06078 935652', email: 'celine.dias@tsl-gmbh.de' },
    { name: 'Anika Ziemer', phone: '06078 935673', email: 'anika.ziemer@tsl-gmbh.de' },
    { name: 'Patrycja Weigel', phone: '06078 935672', email: 'patrycja.weigel@tsl-gmbh.de' },
    { name: 'Alexandra Jewlew', phone: '06078 935674', email: 'alexandra.jewlew@tsl-gmbh.de' }
    ],
},
{
    title: 'Buchhaltung',
    people: [
    { name: 'Merve Mermertas', phone: '06078 935661', email: 'merve.mermertas@tsl-gmbh.de' },
    { name: 'Andrea Priesel', phone: '06078 935641', email: 'andrea.priesel@tsl-gmbh.de' },
    { name: 'Sebastian Schork', phone: '06078 935622', email: 'sasha.schork@tsl-gmbh.de' }
    ],
},
{
    title: 'Fuhrpark',
    people: [
    { name: 'Jürgen Eisenmann', role: 'Leitung Fuhrpark', phone: '06078 935664', email: 'juergen.eisenmann@tsl-gmbh.de' },
    { name: 'Christoph Illig', phone: '06078 935653', email: 'christoph.illig@tsl-gmbh.de' },
    { name: 'Jürgen Henke', phone: '06078 935650', email: 'juergen.henke@tsl-gmbh.de' },
    { name: 'Thomas Lachmann', phone: '06078 935678', email: 'thomas.lachmann@tsl-gmbh.de' }
    ],
},
{
    title: 'Außenstelle Dietzenbach',
    people: [
    { name: 'Maciej Grembowski', phone: '06078 935621', email: 'maciej.grembowski@tsl-gmbh.de' },
    { name: 'Michael Müller', phone: '06078 935649', email: 'michael.mueller@tsl-gmbh.de' },
    { name: 'Mandy von Vultée', phone: '06078 935678', email: 'mandy.vonvultee@tsl-gmbh.de' },
    { name: 'Lubomir Kostal', phone: '06078 935670', email: 'lubomir.kostal@tsl-gmbh.de' }
    ],
}
];