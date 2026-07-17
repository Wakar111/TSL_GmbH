# TSL GmbH — Projekt Context (für neue Agents)

Dieses Dokument fasst alle relevanten Infos für einen neuen Coding-Agent zusammen, der an diesem Projekt arbeitet. Bitte vor Änderungen lesen.

## 1. Projektübersicht

- **Produkt**: Marketing-/Unternehmens-Website für die **TSL GmbH** (Transport & Logistik, Sitz Groß-Umstadt, Deutschland).
- **Zweck**: Relaunch der Firmen-Website mit Seiten zu Unternehmen, Fuhrpark, Jobs/Karriere, Kontakt sowie Rechtsseiten (Impressum/Datenschutz).
- **Sprache der UI**: Deutsch (de-DE). Code/Identifier auf Englisch.
- **Hosting**: Vermutlich Netlify (siehe `public/_redirects` SPA-Fallback). Entwickelt von "Innovative-Tech" (im Footer verlinkt).

## 2. Tech-Stack

- **Build/Bundler**: Vite 7 (`vite.config.ts`, plugin `@vitejs/plugin-react`)
- **Sprache**: TypeScript 5 + React 18 (StrictMode in `src/main.tsx`)
- **Routing**: `react-router-dom` v7 (`BrowserRouter` in `src/App.tsx`)
- **Styling**: TailwindCSS 3 (`tailwind.config.js`, `postcss.config.js`, `src/index.css` = nur Tailwind-Direktiven)
- **Animationen**: `framer-motion` 12
- **Icons**: `lucide-react` + `react-icons` (Fi*) + eigene SVGs (`SocialIcons.tsx`)
- **Formulare/Mail**: `@emailjs/browser` (installiert, aktuell nicht aktiv genutzt — `mailto:`-Links statt EmailJS-Integration)
- **Backend (optional)**: `@supabase/supabase-js` ist in `dependencies`, wird aber im Source aktuell **nicht** verwendet.
- **Bild-/Video-Optimierung**: `sharp` + ffmpeg via Script `optimize-images.js` (manuell ausführen).

## 3. NPM-Scripts (`package.json`)

```
npm run dev        # Vite Dev Server
npm run build      # Produktion-Build
npm run preview    # Build-Preview
npm run lint       # ESLint (eslint.config.js, flat config)
npm run typecheck  # tsc --noEmit -p tsconfig.app.json
```

`ReadMe.md` enthält nur Basis-Hinweise (`npm install`, `npm audit fix --force`, `npm run dev`).

## 4. Projektstruktur

```
TSL_GmbH/
├── index.html                # Vite Entry, Title "TSL GmbH Website Relaunch"
├── optimize-images.js        # Sharp + ffmpeg Optimierung -> /public/optimized/
├── .env.example              # Vorlage für Feature-Flag VITE_STELLENANGEBOTE
├── public/
│   ├── _redirects            # /* /index.html 200 (SPA-Fallback)
│   ├── Hero-Section.mp4      # Hero-Video Home (~7 MB)
│   ├── tsl-logo.jpg / .png   # Logos
│   ├── contact.jpg, trucks-hiring.jpg
│   ├── Firmen-Logos/         # Partner-Logos (REWE, PENNY, TOOM, SCANIA, 4media, ECK)
│   ├── fuhrpark/             # truck1..19.jpg + hero_trucks.jpg
│   ├── tsl-employees/        # Mitarbeiterfotos + jobs_videos/*.mp4
│   └── stellenangebote/      # Bilder für Career-Program-Pages
│       ├── one_azubi.png     # Mitbringen-Sektion
│       ├── two_azubi.png     # Hero-Hintergrund
│       ├── three_azubis.png  # Erwartet-Sektion
│       └── tsl_truck_background.png # Programm-/Rolle-Sektion
└── src/
    ├── main.tsx              # ReactDOM root
    ├── App.tsx               # Router + Layout (Header / main / Footer / CookieBanner)
    ├── index.css             # @tailwind base/components/utilities
    ├── config/
    │   └── features.ts       # Feature-Flag STELLENANGEBOTE_ENABLED (Env-gesteuert)
    ├── components/
    │   ├── Header.tsx        # Sticky Nav, mobile slide-down menü, framer-motion
    │   ├── Footer.tsx        # Kontaktdaten, Social, Legal-Links
    │   ├── CookieBanner.tsx  # Nur "necessary" Cookies, localStorage `cookieConsent`
    │   ├── ScrollToTop.tsx   # Scroll-Reset bei Routenwechsel + Hash-Scroll-Support
    │   ├── CountUpStats.tsx  # Animierte Stats (Home)
    │   ├── DragShuffleHero.tsx # Drag-Karten mit Mitarbeiter-Testimonials (Jobs)
    │   ├── ImageSlideshow.tsx# Snap-Scroll Karussell (Fleet)
    │   ├── TiltShineCard.tsx # 3D-Tilt-Karte mit Google-Maps-iframe (Home)
    │   ├── CareerProgramPage.tsx # Shared Layout für Ausbildung/Duales Studium
    │   └── SocialIcons.tsx   # Inline-SVG Facebook + Instagram
    ├── data/                 # Reine Content-Daten (kein Backend!)
    │   ├── homeData.ts       # partners[], servicesList[]
    │   ├── fleetData.tsx     # vehicles[], truckSlides[]
    │   ├── employeeData.ts   # Testimonials für DragShuffleHero
    │   ├── departmentData.ts # Abteilungen + Ansprechpartner für Kontakt
    │   └── careerProgramsData.tsx # ausbildungData + dualesStudiumData
    └── pages/
        ├── Home.tsx          # Hero-Video, Recruiting-Banner, Stats, Services, Partner-Ticker, CTA + Map
        ├── Fleet.tsx         # Fuhrpark, ImageSlideshow, Vehicle Cards
        ├── Jobs.tsx          # DragShuffleHero, Stellenangebote-Cards, HR-Video, Initiativbewerbung
        ├── Apprenticeship.tsx# Career-Program-Page für Ausbildung 2026
        ├── DualStudy.tsx     # Career-Program-Page für Duales Studium 2026
        ├── Contact.tsx       # Akkordeon mit Abteilungen + Kontaktpersonen
        ├── Imprint.tsx       # Impressum
        └── Privacy.tsx       # Datenschutzerklärung
```

## 5. Routing (`src/App.tsx`)

| Pfad | Komponente |
|------|------------|
| `/` | `Home` |
| `/fleet` | `Fleet` (Label: "Fuhrpark") |
| `/jobs` | `Jobs` (Label: "Stellenangebote") |
| `/jobs/ausbildung-2026` | `Apprenticeship` (rendert `CareerProgramPage` mit `ausbildungData`) |
| `/jobs/duales-studium-2026` | `DualStudy` (rendert `CareerProgramPage` mit `dualesStudiumData`) |
| `/contact` | `Contact` (Label: "Kontakt") |
| `/imprint` | `Imprint` |
| `/privacy` | `Privacy` |

SPA-Fallback via `public/_redirects` für Netlify-ähnliche Hoster.

**Hash-Navigation**: `ScrollToTop.tsx` unterstützt Anchor-Scroll. Z. B. `/jobs#aktuelle-stellen` scrollt nach Routenwechsel smooth zur Section mit `id="aktuelle-stellen"` auf der Jobs-Seite.

## 6. Daten- & Inhaltskonventionen

- **Alle Inhalte sind statisch** in `src/data/*` als TS-Konstanten exportiert. Kein CMS/API.
- Änderungen an Mitarbeitern/Telefonnummern/Mails → `src/data/departmentData.ts` (Contact-Seite) bzw. `employeeData.ts` (Jobs-Seite).
- Fahrzeugdaten und Slideshow-Bilder → `src/data/fleetData.tsx`.
- Partner-Logos und Service-Listen → `src/data/homeData.ts`.
- **Stellenangebote/Career-Programs**: Inhalte für Ausbildung & Duales Studium liegen in `src/data/careerProgramsData.tsx` (`ausbildungData`, `dualesStudiumData`). Interface `ProgramData` definiert alle Felder (Hero, Why-Cards, Role, Requirements, Expectations etc.). Beide Pages rendern dieselbe `CareerProgramPage`-Komponente mit unterschiedlichen Daten.
- Bilder/Videos liegen in `public/` und werden mit absoluten Pfaden referenziert (z. B. `/fuhrpark/truck1.jpg`, `/Hero-Section.mp4`).

## 7. Styling- & Design-Konventionen

- TailwindCSS, Standard-Theme (keine Custom-Farben in `tailwind.config.js`).
- Farbpalette: überwiegend `gray-700/800/900` (dunkel), `white`/`gray-50` (Sektionen), Akzente `blue-50/600` (Stats), gelegentlich `green-600` (Checkmarks).
- Container-Muster: `container mx-auto px-4`, Sektionen mit `py-12 md:py-16` oder `py-16/20`.
- Responsive: Mobile-First; viele `md:`/`lg:` Breakpoints. Header wechselt bei `lg` von Burger auf horizontale Navigation.
- Animationsbibliothek konsistent `framer-motion`; benutze `motion.*` + `AnimatePresence`.
- Cards/Boxen: `rounded-xl shadow-md/shadow-2xl`.

## 8. Wichtige Implementierungsdetails

- **Header** (`Header.tsx`): Sticky (`z-[100]`), Mobile-Menü als animiertes Slide-Down-Panel (`z-[160]`), Body-Scroll-Lock bei offenem Menü, ESC schließt.
- **CookieBanner**: speichert nur `{ necessary: true }` in `localStorage.cookieConsent` — kein Tracking implementiert. Verlinkt `/privacy`.
- **CountUpStats**: nutzt `useInView` + `animate()` aus `framer-motion`. Aktuell 180+ Mitarbeiter, 1000+ Fahrzeuge, 4+ Standorte, 30+ Jahre.
- **DragShuffleHero**: Stapel aus `employees`-Karten; Drag>100px → `handleShuffle` rotiert Reihenfolge; Klick auf Play öffnet Video-Modal.
- **TiltShineCard**: Mouse-Tracking → 3D-Rotation, embedded Google-Maps-iframe (Am Sportplatz 1, 64823 Groß-Umstadt Richen).
- **ImageSlideshow**: Snap-Scroll-Karussell, Autoplay (5 s), IntersectionObserver pausiert wenn nicht sichtbar.
- **Hero-Video** auf Home: `<video autoPlay muted loop playsInline>` aus `/Hero-Section.mp4`.
- **Bewerbung**: Jobs-Seite nutzt `mailto:bewerbung@tsl-gmbh.de?subject=Initiativbewerbung` (kein Form-Backend). Career-Program-Pages nutzen ebenfalls `bewerbung@tsl-gmbh.de`.
- **CareerProgramPage** (`components/CareerProgramPage.tsx`): Shared Layout für Ausbildung & Duales Studium. Sektionen: Top-Bar mit "← Zurück zu Stellenangeboten" + Feature-Icons, Hero (Vollbild-Image `two_azubi.png` + Gradient + Badge), Why-TSL (4 Icon-Cards), Programm/Rolle (dunkelblau, Truck-Bild + Bullet-Card), Mitbringen/Erwartet (zwei Listen mit Personenbildern), Bewerbung & Start (3 InfoBlocks + roter "Jetzt bewerben"-Button). Farbschema: `bg-[#0b1a2e]` (TSL-Navy) + `red-500/600` Akzente.
- **Recruiting-Banner auf Home** (`pages/Home.tsx` direkt nach Hero-Video): dunkelblaue Card mit Tags (NEU 2026, AUSBILDUNG → `/jobs/ausbildung-2026`, DUALES STUDIUM → `/jobs/duales-studium-2026`) und CTA "Jetzt entdecken" → `/jobs#aktuelle-stellen`. Wird via Feature-Flag gesteuert.
- **Stellenangebote-Cards auf Jobs** (`pages/Jobs.tsx`, Section `id="aktuelle-stellen"`): Zwei `ProgramCard`-Komponenten (lokal in Jobs.tsx definiert) für Ausbildung + Duales Studium. Ebenfalls Feature-Flag-gesteuert.

## 8a. Feature-Flags (Env-gesteuert)

- Datei: `src/config/features.ts` — exportiert `STELLENANGEBOTE_ENABLED: boolean`.
- Liest `import.meta.env.VITE_STELLENANGEBOTE` (Vite-Konvention: nur `VITE_*` Variablen werden in den Client gebundelt).
- **Default = `false`** (Banner & Cards versteckt, wenn Variable nicht gesetzt). Akzeptierte Werte für "an": `true`/`True`/`TRUE`.
- Steuert die Sichtbarkeit von:
  - Recruiting-Banner auf `pages/Home.tsx`
  - "Aktuelle Stellenangebote 2026"-Section auf `pages/Jobs.tsx`
  - Die Routen `/jobs/ausbildung-2026` und `/jobs/duales-studium-2026` bleiben technisch immer erreichbar — nur die UI-Einstiegspunkte verschwinden.
- Setup: `.env` im Projekt-Root anlegen (Vorlage `.env.example` vorhanden). `.env` ist in `.gitignore`.
- **Wichtig**: Vite liest Env-Variablen nur zur Build-Zeit. Nach `.env`-Änderung Dev-Server neu starten bzw. neu builden. Für Netlify-Deploys die Variable in den Site-Settings setzen.
- Erweiterbar für weitere Flags (zukünftig: `VITE_AKTIONEN`, etc.) — Logik in derselben Datei zentralisieren.

## 9. Firmen-/Kontaktinfos (im Code referenziert)

- Hauptsitz: **Groß-Umstadt, Am Sportplatz 1**.
- Telefon (Hauptnummer im Code): `+49 6078 93560` bzw. `+49607893560`.
- E-Mail allgemein: `info@tsl-gmbh.de`. Bewerbungen: `bewerbung@tsl-gmbh.de`.
- Social: Facebook (`facebook.com/TSL-GmbH-Gro%c3%9f-Umstadt-...`), Instagram (`@tslgmbh`).
- Disposition Magdeburg + Groß-Umstadt + Außenstelle Dietzenbach (siehe `departmentData.ts`).

## 10. Bekannte Eigenheiten / TODOs / Stolperfallen

- `package-lock.json` ist in `.gitignore` (ungewöhnlich) → reproduzierbare Builds nur über `package.json`-Ranges.
- `lucide-react` ist in `vite.config.ts` aus `optimizeDeps` ausgeschlossen (vermutlich wegen HMR-Issues).
- `@supabase/supabase-js` und `@emailjs/browser` sind installiert, aber **nicht verkabelt** — wenn Backend-Features (Formularversand etc.) gebraucht werden, hier ansetzen.
- `index.html` setzt favicon auf `/tsl-logo.jpg` (großes ~2 MB Bild!). Besser auf `/tsl-logo-browser.png` oder optimiertes Icon wechseln, falls Performance Thema wird.
- Hero-Video (~7 MB) und unoptimierte Bilder → `optimize-images.js` ausführen, falls neue Assets hinzukommen (ffmpeg lokal nötig).
- In `departmentData.ts` sind teilweise Telefonnummern mit führendem Leerzeichen (` 06078 935660`) bzw. inkonsistenten Formaten — beim Erweitern bitte normalisieren.
- Es gibt **keine Tests** und keine CI-Konfiguration im Repo.
- ESLint Flat-Config (`eslint.config.js`) ist aktiv; `npm run lint` vor Commits ausführen.
- **`CONTEXT.md` ist in `.gitignore`** — Datei wird nicht ins Repo eingecheckt. Nach Pull existiert sie nicht automatisch; lokal halten oder manuell teilen.
- **Default für `VITE_STELLENANGEBOTE` ist `false`** — ohne explizit gesetzte Variable sind Recruiting-Banner und Stellenangebote-Cards versteckt. Für Production muss die Variable in den Hosting-Settings (z. B. Netlify) auf `true` gesetzt werden, wenn die Inhalte sichtbar sein sollen.

## 11. Typischer Workflow für neue Änderungen

1. `npm install` → `npm run dev` (Vite auf Default-Port `5173`).
2. Inhalts-Änderungen: meist nur in `src/data/*` oder direkt in `src/pages/*.tsx`.
3. Neue Bilder/Videos in `public/` ablegen, ggf. `node optimize-images.js`, dann mit absolutem Pfad (`/...`) referenzieren.
4. Vor Commit: `npm run lint` und `npm run typecheck`.
5. Build: `npm run build` → `dist/`. Deployment via Netlify (SPA-Redirect liegt bereits in `public/_redirects`).

## 12. Code-Stil-Hinweise (für Agents)

- TypeScript strict, interfaces lokal in Datei (siehe `departmentData.ts`, `employeeData.ts`).
- Funktionale Komponenten + Hooks, default-exports für Pages/Components.
- Keine globalen State-Manager (kein Redux/Zustand) — alles lokal über `useState`.
- Tailwind-Klassen direkt im JSX; keine CSS-Module / styled-components.
- Sprache der User-facing Strings: **Deutsch**. Bei neuen Texten Stil konsistent halten (Sie-Form, kurze Sätze).
- Nicht ohne Anlass neue Dependencies hinzufügen — Stack ist bewusst schlank.
