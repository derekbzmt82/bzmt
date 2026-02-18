import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Logo size="default" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premier sports massage and muscular therapy serving Cambridge and Greater Boston athletes and active individuals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Services", to: "/services" },
              { label: "About Derek", to: "/about" },
              { label: "Conditions We Help", to: "/conditions" },
              { label: "First Visit", to: "/first-visit" },
              { label: "Book a Session", to: "/book" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Sports Massage</li>
            <li>Deep Tissue Massage</li>
            <li>Myofascial Release</li>
            <li>Cupping Therapy</li>
            <li>Neuromuscular Therapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              20 Hardwick Street, Cambridge, MA 02141
            </li>
            <li>
              <a href="tel:6179067557" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                (617) 906-7557
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              By Appointment Only
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-dark-lighter text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BodyZen Muscular Therapy. All rights reserved. | Cambridge, MA
      </div>
    </div>
  </footer>
);

export default Footer;
