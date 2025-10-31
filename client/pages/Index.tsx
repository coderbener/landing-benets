import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BadgeCheck, Briefcase, GraduationCap, Users } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--brand-royal))/18,transparent_60%)]" />
      </div>

      <div className="container mx-auto py-20 md:py-28">
        <motion.h1 variants={fadeIn} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">
          Empower Your Future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--brand-royal))] to-[hsl(var(--brand-royal))]/70">BenetS</span>
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" animate="visible" className="mt-4 md:mt-6 text-center text-lg md:text-xl text-muted-foreground">
          Learn. Grow. Achieve.
        </motion.p>
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mt-8 md:mt-10 flex items-center justify-center gap-3">
          <Button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="h-12 px-8 rounded-full bg-[hsl(var(--brand-royal))] hover:bg-[hsl(var(--brand-royal))]/90 text-white">
            Join Us
          </Button>
          <Button asChild variant="ghost" className="h-12 px-8 rounded-full border border-border hover:border-foreground">
            <Link to="/login">Login</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">AI‑enhanced learning built for real careers</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            BenetS connects students to industry‑ready skills with personalized learning paths, real‑world project simulations, and verified certifications. Our platform adapts to your goals and pace to accelerate your journey from learning to employment.
          </p>
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-royal))]/15 via-background to-transparent border border-border overflow-hidden">
            <div className="absolute -right-12 -top-12 size-56 rounded-full bg-[hsl(var(--brand-royal))]/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-10 size-64 rounded-full bg-[hsl(var(--brand-gold))]/30 blur-2xl" />
            <div className="absolute inset-0 grid place-items-center">
              <GraduationCap className="size-20 text-[hsl(var(--brand-royal))]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { title: "Personalized Learning Paths", icon: GraduationCap, desc: "Tailored courses that adapt to your goals and pace." },
    { title: "Verified Certifications", icon: BadgeCheck, desc: "Industry‑recognized certificates to showcase your skills." },
    { title: "Real‑world Projects", icon: Briefcase, desc: "Hands‑on experiences designed with top employers." },
    { title: "Industry Mentorship", icon: Users, desc: "Guidance and feedback from seasoned professionals." },
  ];

  return (
    <section id="why" className="container mx-auto py-16 md:py-24">
      <motion.h3 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-2xl md:text-4xl font-bold tracking-tight">
        Why Choose BenetS
      </motion.h3>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, icon: Icon, desc }) => (
          <motion.div key={title} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="size-12 rounded-xl grid place-items-center bg-[hsl(var(--brand-royal))]/10 text-[hsl(var(--brand-royal))]">
              <Icon className="size-6" />
            </div>
            <h4 className="mt-4 font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-[hsl(var(--brand-royal))]/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const courses = [
    { title: "Product Management Foundations" },
    { title: "Data Analytics with Python" },
    { title: "Frontend Engineering Path" },
    { title: "Cybersecurity Essentials" },
    { title: "AI for Business Leaders" },
    { title: "Marketing Strategy Simulator" },
  ];

  return (
    <section id="showcase" className="container mx-auto py-16 md:py-24">
      <motion.h3 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-2xl md:text-4xl font-bold tracking-tight">
        Featured Programs
      </motion.h3>
      <div className="mt-8 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {courses.map((c) => (
            <div key={c.title} className="min-w-0 shrink-0 grow-0 basis-4/5 sm:basis-1/2 lg:basis-1/3">
              <div className="group relative aspect-[4/3] rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-[hsl(var(--brand-royal))]/15 via-background to-transparent">
                <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,hsl(var(--brand-royal))/12,transparent)]" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="rounded-xl bg-background/80 backdrop-blur border border-border p-4">
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-xs text-muted-foreground">Preview • 3–6 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });
  const items = [
    {
      quote:
        "BenetS helped me land interviews with real project experience. The mentorship was invaluable.",
      name: "Aisha, Product Analyst",
    },
    {
      quote:
        "The personalized learning paths kept me motivated. I earned a certification that employers recognized.",
      name: "Marco, Software Engineer",
    },
    {
      quote:
        "I loved the real‑world simulations. It felt like working on an actual team project.",
      name: "Sofia, Data Scientist",
    },
  ];

  return (
    <section id="testimonials" className="container mx-auto py-16 md:py-24">
      <motion.h3 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-2xl md:text-4xl font-bold tracking-tight">
        Community Stories
      </motion.h3>
      <div className="mt-8 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {items.map((t, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-2/3 lg:basis-1/2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-[hsl(var(--brand-royal))]">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinCTA() {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-[hsl(var(--background))]/40 backdrop-blur-sm">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_150px_at_10%_50%,hsl(var(--brand-royal))/12,transparent),radial-gradient(500px_200px_at_90%_50%,rgba(255,215,0,0.03),transparent)]" />
        <div className="relative p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-heading">Begin your BenetS journey</h3>
          <p className="mt-3 text-muted-foreground">
            Join BenetS to access premium programs, mentorship, and certifications.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="bg-[hsl(var(--brand-royal))] hover:bg-[hsl(var(--brand-royal))]/90 text-white">Get Started</Button>
            <Button asChild variant="outline" className="border-[hsl(var(--brand-gold))] text-[hsl(var(--brand-royal))]">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }, [location.hash]);

  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <Showcase />
      <Testimonials />
      <JoinCTA />
    </div>
  );
}
