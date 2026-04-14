import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Menu, ShoppingCart, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Drinks", path: "/drinks" },
  { name: "Promos & Gaming", path: "/promos" },
  { name: "Gear", path: "/gear" },
  { name: "Athletes & Events", path: "/athletes" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="h-8 w-8 text-primary fill-primary group-hover:scale-110 transition-transform" />
          <span className="font-heading text-3xl tracking-tighter neon-glow">VORTEX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-heading text-lg uppercase tracking-wider text-white/70 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-primary relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black">
              0
            </span>
          </Button>
          
          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white/70 hover:text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/10 p-0">
              <div className="flex flex-col gap-8 p-12 pt-24">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="font-heading text-4xl uppercase tracking-tighter text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-8 bg-primary text-black font-heading text-xl hover:bg-primary/90">
                  FIND VORTEX
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button className="hidden lg:flex bg-primary text-black font-heading text-lg hover:bg-primary/90 px-8">
            FIND VORTEX
          </Button>
        </div>
      </div>
    </nav>
  );
}
