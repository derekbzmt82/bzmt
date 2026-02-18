import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const FloatingBookCTA = () => (
  <Link
    to="/book"
    className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-full font-heading font-semibold text-sm shadow-cta animate-pulse-glow transition-transform hover:scale-105 active:scale-95"
    aria-label="Book a Session"
  >
    <Calendar className="w-5 h-5" />
    Book Now
  </Link>
);

export default FloatingBookCTA;
