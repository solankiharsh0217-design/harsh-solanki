export interface Project {
  id: string;
  title: string;
  category: string;
  /** Screenshot of the live deployment, captured at the card's 582×401 ratio. */
  image: string;
  /** Production URL, read from the repo's Vercel deployment. */
  href: string;
}

/**
 * Live work, pulled from the public repos and profile README on
 * github.com/solankiharsh0217-design. Regenerate the screenshots with
 * `node tools/scraping/capture-projects.js`.
 */
export const PROJECTS: Project[] = [
  {
    id: "ai-agent-platform",
    title: "AI Agent Platform",
    category: "Multi-tenant conversational & voice AI",
    image: "/projects/ai-agent-platform.jpg",
    href: "https://dashboard-deploy-psi-nine.vercel.app",
  },
  {
    id: "wedding-vendors",
    title: "Wedding Vendors Marketplace",
    category: "Two-sided marketplace, India",
    image: "/projects/wedding-vendors.jpg",
    href: "https://wedding-vendors-three.vercel.app",
  },
  {
    id: "smartglassireland",
    title: "Smart Glass Ireland",
    category: "Switchable Privacy Glass",
    image: "/projects/smartglassireland.jpg",
    href: "https://smart-glass-ireland.vercel.app",
  },
  {
    id: "globalsmartglass",
    title: "Global Smart Glass",
    category: "Transparent LED Displays",
    image: "/projects/globalsmartglass.jpg",
    href: "https://global-smartglass.vercel.app",
  },
  {
    id: "orbit-crew",
    title: "OrbitCrew",
    category: "Agency & AI Agents",
    image: "/projects/orbit-crew.jpg",
    href: "https://orbit-crew.vercel.app",
  },
  {
    id: "r-vargas-v2",
    title: "R. Vargas Construction",
    category: "General Contractor — v2",
    image: "/projects/r-vargas-v2.jpg",
    href: "https://r-vargas-v2.vercel.app",
  },
  {
    id: "miswak-dental",
    title: "Miswak Dentistry",
    category: "Dental Practice, Chicago",
    image: "/projects/miswak-dental.jpg",
    href: "https://miswak-dental.vercel.app",
  },
  {
    id: "r-vargas-construction",
    title: "R. Vargas Construction",
    category: "General Contractor — v1",
    image: "/projects/r-vargas-construction.jpg",
    href: "https://r-vargas-construction.vercel.app",
  },
  {
    id: "illinois-dental-center",
    title: "Illinois Dental Center",
    category: "Dental Practice, Chicago",
    image: "/projects/illinois-dental-center.jpg",
    href: "https://illinois-dental-center.vercel.app",
  },
  {
    id: "sigma-dental-clinic",
    title: "Sigma Dental Clinic",
    category: "Dental Practice, Chicago",
    image: "/projects/sigma-dental-clinic.jpg",
    href: "https://sigma-dental-clinic.vercel.app",
  },
  {
    id: "augusta-dental-centre",
    title: "Augusta Dental Center",
    category: "Emergency Dentist, Chicago",
    image: "/projects/augusta-dental-centre.jpg",
    href: "https://augusta-dental-centre.vercel.app",
  },
  {
    id: "orbitcrew-ai-academy",
    title: "OrbitCrew AI Academy",
    category: "Education Platform",
    image: "/projects/orbitcrew-ai-academy.jpg",
    href: "https://orbitcrew-ai-academy.vercel.app",
  },
  {
    id: "art-colors-bergamo",
    title: "Art Colors Bergamo",
    category: "Painting & Decorating",
    image: "/projects/art-colors-bergamo.jpg",
    href: "https://art-colors-bergamo.vercel.app",
  },
  {
    id: "istituto-garibaldi-diplomi-e-corsi",
    title: "Istituto G. Garibaldi",
    category: "Education, Italy",
    image: "/projects/istituto-garibaldi-diplomi-e-corsi.jpg",
    href: "https://istitutogaribaldi.com",
  },
  {
    id: "impresa-michielan-v2",
    title: "Impresa Michielan",
    category: "Construction, Venice",
    image: "/projects/impresa-michielan-v2.jpg",
    href: "https://impresa-michielan-v2.vercel.app",
  },
  {
    id: "minipiri",
    title: "Alchimisti Event",
    category: "Event Landing Page",
    image: "/projects/minipiri.jpg",
    href: "https://minipiri.vercel.app",
  },
  {
    id: "euro-fabbro",
    title: "Eurofabbro",
    category: "Metal Carpentry, Bologna",
    image: "/projects/euro-fabbro.jpg",
    href: "https://euro-fabbro.vercel.app",
  },
  {
    id: "microhair-dark-editorial",
    title: "MicroHair",
    category: "Hair Restoration Clinic",
    image: "/projects/microhair-dark-editorial.jpg",
    href: "https://microhair-dark-editorial.vercel.app",
  },
  {
    id: "trackspike-storefront",
    title: "TrackSpike",
    category: "E-commerce Storefront",
    image: "/projects/trackspike-storefront.jpg",
    href: "https://trackspike-storefront.vercel.app",
  },
  {
    id: "beauty-slim",
    title: "Beauty Slim",
    category: "Wellness Studio, Alessandria",
    image: "/projects/beauty-slim.jpg",
    href: "https://beauty-slim.vercel.app",
  },
  {
    id: "francesco-piano-tinteggiature",
    title: "Francesco Piano",
    category: "Luxury Painting, Bergamo",
    image: "/projects/francesco-piano-tinteggiature.jpg",
    href: "https://francesco-piano-tinteggiature.vercel.app",
  },
  {
    id: "claraperclara",
    title: "ClaraPerClara",
    category: "Hair Salon, Brescia",
    image: "/projects/claraperclara.jpg",
    href: "https://claraperclara.vercel.app",
  },
  {
    id: "asg-srl",
    title: "ASG S.r.l.",
    category: "Windows & Marine Carpentry",
    image: "/projects/asg-srl.jpg",
    href: "https://asg-srl.vercel.app",
  },
  {
    id: "claudio-bozzini-fotografo",
    title: "Claudio Bozzini",
    category: "Wedding Photography, Varese",
    image: "/projects/claudio-bozzini-fotografo.jpg",
    href: "https://claudio-bozzini-fotografo.vercel.app",
  },
  {
    id: "la-mia-patata-light",
    title: "La Mia Patata",
    category: "Restaurant, Riccione",
    image: "/projects/la-mia-patata-light.jpg",
    href: "https://la-mia-patata-light.vercel.app",
  },
  {
    id: "fabbribergamo",
    title: "F.lli Valota",
    category: "Metal Carpentry, Bergamo",
    image: "/projects/fabbribergamo.jpg",
    href: "https://fabbribergamo.vercel.app",
  },
  {
    id: "linktree",
    title: "Linktree",
    category: "Link-in-bio Styles",
    image: "/projects/linktree.jpg",
    href: "https://linktree-red-eight.vercel.app",
  },
  {
    id: "madymar-photography",
    title: "Madymar Photography",
    category: "Photography, Varese",
    image: "/projects/madymar-photography.jpg",
    href: "https://madymar-photography.vercel.app",
  },
  {
    id: "neural-nexus-portfolio",
    title: "Neural Nexus",
    category: "AI Engineer Portfolio",
    image: "/projects/neural-nexus-portfolio.jpg",
    href: "https://neural-nexus-portfolio.vercel.app",
  },
  {
    id: "priceiq-app",
    title: "PriceIQ Italia",
    category: "Real Estate Pricing Engine",
    image: "/projects/priceiq-app.jpg",
    href: "https://price-iq-app.vercel.app",
  },
  {
    id: "seva-ghar",
    title: "SevaGhar",
    category: "Home Services, Bahadurgarh",
    image: "/projects/seva-ghar.jpg",
    href: "https://seva-ghar.vercel.app",
  },
  {
    id: "nothing",
    title: "For You, Always",
    category: "Personal",
    image: "/projects/nothing.jpg",
    href: "https://for-you-always-ten.vercel.app",
  },
];

/** The four shown on the home page. Reorder these ids to change the selection. */
const FEATURED_IDS = [
  "ai-agent-platform",
  "wedding-vendors",
  "orbit-crew",
  "smartglassireland",
];

export const FEATURED_PROJECTS: Project[] = FEATURED_IDS.map(
  (id) => PROJECTS.find((p) => p.id === id)!
);
