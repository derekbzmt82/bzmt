import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { ArrowRight, Award, BookOpen, Users, Heart } from "lucide-react";

const highlights = [
  { icon: Award, title: "Martial Arts Foundation", desc: "Derek's deep understanding of biomechanics and body movement stems from years of martial arts training." },
  { icon: BookOpen, title: "Eastern Medicine Roots", desc: "Trained at the Charles River School of Shiatsu, integrating Eastern therapeutic traditions with Western clinical approaches." },
  { icon: Users, title: "Pro & College Athletes", desc: "Works with professional and collegiate athletes alongside everyday clients seeking pain relief and improved mobility." },
  { icon: Heart, title: "Advanced Orthopedic Approach", desc: "Specialized in orthopedic and myofascial assessment, treating complex musculoskeletal conditions with precision." },
];

const About = () => (
  <>
    <Seo
      title="About Derek C. Campbell | BZMT"
      description="Meet Derek C. Campbell, founder of BodyZen Muscular Therapy in Cambridge, MA."
      path="/about"
    />
    <section className="section-padding bg-hero-gradient">
      <div className="container-wide text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/30">
          Meet Your Therapist
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-4">
          About Derek C. Campbell
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Where martial discipline meets healing science—find your Zen.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            Derek C. Campbell is the founder of BodyZen Muscular Therapy, bringing a unique blend of martial arts discipline, Eastern medicine philosophy, and advanced clinical massage techniques to every session.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trained at the prestigious Charles River School of Shiatsu in Boston, Derek developed a deep appreciation for the body's interconnected systems—how fascia, muscles, nerves, and energy pathways work together. This foundation, combined with advanced study in orthopedic massage and myofascial release, allows him to treat conditions that other practitioners miss.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Derek's client roster spans professional and collegiate athletes to office workers battling chronic pain. His approach is simple: listen to the body, identify the root cause, apply evidence-based techniques, and help every client find their Zen—that state of balanced, pain-free movement where the body performs at its best.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At BodyZen, massage isn't a luxury—it's a performance tool and a pathway to sustainable wellness. Whether you're recovering from a marathon, managing chronic tension, or seeking relief from a specific condition, Derek's hands-on expertise and holistic perspective will help you move better and feel better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <div key={h.title} className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/book">
            <Button size="lg" className="shadow-cta">Book with Derek <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
