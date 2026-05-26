import { CheckCircle2, CalendarDays, MapPin, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProgramData } from '../data/careerProgramsData';

interface Props {
  data: ProgramData;
}

export default function CareerProgramPage({ data }: Props) {
  return (
    <div className="bg-white">
      {/* Top mini-bar with feature icons */}
      <div className="bg-[#0b1a2e] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link to="/jobs" className="text-sm text-gray-300 hover:text-white transition-colors">
            ← Zurück zu Stellenangeboten
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {data.topFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <f.icon className="w-5 h-5 text-red-500" />
                <span className="text-[11px] font-bold leading-tight whitespace-pre-line">
                  {f.label}
                </span>
              </div>
            ))}
            {data.showHeaderCta && (
              <a
                href="mailto:bewerbung@tsl-gmbh.de"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-md text-sm font-bold"
              >
                JETZT BEWERBEN
                <Send className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0b1a2e] text-white overflow-hidden min-h-[640px] md:min-h-[760px] lg:min-h-[820px] flex items-center">
        <img
          src={data.heroImage}
          alt="TSL Mitarbeitende"
          className="absolute right-0 top-0 h-full w-full md:w-[60%] object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a2e] via-[#0b1a2e]/90 to-transparent md:via-[#0b1a2e]/70 md:to-transparent" />
        <div className="relative container mx-auto px-4 py-16 md:py-20 w-full">
          <div className="max-w-sm">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              DEINE ZUKUNFT.
              <br />
              <span className="text-red-500">DEIN WEG.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl font-bold">{data.heroSubtitle}</p>
            <p className="mt-4 text-base md:text-lg text-gray-300 max-w-lg leading-relaxed">
              {data.heroDescription}
            </p>
            <div className="mt-6 md:mt-10 inline-flex items-center gap-2 md:gap-3 bg-red-600 px-3 py-2 md:px-6 md:py-4 rounded-md shadow-xl">
              <CalendarDays className="w-5 h-5 md:w-7 md:h-7" />
              <div className="leading-tight">
                <div className="text-[9px] md:text-[11px] font-semibold opacity-90">{data.badgeLabel}</div>
                <div className="text-sm md:text-lg font-extrabold uppercase">{data.badgeValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TSL */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
            {data.whyTitlePrefix}{' '}
            <span className="text-red-600">{data.whyTitleHighlight}</span>{' '}
            {data.whyTitleSuffix}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyCards.map((card, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-4">
                  <card.icon className="w-9 h-9 text-red-600" />
                </div>
                <h3 className="text-sm md:text-base font-extrabold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program / Role */}
      <section className="bg-[#0b1a2e] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
            {data.programSectionTitle}{' '}
            <span className="text-red-500">{data.programSectionHighlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/stellenangebote/lkw_bei_ausbildung_tsl.png"
                alt="TSL Truck"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#0f2240] border border-white/10 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Truck />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold leading-tight">
                    {data.roleTitle}
                  </h3>
                  {data.roleSubtitle && (
                    <p className="text-sm md:text-base font-bold text-gray-200 mt-1">
                      {data.roleSubtitle}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-5 leading-relaxed">
                {data.roleDescription}
              </p>
              <ul className="space-y-3">
                {data.roleBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-100">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements + Expectations */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            <ListWithImage
              title={
                <>
                  DAS <span className="text-red-600">SOLLTEST</span> DU MITBRINGEN
                </>
              }
              items={data.requirements}
              image="/stellenangebote/one_azubi.png"
              imageAlt="Auszubildende lernt"
            />
            <ListWithImage
              title={
                <>
                  DAS <span className="text-red-600">ERWARTET</span> DICH BEI TSL
                </>
              }
              items={data.expectations}
              image="/stellenangebote/three_azubis.png"
              imageAlt="TSL Team"
            />
          </div>
        </div>
      </section>

      {/* Bewerbung & Start */}
      <section className="bg-[#0b1a2e] text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
            BEWERBUNG <span className="text-red-500">&amp;</span> START
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            <InfoBlock
              icon={<CalendarDays className="w-6 h-6 text-white" />}
              title={data.applicationStartLabel}
              value={data.applicationStartValue}
            />
            <InfoBlock
              icon={<MapPin className="w-6 h-6 text-white" />}
              title="STANDORT:"
              value={'TSL GmbH\nAm Sportplatz 1, Groß-Umstadt'}
            />
            <InfoBlock
              icon={<Mail className="w-6 h-6 text-white" />}
              title="BEWERBUNG:"
              value={'Per E-Mail an:\nbewerbung@tsl-gmbh.de'}
            />
            <a
              href="mailto:bewerbung@tsl-gmbh.de"
              className="bg-red-600 hover:bg-red-700 transition-colors rounded-lg px-4 py-2.5 flex flex-row items-center justify-center gap-2 text-center font-extrabold shadow-md"
            >
              <Send className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm">JETZT BEWERBEN!</span>
                <span className="text-[10px] font-medium opacity-90">
                  Schnell &amp; unkompliziert online
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ListWithImage({
  title,
  items,
  image,
  imageAlt,
}: {
  title: React.ReactNode;
  items: string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-5">{title}</h3>
      <div className="grid grid-cols-[1fr_auto] gap-5 items-start">
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base text-gray-700">{it}</span>
            </li>
          ))}
        </ul>
        <img
          src={image}
          alt={imageAlt}
          className="w-32 md:w-44 lg:w-52 rounded-lg object-cover shadow-md"
        />
      </div>
    </div>
  );
}

function InfoBlock({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-gray-300">{title}</div>
        <div className="text-sm md:text-base font-semibold whitespace-pre-line">
          {value}
        </div>
      </div>
    </div>
  );
}

// Local Truck icon to keep the role-card icon consistent without an extra import circle wrapper
function Truck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" aria-hidden="true">
      <path
        d="M3 7h11v8H3zM14 10h4l3 3v2h-7zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
