import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MapPin } from "lucide-react";

const categories = [
  { id: "original", name: "ORIGINAL", desc: "The classic high-octane formula that started it all." },
  { id: "ultra", name: "ULTRA", desc: "Zero sugar, zero compromise. Light, crisp, and refreshing." },
  { id: "java", name: "JAVA", desc: "Premium coffee meets Vortex energy. The ultimate wake-up call." },
  { id: "juice", name: "JUICE", desc: "Real fruit juice blended with our signature energy blend." },
  { id: "rehab", name: "REHAB", desc: "Non-carbonated, electrolyte-packed recovery." },
];

const products = [
  { id: 1, name: "VORTEX CLASSIC", category: "original", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, name: "ULTRA WHITE", category: "ultra", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "ULTRA RED", category: "ultra", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "MEAN BEAN", category: "java", img: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1974&auto=format&fit=crop" },
  { id: 5, name: "LOCA MOCHA", category: "java", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, name: "MANGO LOCO", category: "juice", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, name: "PIPELINE PUNCH", category: "juice", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" },
  { id: 8, name: "TEA + LEMONADE", category: "rehab", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop" },
];

export default function Drinks() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl mb-6"
          >
            THE LINEUP
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Explore the full range of Vortex Energy. From the original classic to our zero-sugar Ultra line, we've got the fuel you need.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="original" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-zinc-900 h-auto p-2 flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="font-heading text-xl px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-black"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="mb-12 text-center max-w-xl mx-auto">
                  <h2 className="text-4xl mb-4 text-primary">{cat.name} SERIES</h2>
                  <p className="text-muted-foreground font-sans">{cat.desc}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {products.filter(p => p.category === cat.id).map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="group bg-zinc-900 border border-white/5 hover:border-primary/30 transition-all p-6"
                    >
                      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-black">
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="text-2xl mb-4">{product.name}</h3>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-primary text-black font-heading hover:bg-primary/90">
                          BUY A CASE <ShoppingCart className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
                          <MapPin className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Store Locator CTA */}
      <section className="py-24 bg-primary text-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">THIRSTY YET?</h2>
            <p className="text-xl font-sans font-bold">Find Vortex Energy at a store near you.</p>
          </div>
          <Button className="bg-black text-primary font-heading text-2xl h-16 px-12 hover:bg-zinc-900 transition-all">
            FIND A STORE
          </Button>
        </div>
      </section>
    </div>
  );
}
