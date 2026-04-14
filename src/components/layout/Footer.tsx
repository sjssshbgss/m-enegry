import { Zap, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary fill-primary" />
              <span className="font-heading text-3xl tracking-tighter">VORTEX</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Fueling the next generation of athletes, gamers, and creators with high-octane energy and zero compromises.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-6 w-6 text-white/50 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-white/50 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-white/50 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-white/50 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-6">Products</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/drinks" className="hover:text-primary transition-colors">Vortex Original</Link></li>
              <li><Link to="/drinks" className="hover:text-primary transition-colors">Vortex Ultra</Link></li>
              <li><Link to="/drinks" className="hover:text-primary transition-colors">Vortex Java</Link></li>
              <li><Link to="/drinks" className="hover:text-primary transition-colors">Vortex Juice</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/athletes" className="hover:text-primary transition-colors">Our Athletes</Link></li>
              <li><Link to="/athletes" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Get the latest drops and event news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-white/5 border border-white/10 px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors font-sans"
              />
              <button className="bg-primary text-black px-4 py-2 font-heading hover:bg-primary/90 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2024 VORTEX ENERGY COMPANY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
