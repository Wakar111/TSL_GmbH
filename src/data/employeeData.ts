// Data used in DragShuffleHero.tsx for displaying cards in Jobs.tsx

interface EmployeeData {
  imgUrl?: string;
  testimonial: string;
  author: string;
  videoUrl?: string;
}

export const employees: EmployeeData[] = [
    {
      imgUrl: "/optimized/felix.jpg",
      testimonial: "Bei TSL erwartet dich ein familiäres Arbeitsumfeld, das offen für Neues und Veränderungen ist.",
      author: "Felix F. - Prokurist",
      videoUrl: "/optimized/jobs_videos/felix.mp4"
    },
    {
      imgUrl: "/optimized/anni.jpg",
      testimonial: "Bei der TSL stellen wir uns regelmäßig neuen Herausforderungen – Abwechslung ist somit garantiert.",
      author: "Anni Q. - Disponentin",
      videoUrl: "/optimized/jobs_videos/anni.mp4"
    },
    {
      imgUrl: "/optimized/ingo.jpg",
      testimonial: "TSL überzeugt mit flexiblen Arbeitszeiten und einer offenen, partnerschaftlichen Zusammenarbeit mit den Kunden.",
      author: "Ingo F. - Disponent",
      videoUrl: "/optimized/jobs_videos/ingo.mp4"
    },
    {
      imgUrl: "/optimized/celine.jpg",
      testimonial: "Bei TSL erwarten dich eine tolle Stimmung, klare Aufgabenstrukturen und verlässliche Kolleginnen und Kollegen.",
      author: "Celine D. - Kaufmännische Angestelltin",
      videoUrl: "/optimized/jobs_videos/celine.mp4"
    },
    {
      imgUrl: "/optimized/christoph.jpg",
      testimonial: "Offene Kommunikation und ein flexibles Arbeitsumfeld sorgen dafür, dass jeder Tag neue Herausforderungen bereithält.",
      author: "Christoph I. - Fuhrpark Mitarbeiter",
      videoUrl: "/optimized/jobs_videos/christoph.mp4"
    }
  ];