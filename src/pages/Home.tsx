import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Trophy, Gamepad2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" 
            alt="Energy Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-[10rem] leading-[0.85] mb-6 neon-glow">
              UNLEASH <br /> THE VORTEX
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl font-sans font-medium">
              The ultimate fuel for those who refuse to slow down. High energy, zero sugar, infinite possibilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-black font-heading text-2xl h-16 px-10 hover:bg-primary/90 hover:scale-105 transition-all">
                SHOP NOW <ShoppingBag className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white font-heading text-2xl h-16 px-10 hover:bg-white/10 transition-all">
                LATEST DROPS <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 right-10 hidden xl:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-64 h-64"
          >
            <Zap className="absolute inset-0 m-auto h-20 w-20 text-primary fill-primary" />
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="font-heading text-[8px] uppercase fill-white/30 tracking-[0.2em]">
                <textPath href="#textPath">
                  VORTEX ENERGY • FUEL YOUR PASSION • UNLEASH THE BEAST • 
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "DRINKS", icon: Zap, color: "text-primary", desc: "Original, Ultra, Java, & more" },
              { title: "GAMING", icon: Gamepad2, color: "text-blue-400", desc: "Exclusive rewards & promos" },
              { title: "ATHLETES", icon: Trophy, color: "text-red-500", desc: "Meet the Vortex team" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 bg-black border border-white/10 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <item.icon className={`h-24 w-24 ${item.color}`} />
                </div>
                <h3 className="text-4xl mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground font-sans">{item.desc}</p>
                <div className="mt-8 flex items-center text-primary font-heading text-lg opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  EXPLORE <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mega Campaign Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Gaming Campaign" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-8">LEVEL UP YOUR GAME</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-sans">
              Enter the Vortex Gaming Sweepstakes for a chance to win a custom gaming rig and exclusive Vortex gear.
            </p>
            <Button className="bg-white text-black font-heading text-2xl h-16 px-12 hover:bg-primary transition-all">
              ENTER NOW
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Latest News / Athletes */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-5xl md:text-7xl">LATEST DROPS</h2>
            <Link to="/drinks" className="text-primary font-heading text-xl hover:underline mb-2">VIEW ALL</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "VORTEX ULTRA BLUE", tag: "NEW", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop" },
              { name: "JAVA VORTEX MOCHA", tag: "BEST SELLER", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" },
              { name: "VORTEX REHAB LEMON", tag: "RESTOCKED", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop" },
              { name: "VORTEX JUICE MANGO", tag: "LIMITED", img: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1974&auto=format&fit=crop" },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-black px-3 py-1 font-heading text-sm">{product.tag}</span>
                  </div>
                </div>
                <h4 className="text-2xl group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-muted-foreground font-sans text-sm">ZERO SUGAR • HIGH ENERGY</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
