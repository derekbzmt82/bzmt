import React from "react";
import Seo from "../components/Seo";
import { BUSINESS, localBusinessJsonLd, faqJsonLd } from "../seo";

const faq = [
  { q: "Do you offer sports massage in Cambridge, MA?", a: "Yes. BodyZen provides sports-focused massage therapy in Cambridge, MA, designed for recovery, mobility, and performance support." },
  { q: "What’s the difference between sports massage and deep tissue massage?", a: "Sports massage is goal-driven for training and recovery, often blending techniques. Deep tissue targets deeper layers to reduce tension and improve function." },
  { q: "Can myofascial release help tight hips and low back pain?", a: "Myofascial release can reduce fascial restriction and improve movement quality. Many clients use it alongside training and rehab programs." },
  { q: "Do you offer cupping therapy in Cambridge?", a: "Yes. Cupping can be integrated into sessions to support tissue mobility and circulation as appropriate for your goals." }
];

export default function Home() {
  return (
    <>
      <Seo
        title="Sports Massage in Cambridge, MA"
        path="/"
        description="Athlete-friendly sports massage in Cambridge, MA. Recovery, mobility, deep tissue, myofascial release, and cupping. Book a session with BodyZen Muscular Therapy."
        jsonLd={[localBusinessJsonLd(), faqJsonLd(faq)]}
      />

      <section className="hero">
        <div className="container hero-wrap">
          <div className="card hero-card">
            <div className="badge">Cambridge • Kendall Square • MIT • Greater Boston</div>
            <div style={{ height: 14 }} />
            <h1>
              Sports Massage in <span style={{ color: "var(--teal)" }}>Cambridge, MA</span> built for
              <span style={{ color: "var(--lime)" }}> recovery</span>,{" "}
              <span style={{ color: "var(--coral)" }}>mobility</span>, and real-life performance.
            </h1>
            <div style={{ height: 12 }} />
            <p>
              Evidence-informed manual therapy for athletes and everyday humans with tightness, pain, or
              movement limits. We focus on outcomes: better range, less strain, faster bounce-back.
            </p>

            <div className="hero-cta">
              <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">Book a Session</a>
              <a className="btn lime" href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}>Call/Text {BUSINESS.phone}</a>
              <a className="btn" href="/services">See Services</a>
            </div>

            <div className="hero-points">
              <div className="point">
                <div className="dot" />
                <div>
                  <div style={{ fontWeight: 900 }}>Athlete-first treatment plans</div>
                  <p className="small">Training stress, overuse, and recovery needs, handled like a grown-up.</p>
                </div>
              </div>
              <div className="point">
                <div className="dot" />
                <div>
                  <div style={{ fontWeight: 900 }}>Pain relief + mobility</div>
                  <p className="small">Deep tissue, trigger point work, myofascial release, and smart techniques.</p>
                </div>
              </div>
              <div className="point">
                <div className="dot" />
                <div>
                  <div style={{ fontWeight: 900 }}>Cambridge location, appointment only</div>
                  <p className="small">20 Hardwick Street, Cambridge, MA 02141</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="card aside">
            <div className="tile">
              <div className="kicker">Google Ads Landing Block</div>
              <h3 style={{ marginTop: 8 }}>Sports Massage for Athletes</h3>
              <p className="small" style={{ marginTop: 8 }}>Pre-event prep, post-event recovery, and maintenance during training cycles.</p>
              <div style={{ height: 10 }} />
              <a className="btn primary" href={BUSINESS.bookingUrl} target="_blank" rel="noreferrer">Book Athlete Session</a>
            </div>

            <div className="tile">
              <div className="kicker">Google Ads Landing Block</div>
              <h3 style={{ marginTop: 8 }}>Pain Relief & Mobility</h3>
              <p className="small" style={{ marginTop: 8 }}>Neck, shoulders, hips, and back: reduce tension, restore movement, get back to living.</p>
              <div style={{ height: 10 }} />
              <a className="btn lime" href="/conditions">See Conditions We Help</a>
            </div>

            <div className="tile">
              <div className="kicker">Google Ads Landing Block</div>
              <h3 style={{ marginTop: 8 }}>Post-Workout Recovery</h3>
              <p className="small" style={{ marginTop: 8 }}>DOMS, heavy legs, stiff back: targeted work to help you recover better between sessions.</p>
              <div style={{ height: 10 }} />
              <a className="btn" href="/first-visit">What to Expect</a>
            </div>

            <div className="tile">
              <div className="kicker">Testimonials</div>
              <p className="small" style={{ marginTop: 8 }}>“Best deep tissue massage in Cambridge. My hip mobility came back after two sessions.”</p>
              <p className="small" style={{ marginTop: 8 }}>“Athlete-friendly, no fluff, just results. My shoulders finally stopped screaming.”</p>
              <p className="small" style={{ marginTop: 8 }}>“Cupping + myofascial work made a huge difference in my running recovery.”</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
