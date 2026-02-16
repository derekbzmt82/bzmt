import React from "react";
import Seo from "../components/Seo";
import { BUSINESS, localBusinessJsonLd } from "../seo";

export default function Contact() {
  return (
    <div className="section">
      <div className="container">
        <Seo
          title="Contact & Location"
          path="/contact"
          description="Visit BodyZen Muscular Therapy at 20 Hardwick Street, Cambridge, MA. Appointment only. Book online or call/text (617) 906-7557."
          jsonLd={[localBusinessJsonLd()]}
        />
        <div className="kicker">Contact</div>
        <h1 style={{ marginTop: 10 }}>Cambridge location. Appointment only.</h1>
        <div style={{ height: 12 }} />

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="card" style={{ padding: 18 }}>
            <div className="badge">{BUSINESS.address}</div>
            <div style={{ height: 10 }} />
            <div className="badge">Phone: {BUSINESS.phone}</div>
            <div style={{ height: 14 }} />
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">Book a Session</a>
              <a className="btn lime" href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}>Call/Text</a>
            </div>
            <div style={{ height: 16 }} />
            <p className="small">Replace the map placeholder with an embedded Google Map or static map image for best performance.</p>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900, marginBottom: 10 }}>Map (placeholder)</div>
            <div className="card" style={{ height: 260, borderRadius: 16, border: "1px solid rgba(255,255,255,.10)", background: "rgba(0,0,0,.18)", display: "grid", placeItems: "center" }}>
              <div className="small" style={{ textAlign: "center" }}>
                Embed map here<br />(Google Maps iframe or static image)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
