import React from "react";
import Seo from "../components/Seo";
import { localBusinessJsonLd } from "../seo";

export default function FirstVisit() {
  return (
    <div className="section">
      <div className="container">
        <Seo
          title="First Visit"
          path="/first-visit"
          description="What to expect at your first sports massage appointment in Cambridge, MA. Intake, assessment, treatment plan, and aftercare."
          jsonLd={[localBusinessJsonLd()]}
        />
        <div className="kicker">First Visit</div>
        <h1 style={{ marginTop: 10 }}>What to expect (no awkward surprises)</h1>
        <div style={{ height: 12 }} />

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900 }}>1) Intake + goals</div>
            <p className="small" style={{ marginTop: 8 }}>We’ll discuss training, pain points, injuries, and what “better” looks like for you.</p>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900 }}>2) Assessment</div>
            <p className="small" style={{ marginTop: 8 }}>Simple movement checks and palpation to understand patterns and priorities.</p>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900 }}>3) Treatment + aftercare</div>
            <p className="small" style={{ marginTop: 8 }}>Techniques are adjusted to your tolerance. We’ll suggest hydration, movement, and recovery steps.</p>
          </div>
        </div>

        <div style={{ height: 18 }} />
        <div className="card" style={{ padding: 22 }}>
          <p className="small">
            <strong>Safety note:</strong> Massage therapy is not medical diagnosis or emergency care.
            If you have severe symptoms, new neurological changes, chest pain, or concerning swelling, seek medical attention.
          </p>
        </div>
      </div>
    </div>
  );
}
