import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const Contact = () => (
  <>
    <section className="section-padding bg-hero-gradient">
      <div className="container-wide text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/30">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Contact & Location
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          BodyZen Muscular Therapy is located in Cambridge, MA, serving the Greater Boston area.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-lg text-foreground mb-1">Address</h2>
                <p className="text-muted-foreground">20 Hardwick Street<br />Cambridge, MA 02141</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-lg text-foreground mb-1">Phone</h2>
                <a href="tel:6179067557" className="text-primary hover:underline">(617) 906-7557</a>
                <p className="text-sm text-muted-foreground mt-1">Call or text for appointments</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-lg text-foreground mb-1">Hours</h2>
                <p className="text-muted-foreground">By Appointment Only</p>
                <p className="text-sm text-muted-foreground mt-1">Monday – Saturday, 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/book">
                <Button size="lg" className="shadow-cta">Book an Appointment <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl bg-muted border border-border overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">20 Hardwick Street</h3>
              <p className="text-muted-foreground mb-4">Cambridge, MA 02141</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=20+Hardwick+Street+Cambridge+MA+02141"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-teal-light">
                  Open in Google Maps <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
