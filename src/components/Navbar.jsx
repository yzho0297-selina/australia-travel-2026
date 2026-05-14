import { MapPin } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Timeline", href: "#timeline" },
  { label: "Travel Guide", href: "#guide" }
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-cream/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-navy">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
            <MapPin size={18} />
          </span>
          <span className="hidden sm:inline">Australia Trip 2026</span>
        </a>

        <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-white/70 p-1 text-sm shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-ink/70 transition hover:bg-navy hover:text-white sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
