"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Gem,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlightData = [
  {
    icon: Gem,
    title: "Tailored Luxury",
    description:
      "Every Stallion silhouette is sketched around your space, engineered for lasting comfort.",
    badge: "Made-to-order",
    accent: "from-amber-200/80 via-amber-100 to-white",
  },
  {
    icon: ShieldCheck,
    title: "Enduring Craft",
    description:
      "Marine-grade stainless steel frames and Italian upholstery, finished by award-winning artisans.",
    badge: "Lifetime warranty",
    accent: "from-slate-900/90 via-slate-900/70 to-slate-900/40",
  },
  {
    icon: Clock,
    title: "Express Installation",
    description:
      "Dedicated concierge manages measurements, logistics, and on-site assembly in under 21 days.",
    badge: "White-glove",
    accent: "from-blue-100/70 via-white to-slate-100/60",
  },
  {
    icon: Sparkles,
    title: "Signature Finishes",
    description:
      "Curated palettes, hand-brushed metals, and couture tufting elevate every room's ambience.",
    badge: "Bespoke palette",
    accent: "from-[hsl(var(--gold))]/10 via-amber-50 to-white",
  },
];

const SignatureHighlights = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,31,63,0.08),_transparent_55%)]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="bg-[hsl(var(--gold))]/20 text-[hsl(var(--theme))]"
          >
            The Stallion Promise
          </Badge>
          <h2 className="mt-6 text-3xl font-serif text-slate-900 md:text-4xl">
            Bespoke craftsmanship refined for modern living
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            From first sketch to final installation, our concierge team orchestrates every detail so your home feels curated and complete.
          </p>
        </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlightData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="relative h-full overflow-hidden border border-[hsl(var(--gold))]/30 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`}
                  />
                  <CardHeader className="relative pb-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-inner">
                        <Icon className="h-6 w-6 text-[hsl(var(--theme))]" />
                      </div>
                      <Badge
                        variant="outline"
                        className="border-none bg-[hsl(var(--theme))]/10 text-[hsl(var(--theme))]"
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-900">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="pt-2 text-base leading-relaxed text-slate-700">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <Button
                      variant="ghost"
                      className="group px-0 text-[hsl(var(--theme))] hover:text-[hsl(var(--theme))]"
                    >
                      Discover more
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SignatureHighlights;
