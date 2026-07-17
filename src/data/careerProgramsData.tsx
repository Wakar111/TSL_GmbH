// Data used in CareerProgramPage.tsx (Ausbildung & Duales Studium)
import {
  GraduationCap,
  Truck,
  BarChart3,
  Users,
  HandCoins,
  Award,
  type LucideIcon,
} from 'lucide-react';

export interface ProgramFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProgramData {
  slug: string;
  pageTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  badgeLabel: string;
  badgeValue: string;
  heroImage: string;
  topFeatures: { icon: LucideIcon; label: string }[];
  showHeaderCta: boolean;
  whyTitlePrefix: string;
  whyTitleHighlight: string;
  whyTitleSuffix: string;
  whyCards: ProgramFeature[];
  programSectionTitle: string;
  programSectionHighlight: string;
  roleTitle: string;
  roleSubtitle?: string;
  roleDescription: string;
  roleBullets: string[];
  requirements: string[];
  expectations: string[];
  applicationStartLabel: string;
  applicationStartValue: string;
}

export const ausbildungData: ProgramData = {
  slug: 'ausbildung-2026',
  pageTitle: 'Ausbildung bei der TSL GmbH',
  heroSubtitle: 'Ausbildung bei der TSL GmbH',
  heroDescription:
    'Starte deine Ausbildung zum 01.09. und werde Teil eines starken Teams in der modernen Transport- und Logistikbranche.',
  badgeLabel: 'AUSBILDUNGSBEGINN',
  badgeValue: '1. SEPTEMBER',
  heroImage: '/stellenangebote/hero_ausbildung_seite.png',
  topFeatures: [
    { icon: Users, label: 'PRAXISNAH\nARBEITEN' },
    { icon: BarChart3, label: 'ZUKUNFT\nGESTALTEN' },
    { icon: GraduationCap, label: 'KARRIERE\nSTARTEN' },
  ],
  showHeaderCta: true,
  whyTitlePrefix: 'WARUM EINE',
  whyTitleHighlight: 'AUSBILDUNG',
  whyTitleSuffix: 'BEI TSL?',
  whyCards: [
    {
      icon: GraduationCap,
      title: 'PRAXISNAH ARBEITEN',
      description:
        'Lerne von Anfang an die Praxis kennen und bringe dein Wissen direkt ins Team ein.',
    },
    {
      icon: HandCoins,
      title: 'STARKES TEAM',
      description:
        'Freu dich auf ein motiviertes Team, das dich unterstützt und gemeinsam mit dir wächst.',
    },
    {
      icon: BarChart3,
      title: 'ZUKUNFT GESTALTEN',
      description:
        'Als Unternehmen der REWE Group bieten wir dir beste Perspektiven und Entwicklungsmöglichkeiten.',
    },
    {
      icon: Award,
      title: 'ÜBERNAHMECHANCEN',
      description:
        'Bei guten Leistungen hast du sehr gute Chancen auf eine Übernahme nach der Ausbildung.',
    },
  ],
  programSectionTitle: 'UNSERE',
  programSectionHighlight: 'AUSBILDUNG',
  roleTitle: 'KAUFMANN / FRAU',
  roleSubtitle: 'FÜR SPEDITION UND LOGISTIKDIENSTLEISTUNG (m/w/d)',
  roleDescription:
    'Du organisierst Transporte, überwachst Sendungen und sorgst dafür, dass Waren pünktlich und sicher ans Ziel kommen.',
  roleBullets: [
    'Kunden beraten und Aufträge abwickeln',
    'Transporte planen und koordinieren',
    'Angebote erstellen und Preise kalkulieren',
    'Logistische Prozesse steuern und optimieren',
    'Mit modernen IT-Systemen arbeiten',
  ],
  requirements: [
    'Guter Schulabschluss (mind. Realschule)',
    'Interesse an Logistik und Wirtschaft',
    'Kommunikationsstärke',
    'Teamfähigkeit',
    'Organisationstalent',
    'Zuverlässigkeit und Motivation',
  ],
  expectations: [
    'Spannende und abwechslungsreiche Aufgaben',
    'Persönliche Betreuung',
    'Moderne Arbeitsplätze',
    'Familiäres Team',
    'Attraktive Ausbildungsvergütung',
    'Hohe Übernahmechancen',
  ],
  applicationStartLabel: 'AUSBILDUNGSBEGINN:',
  applicationStartValue: '1. September',
};

export const dualesStudiumData: ProgramData = {
  slug: 'duales-studium-2026',
  pageTitle: 'Duales Studium bei der TSL GmbH',
  heroSubtitle: 'Duales Studium bei der TSL GmbH',
  heroDescription:
    'Starte mit uns ins Wintersemester 2026 und verbinde Theorie mit echter Praxis in der modernen Transport- und Logistikbranche.',
  badgeLabel: 'STUDIENSTART',
  badgeValue: 'WINTERSEMESTER 2026',
  heroImage: '/stellenangebote/hero_duales_studium_seite.png',
  topFeatures: [
    { icon: GraduationCap, label: 'PRAKTISCH\nSTUDIEREN' },
    { icon: Truck, label: 'ZUKUNFT\nGESTALTEN' },
    { icon: BarChart3, label: 'KARRIERE\nSTARTEN' },
  ],
  showHeaderCta: false,
  whyTitlePrefix: 'WARUM EIN',
  whyTitleHighlight: 'DUALES STUDIUM',
  whyTitleSuffix: 'BEI TSL?',
  whyCards: [
    {
      icon: GraduationCap,
      title: 'STUDIEREN & GELD VERDIENEN',
      description:
        'Theorie und Praxis perfekt kombiniert – mit attraktiver Vergütung ab dem ersten Tag.',
    },
    {
      icon: Truck,
      title: 'PRAXIS STATT NUR THEORIE',
      description:
        'Direkte Einblicke in spannende Projekte und moderne Logistikprozesse.',
    },
    {
      icon: BarChart3,
      title: 'KARRIERECHANCEN BEI DER REWE GROUP',
      description:
        'Als Unternehmen der REWE Group bieten wir dir langfristige Perspektiven und Entwicklungsmöglichkeiten.',
    },
    {
      icon: Users,
      title: 'MODERNE UNTERNEHMENSKULTUR',
      description:
        'Du-Kultur, Teamgeist und ein motiviertes Umfeld mit echten Entwicklungschancen.',
    },
  ],
  programSectionTitle: 'UNSER STUDIENGANG AB',
  programSectionHighlight: 'WINTERSEMESTER 2026',
  roleTitle: 'BWL – SPEDITION, TRANSPORT & LOGISTIK',
  roleDescription:
    'Du lernst die wirtschaftlichen und operativen Abläufe moderner Logistikunternehmen kennen und wirst aktiv in unsere Prozesse eingebunden.',
  roleBullets: [
    'Praxisnahe Einsätze in allen relevanten Unternehmensbereichen',
    'Verbindung von Betriebswirtschaft und Logistik-Know-how',
    'Beste Übernahmechancen nach erfolgreichem Studium',
  ],
  requirements: [
    'Fachhochschulreife oder Abitur',
    'Interesse an Wirtschaft und Logistik',
    'Motivation & Teamgeist',
    'Selbstständige Arbeitsweise',
    'Kommunikationsstärke',
    'Lust auf Verantwortung und Weiterentwicklung',
  ],
  expectations: [
    'Spannende Praxiseinsätze',
    'Persönliche Betreuung',
    'Moderne Arbeitsplätze',
    'Familiäres Team',
    'Hohe Übernahmechancen',
    'Entwicklungsmöglichkeiten innerhalb der REWE Group',
  ],
  applicationStartLabel: 'STUDIENSTART:',
  applicationStartValue: 'Wintersemester 2026',
};
