// Data used in DragShuffleHero.tsx for displaying cards in Jobs.tsx

interface EmployeeData {
  imgUrl?: string;
  testimonial: string;
  author: string;
  videoUrl?: string;
}

export const employees: EmployeeData[] = [
    {
      imgUrl: "/tsl-employees/felix.jpg",
      testimonial: "Bei TSL erwartet dich ein familiäres Arbeitsumfeld, das offen für Neues und Veränderungen ist.",
      author: "Felix F. - Prokurist",
      videoUrl: "/tsl-employees/jobs_videos/felix.mp4"
    },
    {
      imgUrl: "/tsl-employees/anni.jpg",
      testimonial: "Bei der TSL stellen wir uns regelmäßig neuen Herausforderungen – Abwechslung ist somit garantiert.",
      author: "Anni Q. - Disponentin",
      videoUrl: "/tsl-employees/jobs_videos/anni.mp4"
    },
    {
      imgUrl: "/tsl-employees/ingo.jpg",
      testimonial: "TSL überzeugt mit flexiblen Arbeitszeiten und einer offenen, partnerschaftlichen Zusammenarbeit mit den Kunden.",
      author: "Ingo F. - Disponent",
      videoUrl: "/tsl-employees/jobs_videos/ingo.mp4"
    },
    {
      imgUrl: "/tsl-employees/celine.jpg",
      testimonial: "Bei TSL erwarten dich eine tolle Stimmung, klare Aufgabenstrukturen und verlässliche Kolleginnen und Kollegen.",
      author: "Celine D. - Kaufmännische Angestelltin",
      videoUrl: "/tsl-employees/jobs_videos/celine.mp4"
    },
    {
      imgUrl: "/tsl-employees/christoph.jpg",
      testimonial: "Offene Kommunikation und ein flexibles Arbeitsumfeld sorgen dafür, dass jeder Tag neue Herausforderungen bereithält.",
      author: "Christoph I. - Fuhrpark Mitarbeiter",
      videoUrl: "/tsl-employees/jobs_videos/christoph.mp4"
    }
  ];