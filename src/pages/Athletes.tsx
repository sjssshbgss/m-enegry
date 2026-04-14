import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, ArrowRight, Calendar } from "lucide-react";

const athletes = [
  { id: 1, name: "JAXON REED", sport: "SUPERCROSS", img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2071&auto=format&fit=crop" },
  { id: 2, name: "SARAH BLAZE", sport: "X GAMES / SKATE", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1964&auto=format&fit=crop" },
  { id: 3, name: "MARCUS 'STORM' KING", sport: "UFC", img: "https://images.unsplash.com/photo-1544117518-2b622548dded?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "ELENA VOLT", sport: "SURFING", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop" },
];

const events = [
  { id: 1, title: "VORTEX OPEN: SKATE JAM", date: "MAY 15-17", location: "LOS ANGELES, CA" },
  { id: 2, title: "SUPERCROSS FINALS", date: "JUNE 02", location: "LAS VEGAS, NV" },
  { id: 3, title: "VORTEX GAMING MASTERS", date: "JULY 10-12", location: "AUSTIN, TX" },
];

export default function Athletes() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="py-32 border-b border-white/10">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl md:text-[12rem] leading-[0.8] mb-12">THE <br /> ELITE</h1>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="text-2xl text-muted-foreground max-w-2xl font-sans">
              Meet the world-class athletes and creators who push the boundaries of what's possible with Vortex Energy.
            </p>
            <Button className="bg-primary text-black font-heading text-2xl h-16 px-12 hover:bg-primary/90">
              JOIN THE TEAM
            </Button>
          </div>
        </div>
      </section>

      {/* Athlete Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {athletes.map((athlete, i) => (
              <motion.div
                key={athlete.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[600px] overflow-hidden bg-zinc-900"
              >
                <img 
                  src={athlete.img} 
                  alt={athlete.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-12 flex flex-col justify-end">
                  <span className="text-primary font-heading text-xl mb-2">{athlete.sport}</span>
                  <h3 className="text-6xl mb-6">{athlete.name}</h3>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <Instagram className="h-6 w-6 text-white hover:text-primary cursor-pointer" />
                    <Twitter className="h-6 w-6 text-white hover:text-primary cursor-pointer" />
                    <Youtube className="h-6 w-6 text-white hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-6xl">UPCOMING EVENTS</h2>
            <Button variant="link" className="text-primary font-heading text-xl p-0 h-auto">VIEW CALENDAR</Button>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ x: 20 }}
                className="group flex flex-col md:flex-row items-center justify-between p-10 bg-black border border-white/5 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-8 mb-6 md:mb-0">
                  <div className="flex flex-col items-center justify-center w-20 h-20 bg-zinc-900 border border-white/10 group-hover:bg-primary group-hover:text-black transition-colors">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl mb-2">{event.title}</h3>
                    <p className="text-muted-foreground font-sans uppercase tracking-widest text-sm">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  <span className="text-3xl font-heading text-white/50">{event.date}</span>
                  <Button className="bg-white text-black font-heading text-lg h-12 px-8 hover:bg-primary">
                    GET TICKETS
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl mb-8">NEVER MISS A BEAT</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-sans">
            Subscribe to the Vortex newsletter for exclusive event access, athlete interviews, and limited gear drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-zinc-900 border border-white/10 px-6 py-4 font-sans focus:outline-none focus:border-primary transition-colors"
            />
            <Button className="bg-primary text-black font-heading text-xl h-full py-4 px-10 hover:bg-primary/90">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
