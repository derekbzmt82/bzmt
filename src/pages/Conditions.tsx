import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const conditions = [
  { name: "Migraines & Headaches", desc: "Trigger point therapy and myofascial release targeting cervical and cranial tension patterns that contribute to chronic migraines." },
  { name: "TMJ Dysfunction", desc: "Intraoral and external jaw muscle therapy to relieve TMJ pain, clicking, and restricted opening." },
  { name: "Sciatica", desc: "Targeted work on piriformis, glutes, and lumbar muscles to decompress the sciatic nerve and restore pain-free movement." },
  { name: "Frozen Shoulder", desc: "Progressive myofascial release and joint mobilization to restore shoulder range of motion and reduce adhesive capsulitis symptoms." },
  { name: "Scoliosis", desc: "Postural balancing through targeted muscular therapy to reduce pain and improve functional alignment." },
  { name: "Sports Injuries", desc: "Comprehensive treatment for strains, sprains, and overuse injuries common in athletes of all levels." },
  { name: "Whiplash", desc: "Gentle but effective cervical and thoracic therapy to address muscle guarding, pain, and restricted mobility after neck injury." },
  { name: "Thoracic Outlet Syndrome", desc: "Focused therapy on scalenes, pectoralis minor, and first rib area to relieve nerve and vascular compression." },
  { name: "Rotator Cuff Issues", desc: "Targeted work on the four rotator cuff muscles and surrounding fascia to reduce pain and restore shoulder function." },
  { name: "Muscle Strains", desc: "Evidence-based soft tissue therapy to accelerate healing, reduce scar tissue, and restore muscle function after strains." },
  { name: "Carpal Tunnel Syndrome", desc: "Forearm, wrist, and hand therapy addressing the muscular and fascial contributors to median nerve compression." },
  { name: "Tennis Elbow", desc: "Deep tissue and trigger point work on forearm extensors to resolve lateral epicondylitis pain and grip weakness." },
  { name: "Slipped / Herniated Discs", desc: "Supportive muscular therapy to reduce spasm, improve spinal support, and manage disc-related pain conservatively." },
  { name: "Stress & Anxiety", desc: "Therapeutic massage activates the parasympathetic nervous system, lowering cortisol and promoting deep relaxation." },
];

const Conditions = () => (
  <>
    <section className="section-padding bg-hero-gradient">
      <div className="container-wide text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/30">
          Conditions We Treat
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Conditions We Help
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From sports injuries to chronic pain conditions, our targeted muscular therapy delivers real results.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((c) => (
            <div key={c.name} className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover hover:border-primary/30 transition-all">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-coral-light border border-accent/20 text-center">
          <p className="text-foreground font-medium mb-4">
            Not sure if we can help with your condition? Give us a call—we're happy to discuss your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button className="shadow-cta">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
            <a href="tel:6179067557">
              <Button variant="outline" className="border-primary text-primary hover:bg-teal-light">Call (617) 906-7557</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Conditions;
