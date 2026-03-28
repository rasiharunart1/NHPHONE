export function Footer() {
  const links = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
  ];

  return (
    <footer className="flex flex-col items-center gap-8 border-t border-white/5 w-full pt-24 pb-12 bg-[#0b0b0f] font-sans text-xs uppercase tracking-[0.2em] text-[#c8c5cb]">
      <div className="flex flex-wrap justify-center gap-12 mb-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[#47464b] hover:text-[#c8c5cb] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex gap-6 mb-8">
        <a className="material-symbols-outlined text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer" href="#">public</a>
        <a className="material-symbols-outlined text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer" href="#">alternate_email</a>
        <a className="material-symbols-outlined text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer" href="#">share</a>
      </div>
      <p>© 2024 NH PHONE. Atmospheric Luxury.</p>
    </footer>
  );
}
