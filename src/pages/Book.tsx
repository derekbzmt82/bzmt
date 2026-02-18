import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Calendar, Phone, ArrowRight } from "lucide-react";

const Book = () => (
  <>
    <Seo
      title="Book a Session | BZMT"
      description="Book your sports massage or muscular therapy session with BZMT in Cambridge, MA."
      path="/book"
    />
    <section className="section-padding bg-hero-gradient">
      <div className="container-wide text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/30">
          Schedule Now
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Book a Session
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to move better? Schedule your sports massage or muscular therapy session in Cambridge, MA.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide max-w-2xl text-center">
        <div className="p-10 rounded-2xl bg-card border border-border shadow-card-hover space-y-6">
          <div className="w-16 h-16 rounded-full bg-teal-light flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-2xl text-foreground">Online Booking</h2>
          <p className="text-muted-foreground leading-relaxed">
            Use our online scheduling system to find an available time that works for you. New clients should allow extra time for intake and assessment.
          </p>
          <a href="/book" className="block">
            <Button size="lg" className="w-full sm:w-auto text-base px-10 shadow-cta">
              Open Booking System <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Prefer to call?</p>
            <a href="tel:6179067557">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-teal-light">
                <Phone className="mr-2 w-5 h-5" /> (617) 906-7557
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground space-y-2">
          <p>First time? <Link to="/first-visit" className="text-primary hover:underline">Learn what to expect →</Link></p>
          <p>Questions? <Link to="/contact" className="text-primary hover:underline">Contact us →</Link></p>
        </div>
      </div>
    </section>
  </>
);

export default Book;
