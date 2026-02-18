import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Conditions", to: "/conditions" },
  { label: "First Visit", to: "/first-visit" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border bg-card/90 backdrop-blur-md">
      <div className="container-wide flex h-20 items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Home" className="relative shrink-0">
          <Logo
            size="header"
            className="mt-1 translate-y-1 drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)] sm:translate-y-2"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary bg-teal-light" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:6179067557" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (617) 906-7557
          </a>
          <Link to="/book">
            <Button variant="default" className="shadow-cta">Book a Session</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.to ? "text-primary bg-teal-light" : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-border">
              <a href="tel:6179067557" className="flex items-center gap-2 px-4 py-2 text-muted-foreground">
                <Phone className="w-4 h-4" /> (617) 906-7557
              </a>
              <Link to="/book" onClick={() => setMobileOpen(false)}>
                <Button variant="default" className="w-full shadow-cta">Book a Session</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
