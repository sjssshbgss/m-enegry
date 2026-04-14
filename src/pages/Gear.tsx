import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  { id: 1, name: "VORTEX ICON HOODIE", price: "$65.00", category: "Apparel", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, name: "ELECTRIC LIME SNAPBACK", price: "$30.00", category: "Accessories", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "VORTEX PRO BACKPACK", price: "$85.00", category: "Gear", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, name: "TEAM VORTEX JERSEY", price: "$55.00", category: "Apparel", img: "https://images.unsplash.com/photo-1516448424116-147b59d69a62?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, name: "STAINLESS STEEL BOTTLE", price: "$35.00", category: "Accessories", img: "https://images.unsplash.com/photo-1602143399827-705204975f7f?q=80&w=1974&auto=format&fit=crop" },
  { id: 6, name: "VORTEX BEANIE", price: "$25.00", category: "Accessories", img: "https://images.unsplash.com/photo-1576871337622-98d48d43c95c?q=80&w=1974&auto=format&fit=crop" },
];

export default function Gear() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h1 className="text-7xl md:text-9xl mb-6">VORTEX GEAR</h1>
              <p className="text-xl text-muted-foreground font-sans">
                Rep the brand. High-quality apparel and accessories designed for the Vortex lifestyle.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-white/10 font-heading text-lg h-14 px-8">
                <Filter className="mr-2 h-5 w-5" /> FILTER
              </Button>
              <Button className="bg-primary text-black font-heading text-lg h-14 px-8 hover:bg-primary/90">
                LATEST DROPS
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-900 mb-6">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button variant="secondary" size="icon" className="rounded-full bg-black/50 backdrop-blur-md border-none hover:bg-primary hover:text-black">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full bg-black/50 backdrop-blur-md border-none hover:bg-primary hover:text-black">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary text-black font-heading">{product.category}</Badge>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground font-sans">PREMIUM QUALITY</p>
                  </div>
                  <span className="text-2xl font-heading text-primary">{product.price}</span>
                </div>
                <Button className="w-full mt-6 bg-white text-black font-heading text-xl h-14 hover:bg-primary transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  ADD TO CART
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="bg-primary p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 opacity-10">
              <ShoppingCart className="w-96 h-96 text-black" />
            </div>
            <div className="relative z-10 text-black max-w-xl">
              <h2 className="text-5xl md:text-7xl mb-6">FREE SHIPPING</h2>
              <p className="text-xl font-sans font-bold mb-8">On all orders over $75. Get your Vortex gear delivered straight to your door.</p>
              <Button className="bg-black text-primary font-heading text-2xl h-16 px-12 hover:bg-zinc-900">
                SHOP NOW
              </Button>
            </div>
            <div className="relative z-10 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop" 
                alt="Hoodie" 
                className="w-80 h-80 object-cover border-4 border-black shadow-2xl rotate-6"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
