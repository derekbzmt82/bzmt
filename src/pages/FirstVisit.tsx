import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { ArrowRight, ClipboardList, MessageSquare, ShieldCheck, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Book Your Appointment",
    desc: "Schedule online or call us at (617) 906-7557. We'll find a time that works for your schedule.",
  },
  {
    icon: ClipboardList,
    title: "2. Intake & Assessment",
    desc: "Complete a brief health history form. Derek will discuss your goals, pain points, activity level, and any medical considerations.",
  },
  {
    icon: MessageSquare,
    title: "3. Customized Treatment",
    desc: "Based on your assessment, Derek develops a personalized treatment plan using the most effective techniques for your specific needs.",
  },
  {
    icon: ShieldCheck,
    title: "4. Ongoing Care Plan",
    desc: "After your session, you'll receive self-care recommendations and a suggested treatment frequency to achieve lasting results.",
  },
];

const FirstVisit = () => (
  <>
    <Seo
      title="First Visit | BZMT"
      description="Learn what to expect on your first BZMT appointment in Cambridge, MA."
      path="/first-visit"
    />
    <section className="section-padding bg-hero-gradient">
      <div className="container-wide text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/30">
          New Clients
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Your First Visit
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          What to expect when you visit BodyZen Muscular Therapy in Cambridge, MA.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide max-w-4xl">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-6 p-6 rounded-xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl text-foreground mb-2">{step.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-muted border border-border">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-3">Important Note</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Massage therapy at BodyZen Muscular Therapy is not a substitute for medical care. Our services are therapeutic and wellness-oriented. If you have a medical condition, please consult with your physician before booking. We may request a physician's clearance for certain conditions.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/book">
            <Button size="lg" className="shadow-cta">Book Your First Session <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default FirstVisit;
