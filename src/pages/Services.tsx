import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Zap, Target, Shield, Hand, Droplets, Brain, Waves } from "lucide-react";

const services = [
  {
    name: "Sports Massage",
    icon: Zap,
    desc: "Designed for athletes at every level. Our sports massage protocol addresses muscle imbalances, prevents injury, and accelerates post-training recovery using a combination of deep pressure, stretching, and joint mobilization.",
    benefits: ["Faster recovery", "Injury prevention", "Improved flexibility", "Enhanced performance"],
  },
  {
    name: "Deep Tissue Massage",
    icon: Target,
    desc: "Focused, sustained pressure targeting the deepest layers of muscle and fascia. Ideal for chronic pain, postural issues, and stubborn tension patterns that won't resolve on their own.",
    benefits: ["Chronic pain relief", "Break up adhesions", "Improve posture", "Reduce muscle tension"],
  },
  {
    name: "Myofascial Release",
    icon: Shield,
    desc: "Gentle but effective sustained pressure applied to fascial restrictions. This technique restores mobility, reduces referred pain, and improves the body's structural alignment over time.",
    benefits: ["Restore mobility", "Reduce referred pain", "Improve alignment", "Release fascial restrictions"],
  },
  {
    name: "Trigger Point Therapy",
    icon: Hand,
    desc: "Precise pressure on myofascial trigger points—those stubborn knots that radiate pain to other areas. We identify and deactivate trigger points to provide lasting relief from headaches, back pain, and more.",
    benefits: ["Eliminate knots", "Reduce radiating pain", "Headache relief", "Targeted treatment"],
  },
  {
    name: "Swedish Massage",
    icon: Waves,
    desc: "Classic relaxation massage using flowing strokes to improve circulation, ease muscle tension, and promote whole-body relaxation. A great introduction to bodywork or complement to more intensive therapies.",
    benefits: ["Stress reduction", "Improved circulation", "Full-body relaxation", "Muscle tension relief"],
  },
  {
    name: "Cupping Therapy",
    icon: Droplets,
    desc: "Traditional suction-based therapy that increases local blood flow, reduces inflammation, and releases deep muscular tension. Widely used by elite athletes for recovery and pain management.",
    benefits: ["Increased blood flow", "Reduce inflammation", "Deep tension release", "Athletic recovery"],
  },
  {
    name: "Neuromuscular Therapy",
    icon: Brain,
    desc: "Advanced clinical technique addressing nerve compression, postural distortions, and biomechanical dysfunction. Neuromuscular therapy restores proper communication between your nervous system and muscles.",
    benefits: ["Nerve compression relief", "Correct postural issues", "Biomechanical balance", "Chronic pain resolution"],
  },
];

const Services = () => (
  <>
    <section className="section-padding bg-hero-gradient">
      <div className="container-wide text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/30">
          Cambridge, MA
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized muscular therapy techniques for athletes, pain relief, and active recovery.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide space-y-12">
        {services.map((s, i) => (
          <div
            key={s.name}
            id={s.name.toLowerCase().replace(/\s+/g, "-")}
            className={`flex flex-col md:flex-row items-start gap-8 p-8 md:p-10 rounded-2xl bg-card border border-border ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-16 h-16 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
              <s.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">{s.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.benefits.map((b) => (
                  <span key={b} className="px-3 py-1 rounded-full bg-lime-light text-secondary-foreground text-xs font-medium">
                    {b}
                  </span>
                ))}
              </div>
              <Link to="/book">
                <Button className="mt-2 shadow-cta">Book {s.name} <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
