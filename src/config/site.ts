export const siteConfig = {
  name: "iHash Studios",
  tagline: "INNOVATION THROUGH SOFTWARE",
  description:
    "iHash Studios is a software development studio that transforms business ideas into practical digital solutions. From web applications to Windows desktop software, we build technology that helps businesses work smarter and grow faster.",
  url: "https://ihashstudios.com",
  ogImage: "https://ihashstudios.com/og.jpg",
  contact: {
    email: "ihashstudios@gmail.com",
    phone: "+91-8072318935",
    displayPhone: "+91 80723 18935",
    address: "India",
    whatsappNumber: "918072318935",
    whatsappMessage: "Hello iHash Studios, I'd like to discuss a software project.",
    instagramHandle: "@ihashstudios",
    instagramUrl: "https://instagram.com/ihashstudios",
    // Web3Forms free key for instant delivery to ihashstudios@gmail.com
    web3FormsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/work" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    {
      id: "web-applications",
      name: "Web Application Development",
      shortDesc: "Scalable, secure, and responsive web platforms built for speed and seamless user experiences.",
      href: "/services#web-applications",
    },
    {
      id: "desktop-applications",
      name: "Windows Desktop Applications",
      shortDesc: "High-performance, offline-capable desktop systems for billing, inventory, and mission-critical workflows.",
      href: "/services#desktop-applications",
    },
    {
      id: "custom-business-software",
      name: "Custom Business Software",
      shortDesc: "Tailor-made software aligned specifically to your operational requirements, eliminating costly manual work.",
      href: "/services#custom-business-software",
    },
    /*
    {
      id: "business-automation",
      name: "Business Process Automation",
      shortDesc: "Automate repetitive data tasks, approval sequences, and system integrations to scale operations effortlessly.",
      href: "/services#business-automation",
    },
    {
      id: "business-management-systems",
      name: "Business Management Systems",
      shortDesc: "Unified administrative dashboards, multi-tier ledgers, and inventory systems for complete operational clarity.",
      href: "/services#business-management-systems",
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      shortDesc: "End-to-end software engineering from concept architecture to production deployment and long-term support.",
      href: "/services#custom-software",
    },
    */
  ],
};
