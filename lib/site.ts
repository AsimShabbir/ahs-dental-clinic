export const site = {
  name: "AHS Dental Clinic",
  shortName: "AHS",
  tagline: "Thoughtful care for lasting smiles",
  phone: "+92 (300) 8810227",
  phoneHref: "tel:+923008810227",
  email: "hello@ahsdentalclinic.com",
  address: "H-R1, Lucky Street Tajnagh Housing Scheme",
  city: "Lahore",
  hours: "Mon–Fri 8:00–6:00 · Sat 9:00–2:00",
  hoursShort: "Mon–Sat, 8am–6pm",
  mapEmbed:
    "https://maps.google.com/maps?q=Lucky%20Street%20Tajnagh%20Housing%20Scheme%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export type NavChild = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  id: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/", id: "home" },
  {
    label: "Services",
    href: "/services",
    id: "services",
    children: [
      { label: "General Dentistry", href: "/services/general" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic" },
      { label: "Orthodontics", href: "/services/orthodontics" },
      { label: "Pediatric Dentistry", href: "/services/pediatric" },
      { label: "Preventive Care", href: "/services/preventive" },
      { label: "Restorative Dentistry", href: "/services/restorative" },
    ],
  },
  { label: "Dentists", href: "/dentists", id: "dentists" },
  {
    label: "Pages",
    href: "/about",
    id: "pages",
    children: [
      { label: "About", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
      { label: "Reviews", href: "/testimonials" },
      { label: "Booking", href: "/booking" },
    ],
  },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export const pageNavIds = ["about", "gallery", "faq", "testimonials", "booking"];

export type Service = {
  slug: string;
  title: string;
  href: string;
  image: string;
  icon: "tooth" | "sparkle" | "align" | "child" | "shield" | "restore";
  excerpt: string;
  intro: string;
  also: string[];
  body: string;
};

export const services: Service[] = [
  {
    slug: "general",
    title: "General Dentistry",
    href: "/services/general",
    image: "/img/service-general.jpg",
    icon: "tooth",
    excerpt: "Exams, cleanings, and everyday care that keep your mouth healthy between visits.",
    intro:
      "General dentistry is the foundation of a healthy smile. We combine gentle exams, digital diagnostics, and unhurried conversations so you always know what your teeth need — and what they do not.",
    also: [
      "Comprehensive exams & digital x-rays",
      "Hygiene and periodontal maintenance",
      "Fillings in tooth-colored composite",
      "Night guards for clenching",
      "Same-week urgent visits for pain",
    ],
    body: "Most of what keeps a mouth comfortable happens here: seeing small problems while they are still small, cleaning thoroughly, and choosing materials that disappear in conversation. We set recall based on your gums and habits, not a one-size interval.",
  },
  {
    slug: "cosmetic",
    title: "Cosmetic Dentistry",
    href: "/services/cosmetic",
    image: "/img/service-cosmetic.jpg",
    icon: "sparkle",
    excerpt: "Whitening, veneers, and smile design shaped around your features — never a template.",
    intro:
      "Cosmetic work at AHS is quiet and considered. We refine shade, shape, and proportion so the result looks like you on your best day, not like a billboard smile.",
    also: [
      "Shade-matched whitening protocols",
      "Porcelain veneers and bonding",
      "Smile previews before committing",
      "Gum-line refinement with specialists",
      "Replacement of stained old restorations",
    ],
    body: "We do not sell a “Hollywood set.” We photograph, discuss what bothers you in the mirror, and mock up options. Some smiles need one tooth. Some need a quieter whitening plan. You choose the finish line.",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    href: "/services/orthodontics",
    image: "/img/service-ortho.jpg",
    icon: "align",
    excerpt: "Clear aligners and discreet braces for teens and adults who want a calmer path to alignment.",
    intro:
      "Whether you prefer nearly invisible aligners or a traditional approach, we plan tooth movement with 3D imaging and check-ins that respect your calendar.",
    also: [
      "Clear aligner therapy",
      "Discreet ceramic braces",
      "Bite correction for adults",
      "Retainers that people actually wear",
      "Teen-friendly check-in cadence",
    ],
    body: "Alignment is a timeline, not a product. Dr. Park maps movement in 3D, flags teeth that should not be moved, and tells you honestly if aligners are a poor fit for your case.",
  },
  {
    slug: "pediatric",
    title: "Pediatric Dentistry",
    href: "/services/pediatric",
    image: "/img/service-pediatric.jpg",
    icon: "child",
    excerpt: "First visits, sealants, and coaching that help children leave proud instead of anxious.",
    intro:
      "Our kids’ studio is slower, brighter, and built for short attention spans. We celebrate small wins and never rush a first visit.",
    also: [
      "Tell-show-do first visits",
      "Sealants and fluoride varnish",
      "Habit counseling (thumbs, pacifiers)",
      "Sports mouthguards",
      "Careful referrals when specialists are kinder",
    ],
    body: "The kids’ studio is a separate pace, not a smaller adult chair. Visit one is often just a ride, a count, and a prize. Treatment waits until trust exists.",
  },
  {
    slug: "preventive",
    title: "Preventive Care",
    href: "/services/preventive",
    image: "/img/service-preventive.jpg",
    icon: "shield",
    excerpt: "Hygiene, fluoride, and habit coaching that stop problems before they need a drill.",
    intro:
      "Prevention is the most generous dentistry we offer. We map risk, polish thoroughly, and send you home with a plan you can actually keep.",
    also: [
      "Risk mapping for decay and gum disease",
      "Custom hygiene intervals",
      "Fluoride and remineralization",
      "Oral cancer screening",
      "Home-care that fits real schedules",
    ],
    body: "Prevention is the work we are proudest of because it is invisible. You leave with a plan, not a bag of samples you will never use.",
  },
  {
    slug: "restorative",
    title: "Restorative Dentistry",
    href: "/services/restorative",
    image: "/img/service-restorative.jpg",
    icon: "restore",
    excerpt: "Crowns, implants, and bridges that restore comfort and strength without looking rebuilt.",
    intro:
      "When a tooth is worn, cracked, or missing, we restore function first and aesthetics in the same conversation — using materials that last in real life in Lahore.",
    also: [
      "Crowns and onlays",
      "Dental implants and implant crowns",
      "Bridges when implants are not right",
      "Worn-smile rehabilitation",
      "Emergency repair of broken teeth",
    ],
    body: "Restorative dentistry should feel ordinary when you chew. We restore strength first, then blend shade and shape so nobody asks what happened — they just notice you look well.",
  },
];

export type Dentist = {
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string;
  education: string;
};

export const dentists: Dentist[] = [
  {
    name: "Dr. Maya Ellison",
    role: "Lead Dentist & Founder",
    image: "/img/dentist-1.jpg",
    bio: "Maya founded AHS after a decade in hospital dentistry. She believes a calm operatory is as important as a precise filling.",
    focus: "Smile design, implants",
    education: "DDS, University of Washington",
  },
  {
    name: "Dr. Jonah Park",
    role: "Orthodontist",
    image: "/img/dentist-2.jpg",
    bio: "Jonah plans alignment with 3D scans and a light touch. Teens and adults alike appreciate his clear timelines.",
    focus: "Aligners, bite correction",
    education: "DMD, Oregon Health & Science",
  },
  {
    name: "Dr. Priya Nair",
    role: "Pediatric Dentist",
    image: "/img/dentist-3.jpg",
    bio: "Priya turns first visits into small adventures. Parents often say their children ask to come back.",
    focus: "Children & teens",
    education: "DDS, University of Michigan",
  },
  {
    name: "Dr. Elias Ward",
    role: "Restorative Specialist",
    image: "/img/dentist-4.jpg",
    bio: "Elias rebuilds worn and damaged teeth so chewing feels ordinary again — the highest compliment in restorative work.",
    focus: "Crowns, full-mouth rehab",
    education: "DMD, Boston University",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  href: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "how-often-should-you-really-visit",
    title: "How often should you really visit the dentist?",
    date: "August 12, 2026",
    author: "Dr. Maya Ellison",
    image: "/img/blog-1.jpg",
    excerpt: "Six months is a starting point, not a rule. Here is how we set recall based on gums, habits, and risk.",
    href: "/blog/how-often-should-you-really-visit",
    body: [
      "Six months is a useful default for many people. It is not a moral law. Gums that bleed, a dry mouth from medication, a heavy sweet habit, or a history of rapid decay all argue for a tighter recall. Rock-solid hygiene and low risk can stretch a little — with a hygienist who has actually looked.",
      "At AHS we set the next visit at the end of this one, out loud, with the reason attached. If we say four months, it is because the tissue asked for it, not because the software likes round numbers.",
      "Bring your questions. The most useful visits are the ones where someone admits they have not flossed, and we design around that honesty instead of pretending.",
    ],
  },
  {
    slug: "whitening-without-the-wince",
    title: "Whitening without the wince",
    date: "July 28, 2026",
    author: "Dr. Jonah Park",
    image: "/img/blog-2.jpg",
    excerpt: "Sensitivity is the reason most people abandon trays. A slower protocol usually wins.",
    href: "/blog/whitening-without-the-wince",
    body: [
      "Sensitivity is why trays end up in a drawer. High-strength gel on dehydrated teeth is a recipe for a weekend of ice-water dread.",
      "We prefer a slower protocol: desensitizing toothpaste two weeks prior, lower-concentration gel, and shorter wear if your teeth complain. In-office light shows look dramatic. They are rarely kinder than a well-made custom tray.",
      "Existing crowns and fillings will not bleach. If those edges will bother you, we talk about that before you spend a dollar on peroxide.",
    ],
  },
  {
    slug: "first-visit-for-a-nervous-child",
    title: "A first visit for a nervous child",
    date: "June 9, 2026",
    author: "Dr. Priya Nair",
    image: "/img/blog-3.jpg",
    excerpt: "We never start with a drill. The goal of visit one is leaving proud — treatment can wait.",
    href: "/blog/first-visit-for-a-nervous-child",
    body: [
      "Do not promise there will be no tools. Promise we will go slow, and that they can say stop. Children remember broken promises longer than they remember a mirror.",
      "Visit one at AHS is often a ride in the chair, a count of teeth, and a prize. If a cavity is waiting, we still may not treat it that day. Trust is the filling that has to set first.",
      "Parents: skip the “it won’t hurt” speech in the lobby. Narrate what you see. Let us do the rest.",
    ],
  },
];

export const faqs = [
  {
    q: "Do you take insurance?",
    a: "We are in-network with several major PPO plans and will always file out-of-network claims when you prefer to stay with us. You receive a written estimate before elective work. Call the desk with your plan name and we will check benefits before the visit.",
  },
  {
    q: "How long is a new-patient exam?",
    a: "Plan on forty minutes: conversation, exam, images if needed, and a plain-language plan. We do not compress that into a hygiene slot.",
  },
  {
    q: "I am anxious. Can you help?",
    a: "Yes. Tell us when you book. We offer longer appointments, break signals, nitrous when appropriate, and a first visit that can be a tour only. Nobody is scolded for needing time.",
  },
  {
    q: "Do you see children?",
    a: "Dr. Nair’s kids’ studio is for first visits through teens. Siblings can often be scheduled the same morning.",
  },
  {
    q: "What if I am in pain today?",
    a: "Call the front desk. We hold same-day emergency space most weekdays. If we are full, we will still advise you on what cannot wait.",
  },
  {
    q: "Do you offer aligners?",
    a: "Dr. Park plans clear aligners and, when they are a poor fit, will say so. Not every crowding case belongs in plastic.",
  },
  {
    q: "Is parking available?",
    a: "Street parking on Lucky Street and a small lot behind the building.",
  },
  {
    q: "How do I request records?",
    a: "Email hello@ahsdentalclinic.com from the address on file. We send digital x-rays within two business days.",
  },
];

export const reviews = [
  {
    name: "Elena M.",
    meta: "Invisalign · 14 months",
    image: "/img/patient-1.jpg",
    quote:
      "They treated my fear as part of the diagnosis, not an inconvenience. Aligners were explained like a project plan, with dates I could put on a calendar.",
  },
  {
    name: "Marcus T.",
    meta: "Parent · pediatric care",
    image: "/img/patient-2.jpg",
    quote: "Our six-year-old asked to come back. Priya let him hold the mirror and never once talked over his head to me.",
  },
  {
    name: "Sofia R.",
    meta: "Crowns",
    image: "/img/patient-3.jpg",
    quote: "Crown in one visit, bill exactly as quoted. Quiet rooms. I am not easy to impress and I have already sent my partner.",
  },
  {
    name: "Daniel K.",
    meta: "Hygiene",
    image: "/img/dentist-2.jpg",
    quote:
      "I used to cancel cleanings. The extra ten minutes of explaining what they were seeing on the scan is why I stopped disappearing.",
  },
  {
    name: "Amira S.",
    meta: "Veneers",
    image: "/img/cta.jpg",
    quote: "Maya talked me out of eight veneers and into two. That honesty is why I trusted the two we did.",
  },
  {
    name: "Owen P.",
    meta: "Implant",
    image: "/img/consult.jpg",
    quote:
      "Lost a molar on a trail run. Elias mapped the implant like an engineer and the chewing feels ordinary again, which is the whole point.",
  },
];

export const galleryShots = [
  ["/img/gallery-1.jpg", "Treatment suite with natural light"],
  ["/img/gallery-2.jpg", "A relaxed patient after whitening"],
  ["/img/gallery-3.jpg", "Clinic interior"],
  ["/img/gallery-4.jpg", "Lounge seating"],
  ["/img/gallery-5.jpg", "Chairside consult"],
  ["/img/gallery-6.jpg", "Welcome desk"],
  ["/img/about.jpg", "Listening before treating"],
  ["/img/consult.jpg", "Private planning room"],
  ["/img/hero.jpg", "Operatory"],
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
