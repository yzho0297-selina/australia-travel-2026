import { MapPin } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", page: "home" },
  { label: "Timeline", href: "/timeline", page: "timeline" },
  { label: "Travel Guide", href: "/guide", page: "guide" }
];

function Navbar({ currentPage }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <nav
        className="mx-auto flex h-16 w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/30 px-3 shadow-[0_18px_60px_rgba(90,52,124,0.18)] backdrop-blur-xl sm:px-4"
      >
        <a href="/" className="flex items-center gap-2 font-semibold text-[#5F5A7A]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/35 text-[#4F5373]">
            <MapPin size={18} />
          </span>
          <span className="hidden sm:inline">Australia Trip 2026</span>
        </a>

        <div className="flex items-center gap-1 rounded-full bg-white/20 p-1 text-sm ring-1 ring-white/30">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.page === currentPage ? "page" : undefined}
              className={`rounded-full px-3 py-2 transition sm:px-4 ${
                item.page === currentPage
                  ? "bg-gradient-to-r from-[#FCAEC1] via-[#B7A8D6] to-[#ADD9F3] text-white shadow-[0_10px_30px_rgba(111,70,143,0.28)]"
                  : "text-[#5F5A7A] hover:bg-white/20 hover:text-[#4F5373]"
              }`}
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
