import { ArrowUpRightIcon } from '../icons';

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/Vaporisateur",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/fabien-astorg-157248300/",
  },
];

export const FooterSection = () => {
  return (
    <footer className="pt-4 relative z-0 overflow-x-clip lg:pt-8">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 -z-10 left-1/2 -translate-x-1/2 bg-emerald-300/30"
        style={{
          maskImage: `radial-gradient(50% 50% at bottom center, black, transparent)`,
        }}
      ></div>
      <div className="container mx-auto px-6">
        <div className="border-t border-white/15 py-6 md:pb-8 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">&copy; 2024. Tous droits réservés.</div>
          <nav className="flex flex-col md:flex-row gap-8 items-center">
            {footerLinks.map((footerLink) => (
              <a
                key={footerLink.title}
                href={footerLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-200"
              >
                <span className="font-semibold">{footerLink.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
