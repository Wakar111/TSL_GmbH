// Feature flags steuerbar via .env (Vite-Konvention: VITE_*).
// Setze in `.env` z. B. `VITE_STELLENANGEBOTE=false`, um den Recruiting-Banner
// auf der Home-Seite und die Stellenangebote-Cards auf /jobs auszublenden.
//
// Bei nicht gesetzter Variable wird `true` angenommen (Banner & Cards sichtbar).

const raw = import.meta.env.VITE_STELLENANGEBOTE as string | undefined;

export const STELLENANGEBOTE_ENABLED: boolean =
  raw === undefined ? false : raw.toLowerCase() === 'true';
