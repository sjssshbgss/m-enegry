import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Drinks from "@/pages/Drinks";
import Promos from "@/pages/Promos";
import Gear from "@/pages/Gear";
import Athletes from "@/pages/Athletes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-9xl font-heading mb-4 neon-glow">404</h1>
      <h2 className="text-4xl font-heading mb-8">PAGE NOT FOUND</h2>
      <p className="text-xl text-muted-foreground mb-12 max-w-md font-sans">
        The resource you're looking for has been moved, deleted, or never existed in the Vortex.
      </p>
      <Link to="/">
        <Button className="bg-primary text-black font-heading text-2xl h-16 px-12 hover:bg-primary/90">
          RETURN TO BASE
        </Button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-black text-white selection:bg-primary selection:text-black">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/athletes" element={<Athletes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
