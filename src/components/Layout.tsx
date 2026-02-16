import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { BUSINESS } from "../seo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/first-visit", label: "First Visit" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/book", label: "Book" }
];

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="/" aria-label="BodyZen home">
            <Logo />
          </a>

          <nav className="nav" aria-label="Primary navigation">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? "active" : "")}>
                {n.label}
              </NavLink>
            ))}
            <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">
              Book a Session
            </a>
          </nav>

          <a className="btn lime" href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}>
            Call/Text {BUSINESS.phone}
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <a className="mobile-fab btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">
        Book Now
      </a>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>{BUSINESS.name}</div>
            <p className="small">
              Athlete-friendly, evidence-informed bodywork focused on pain relief, mobility, and recovery.
              Appointment only.
            </p>
            <div style={{ height: 10 }} />
            <div className="badge">{BUSINESS.address}</div>
            <div style={{ height: 10 }} />
            <div className="badge">Phone: {BUSINESS.phone}</div>
          </div>

          <div>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Popular Services</div>
            <div className="small">
              <div><a href="/services">Sports Massage</a></div>
              <div><a href="/services">Deep Tissue</a></div>
              <div><a href="/services">Myofascial Release</a></div>
              <div><a href="/services">Cupping Therapy</a></div>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Get Started</div>
            <div className="small">
              <div><a href="/first-visit">What to Expect</a></div>
              <div><a href="/contact">Location</a></div>
              <div>
                <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">
                  Book a Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
