import React from "react";
import Seo from "../components/Seo";
import { localBusinessJsonLd } from "../seo";

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <Seo
          title="About"
          path="/about"
          description="Meet Derek C. Campbell of BodyZen Muscular Therapy in Cambridge, MA. Martial arts roots, Eastern medicine influence, and an orthopedic/myofascial approach."
          jsonLd={[localBusinessJsonLd()]}
        />
        <div className="kicker">About</div>
        <h1 style={{ marginTop: 10 }}>Bodywork with martial arts discipline and real-world results.</h1>
        <div style={{ height: 12 }} />
        <div className="card" style={{ padding: 22 }}>
          <p>
            BodyZen Muscular Therapy is led by <strong>Derek C. Campbell</strong>, blending martial arts foundations,
            Eastern medicine influence, and advanced orthopedic + myofascial techniques.
          </p>
          <div style={{ height: 10 }} />
          <p>
            Trained at the Charles River School of Shiatsu and rooted in Boston’s massage therapy community,
            Derek works with pro and college athletes as well as everyday clients who simply want to move better
            and hurt less.
          </p>
          <div style={{ height: 10 }} />
          <p>The mission is simple: help you find your Zen, then build strength and resilience on top of it.</p>
        </div>
      </div>
    </div>
  );
}
