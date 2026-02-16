import React from "react";
import Seo from "../components/Seo";
import { localBusinessJsonLd } from "../seo";

const items = [
  "Migraines / headaches",
  "TMJ discomfort",
  "Sciatica and low back tightness",
  "Frozen shoulder / restricted range",
  "Scoliosis-related tension",
  "Sports injuries and overuse",
  "Whiplash and neck strain",
  "Thoracic outlet symptoms",
  "Rotator cuff irritation",
  "Muscle strains and sprains",
  "Carpal tunnel symptoms",
  "Tennis elbow / forearm pain",
  "Slipped discs (supportive care)",
  "Stress and anxiety (supportive care)"
];

export default function Conditions() {
  return (
    <div className="section">
      <div className="container">
        <Seo
          title="Conditions We Help"
          path="/conditions"
          description="Sports injury support and pain relief massage in Cambridge, MA. We help with mobility limits, tension, and common athletic and desk-life problems."
          jsonLd={[localBusinessJsonLd()]}
        />
        <div className="kicker">Conditions</div>
        <h1 style={{ marginTop: 10 }}>Common issues we work with</h1>
        <div style={{ height: 12 }} />
        <p>Massage therapy is not a substitute for medical care, but it can be a supportive tool for pain reduction, mobility, and recovery.</p>

        <div style={{ height: 18 }} />
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {items.map(i => (
            <div key={i} className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 900 }}>{i}</div>
              <p className="small" style={{ marginTop: 8 }}>We’ll assess patterns, work the tissue, and aim for change you can feel.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
