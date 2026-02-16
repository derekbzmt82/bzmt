import React from "react";
import Seo from "../components/Seo";
import { BUSINESS, localBusinessJsonLd } from "../seo";

export default function Book() {
  return (
    <div className="section">
      <div className="container">
        <Seo
          title="Book"
          path="/book"
          description="Book your sports massage appointment in Cambridge, MA with BodyZen Muscular Therapy."
          jsonLd={[localBusinessJsonLd()]}
        />
        <div className="kicker">Book</div>
        <h1 style={{ marginTop: 10 }}>Book your session</h1>
        <div style={{ height: 12 }} />
        <div className="card" style={{ padding: 22 }}>
          <p>Use our online booking system to choose your session and time. You’ll get confirmation and intake steps.</p>
          <div style={{ height: 14 }} />
          <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">Open Online Booking</a>
          <div style={{ height: 10 }} />
          <a className="btn lime" href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}>Or Call/Text {BUSINESS.phone}</a>
        </div>
      </div>
    </div>
  );
}
