import React from "react";
import Seo from "../components/Seo";
import { localBusinessJsonLd, BUSINESS } from "../seo";

const services = [
  { name: "Sports Massage", desc: "Goal-driven massage for performance, recovery, and training load management." },
  { name: "Deep Tissue", desc: "Target deeper layers to reduce tension and improve function." },
  { name: "Myofascial Release", desc: "Fascial techniques to reduce restriction and improve mobility." },
  { name: "Trigger Point Therapy", desc: "Focused work to calm irritated points and referred pain patterns." },
  { name: "Swedish Massage", desc: "Relaxation-focused massage that still supports tissue health and recovery." },
  { name: "Cupping Therapy", desc: "Optional add-on to support tissue mobility, circulation, and movement." },
  { name: "Neuromuscular Therapy", desc: "Assessment-based techniques to reduce compensation and improve movement quality." }
];

export default function Services() {
  return (
    <div className="section">
      <div className="container">
        <Seo
          title="Services"
          path="/services"
          description="Sports massage, deep tissue, myofascial release, neuromuscular therapy, trigger point work, Swedish massage, and cupping therapy in Cambridge, MA."
          jsonLd={[localBusinessJsonLd()]}
        />
        <div className="kicker">Services</div>
        <h1 style={{ marginTop: 10 }}>Built for athletes. Perfect for stressed-out humans too.</h1>
        <div style={{ height: 12 }} />
        <p>Choose a session that fits your goals. We’ll adjust techniques based on your body, training, and tolerance.</p>

        <div style={{ height: 18 }} />
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {services.map(s => (
            <div key={s.name} className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>{s.name}</div>
              <p className="small" style={{ marginTop: 8 }}>{s.desc}</p>
              <div style={{ height: 14 }} />
              <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">Book a Session</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
