"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Isha Kapoor",
    initials: "IK",
    title: "Creative Director, Kapoor Atelier",
    quote:
      "Stallion transformed our penthouse into a gallery of modern heirlooms. The team anticipated every detail, from bespoke finishes to delivery logistics.",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    title: "Founder, Arcline Ventures",
    quote:
      "The stainless steel framing is architectural poetry. Six months on, everything still looks as immaculate as install day—no creaks, no patina, just pure sheen.",
  },
  {
    name: "Priya Desai",
    initials: "PD",
    title: "Interior Stylist",
    quote:
      "My clients love how the modular sofas adapt to their entertaining routines. Stallion's concierge even scheduled styling sessions for accessories—unmatched service.",
  },
  {
    name: "Nikhil Sharma",
    initials: "NS",
    title: "Film Producer",
    quote:
      "Their design lab helped visualize every vignette in 3D before production. We signed off remotely and the execution was flawless within three weeks.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[hsl(var(--theme))]">
            Client Reveries
          </p>
          <h2 className="mt-4 text-3xl font-serif text-slate-900 md:text-4xl">
            Stories of crafted comfort
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
            Hear from homeowners and designers who invite Stallion into their most personal spaces.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="flex h-full flex-col justify-between border-none bg-white/80 backdrop-blur shadow-lg shadow-slate-200/70 ring-1 ring-slate-200/60">
                    <CardHeader>
                      <Avatar className="h-12 w-12 bg-[hsl(var(--theme))]/10">
                        <AvatarFallback className="text-[hsl(var(--theme))]">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <p className="mt-6 text-lg leading-relaxed text-slate-700">
                        “{testimonial.quote}”
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <h3 className="text-base font-semibold text-slate-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-slate-500">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
