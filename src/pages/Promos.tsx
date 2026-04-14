import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Trophy, Gift, ArrowRight, Zap } from "lucide-react";

export default function Promos() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
            alt="Gaming" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-primary font-heading text-xl mb-4">
              <Gamepad2 className="h-6 w-6" />
              <span>GAMING & PROMOS</span>
            </div>
            <h1 className="text-7xl md:text-9xl mb-8">UNLOCK <br /> YOUR POTENTIAL</h1>
            <p className="text-xl text-white/70 mb-10 font-sans">
              Redeem codes from your Vortex cans to unlock exclusive in-game content, double XP, and enter for a chance to win legendary prizes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-black font-heading text-2xl h-16 px-10 hover:bg-primary/90">
                REDEEM CODE
              </Button>
              <Button variant="outline" className="border-white/20 text-white font-heading text-2xl h-16 px-10 hover:bg-white/10">
                CREATE ACCOUNT
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Promos */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-center">ACTIVE SWEEPSTAKES</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                alt="Apex Legends" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-5xl mb-4">APEX LEGENDS X VORTEX</h3>
                <p className="text-xl text-white/70 mb-8 font-sans">Unlock the exclusive "Vortex Wraith" skin and 2XP tokens with every can.</p>
                <Button className="w-fit bg-white text-black font-heading text-xl h-14 px-8 hover:bg-primary">
                  LEARN MORE <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                alt="Call of Duty" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-5xl mb-4">CALL OF DUTY: BLACK OPS</h3>
                <p className="text-xl text-white/70 mb-8 font-sans">Win a trip to the World Series of Warzone and exclusive weapon blueprints.</p>
                <Button className="w-fit bg-white text-black font-heading text-xl h-14 px-8 hover:bg-primary">
                  LEARN MORE <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl mb-4">HOW TO WIN</h2>
            <p className="text-muted-foreground font-sans">Three simple steps to glory.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "BUY VORTEX", icon: Gift, desc: "Look for specially marked cans at your local retailer." },
              { step: "02", title: "FIND CODE", icon: Zap, desc: "Check under the tab for your unique 10-digit redemption code." },
              { step: "03", title: "REDEEM", icon: Trophy, desc: "Enter your code online to unlock rewards and enter sweepstakes." },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-10 w-10 text-black" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-white text-black font-heading px-2 py-1 text-sm">{item.step}</span>
                </div>
                <h3 className="text-3xl">{item.title}</h3>
                <p className="text-muted-foreground font-sans max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
