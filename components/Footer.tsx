import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";

interface Footer7Props {
  logo?: {
    url?: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Ressources",
    links: [
      { name: "Accueil", href: "#" },
      { name: "Events", href: "#events" },
      { name: "A propos", href: "#about" },
      { name: "Cartes", href: "#cartes" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "05 46 12 34 56", href: "tel:+33546123456" },
      { name: "contact@chezauguste.fr", href: "mailto:contact@chezauguste.fr" },
      { name: "123 Rue de la République", href: "#" },
      { name: "17000 La Rochelle", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Phone className="size-5" />, href: "tel:+33546123456", label: "Téléphone" },
  { icon: <Mail className="size-5" />, href: "mailto:contact@chezauguste.fr", label: "Email" },
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "/logo.png",
    alt: "logo",
    title: "ChezAugustebar.com",
  },
  sections = defaultSections,
  description = "Bar à ambiance chaleureuse au cœur de La Rochelle. Venez découvrir nos cocktails, bières et planches à partager dans un cadre convivial.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 ChezAugustebar.com Tous droits réservés.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <a href={logo.url || "#"}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-10"
                />
              </a>
              <h2 className="text-xl font-semibold text-[#ffcc00]">{logo.title}</h2>
            </div>
            <p className="max-w-[70%] text-sm text-gray-300">
              {description}
            </p>
            <ul className="flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium">
                  <a 
                    href={social.href} 
                    aria-label={social.label}
                    className="text-gray-400 hover:text-[#ffcc00] transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-[#ffcc00] text-lg">{section.title}</h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium"
                    >
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-700 py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 text-gray-400">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  className="text-gray-400 hover:text-[#ffcc00] transition-colors duration-300"
                > 
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

