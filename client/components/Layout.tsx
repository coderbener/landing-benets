import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useCallback } from "react";

function useNavScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (id: string) => {
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      if (location.pathname !== "/") {
        navigate(`/#${id}`);
        // allow route change to complete, then scroll
        setTimeout(scroll, 0);
      } else {
        scroll();
      }
    },
    [location.pathname, navigate],
  );
}

export default function Layout() {
  const navScroll = useNavScroll();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <span className="inline-grid size-8 place-items-center rounded-md bg-gradient-to-br from-[hsl(var(--brand-royal))] to-[hsl(var(--brand-royal))]/70 text-white shadow-sm">B</span>
            <span className="">BenetS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => navScroll("about")} className="hover:text-[hsl(var(--brand-royal))] transition-colors">About</button>
            <button onClick={() => navScroll("why")} className="hover:text-[hsl(var(--brand-royal))] transition-colors">Why BenetS</button>
            <button onClick={() => navScroll("showcase")} className="hover:text-[hsl(var(--brand-royal))] transition-colors">Programs</button>
            <button onClick={() => navScroll("testimonials")} className="hover:text-[hsl(var(--brand-royal))] transition-colors">Community</button>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/login">Login</Link>
            </Button>
            <Button onClick={() => navScroll("about")} className="bg-[hsl(var(--brand-royal))] hover:bg-[hsl(var(--brand-royal))]/90 text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              Join Us
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-border bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-lg">
              <span className="inline-grid size-8 place-items-center rounded-md bg-gradient-to-br from-[hsl(var(--brand-royal))] to-[hsl(var(--brand-royal))]/70 text-white">B</span>
              BenetS
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              AI-enhanced learning for ambitious careers. Learn. Grow. Achieve.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" onClick={() => window.alert("Support portal coming soon")} className="hover:text-foreground">Help Center</Link></li>
              <li><Link to="/" onClick={() => window.alert("Status page coming soon")} className="hover:text-foreground">System Status</Link></li>
              <li><Link to="/" onClick={() => window.alert("Safety & trust coming soon")} className="hover:text-foreground">Safety & Trust</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => navScroll("showcase")} className="hover:text-foreground">Programs</button></li>
              <li><button onClick={() => navScroll("about")} className="hover:text-foreground">About BenetS</button></li>
              <li><button onClick={() => navScroll("why")} className="hover:text-foreground">Why Choose Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@benets.com" className="hover:text-foreground">hello@benets.com</a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground"><Twitter className="size-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground"><Instagram className="size-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="size-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-foreground"><Youtube className="size-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} BenetS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
