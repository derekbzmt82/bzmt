import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, ArrowRight, Shield, Zap, Target, Users, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Seo from "@/components/Seo";
import heroBg from "@/assets/hero-bg.jpg";
import landingAthletes from "@/assets/landing-athletes.jpg";
import landingPainRelief from "@/assets/landing-pain-relief.jpg";
import landingRecovery from "@/assets/landing-recovery.jpg";
import { useState } from "react";

const services = [
  { name: "Sports Massage", desc: "Targeted therapy for athletes to enhance performance and speed recovery.", icon: Zap },
  { name: "Deep Tissue", desc: "Focused pressure to release chronic tension and break up adhesions.", icon: Target },
  { name: "Myofascial Release", desc: "Gentle sustained pressure to restore fascial mobility and reduce pain.", icon: Shield },
  { name: "Cupping Therapy", desc: "Ancient technique using suction to improve blood flow and healing.", icon: Users },
];

const testimonials = [
  { name: "Sarah M.", role: "Marathon Runner", text: "Derek's sports massage was a game-changer for my marathon training. My IT band issues disappeared after three sessions.", rating: 5 },
  { name: "James T.", role: "CrossFit Athlete", text: "Best deep tissue work in Cambridge. Derek understands athletic bodies and knows exactly where the tension hides.", rating: 5 },
  { name: "Lisa K.", role: "Software Engineer", text: "I came in with debilitating neck and shoulder pain from desk work. After a few visits, my mobility improved dramatically.", rating: 5 },
  { name: "Marcus R.", role: "College Hockey Player", text: "BodyZen keeps me on the ice. Derek's neuromuscular work on my shoulders has been incredible for my game.", rating: 5 },
];

const landingBlocks = [
  {
    tag: "For Athletes",
    title: "Sports Massage for Peak Performance",
    desc: "Whether you're a weekend warrior or a pro athlete, our evidence-based sports massage protocols help you train harder, recover faster, and stay injury-free.",
    cta: "Book Sports Massage",
    image: landingAthletes,
    alt: "Athletic sports massage therapy session at BodyZen Cambridge",
  },
  {
    tag: "Pain Relief",
    title: "Targeted Pain Relief & Mobility",
    desc: "Chronic pain, restricted movement, or nagging injuries? Our advanced myofascial and neuromuscular techniques address root causes—not just symptoms.",
    cta: "Start Feeling Better",
    image: landingPainRelief,
    alt: "Client enjoying improved mobility after pain relief therapy",
  },
  {
    tag: "Recovery",
    title: "Post-Workout Recovery That Works",
    desc: "Accelerate muscle recovery, reduce DOMS, and restore range of motion. Deep tissue and cupping therapy designed for active bodies in Cambridge.",
    cta: "Book Recovery Session",
    image: landingRecovery,
    alt: "Recovery equipment at BodyZen sports therapy clinic",
  },
];

const faqs = [
  { q: "What is sports massage in Cambridge MA?", a: "Sports massage at BodyZen is a targeted, evidence-based approach to treating athletic injuries, improving mobility, and speeding recovery. We combine deep tissue, myofascial release, and neuromuscular techniques to help athletes and active individuals perform their best." },
  { q: "What does deep tissue massage in Cambridge help with?", a: "Deep tissue massage targets chronic muscle tension, adhesions, and restricted fascia. It's highly effective for back pain, neck stiffness, and repetitive strain injuries common among athletes and desk workers in the Cambridge area." },
  { q: "Is myofascial release available in Cambridge?", a: "Yes. BodyZen Muscular Therapy offers advanced myofascial release therapy to restore mobility, reduce pain, and improve posture by addressing fascial restrictions throughout the body." },
  { q: "What is cupping therapy in Cambridge?", a: "Cupping therapy uses suction cups to increase blood flow, reduce inflammation, and relieve deep muscular tension. It's popular among our Cambridge athlete clients for recovery and pain management." },
  { q: "How does neuromuscular therapy in Cambridge work?", a: "Neuromuscular therapy addresses trigger points, nerve compression, and postural distortions using precise, targeted pressure to restore proper muscle function and reduce chronic pain." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Seo
        title="BZMT | Sports Massage in Cambridge, MA"
        description="Evidence-based sports massage and muscular therapy in Cambridge, MA for recovery, mobility, and pain relief."
        path="/"
      />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Sports massage therapy clinic" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />
        </div>
        <div className="relative container-wide section-padding">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/30">
              Cambridge, MA · Sports Massage Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-primary-foreground mb-6">
              Move Better.<br />
              <span className="text-gradient-teal">Recover Faster.</span><br />
              Find Your Zen.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Evidence-based sports massage and muscular therapy for athletes and active individuals in Cambridge and Greater Boston.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 shadow-cta">
                  Book a Session <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:6179067557">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 border-primary/40 text-primary-foreground hover:bg-primary/10">
                  <Phone className="mr-2 w-5 h-5" /> (617) 906-7557
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading tag="Our Services" title="Specialized Muscular Therapy" subtitle="Advanced techniques tailored to athletes, pain relief, and active recovery in Cambridge, MA." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link to="/services" key={s.name} className="group p-6 rounded-xl bg-card border border-border hover:shadow-card-hover hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-teal-light">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Landing Blocks */}
      <section className="section-padding bg-muted">
        <div className="container-wide space-y-8">
          {landingBlocks.map((block, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-2xl bg-card border border-border ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-coral-light text-accent text-xs font-semibold uppercase tracking-wider">
                  {block.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">{block.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{block.desc}</p>
                <Link to="/book">
                  <Button className="shadow-cta mt-2">{block.cta} <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
              </div>
              <div className="flex-1 w-full h-48 md:h-64 rounded-xl overflow-hidden">
                <img src={block.image} alt={block.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading tag="Testimonials" title="What Our Clients Say" subtitle="Real results from athletes and active individuals across Cambridge and Greater Boston." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-wide max-w-3xl">
          <SectionHeading tag="FAQ" title="Frequently Asked Questions" subtitle="Answers about sports massage, deep tissue, and muscular therapy in Cambridge, MA." />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 shrink-0 text-primary" /> : <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-hero-gradient text-center">
        <div className="container-wide max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Move Better?</h2>
          <p className="text-lg text-muted-foreground mb-8">Book your sports massage session at BodyZen Muscular Therapy in Cambridge, MA today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="w-full sm:w-auto text-base px-8 shadow-cta">Book a Session</Button>
            </Link>
            <a href="tel:6179067557">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 border-primary/40 text-primary-foreground hover:bg-primary/10">
                <Phone className="mr-2 w-5 h-5" /> Call (617) 906-7557
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
