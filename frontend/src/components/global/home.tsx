"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import Navigation from "../global/navigation";
import Hero from "@/components/global/hero";
import IntroVideo from "@/components/global/intro-video";
import SignatureHighlights from "@/components/global/signature-highlights";
import TestimonialsCarousel from "@/components/global/testimonials-carousel";
import Footer from "@/components/global/footer";
import { ArrowRight, Eye, Heart } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Check } from "lucide-react";
import {
  galleryImages,
  collectionImages,
  collectionSections,
  featuredProducts as initialFeaturedProducts,
} from "@/lib/data";
import { CollectionImage, Product } from "@/lib/interface";
import axios from "axios";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>(initialFeaturedProducts);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredGalleryItem, setHoveredGalleryItem] = useState<number | null>(
    null
  );
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(
    null
  );
  const [autoHoverIndex, setAutoHoverIndex] = useState<number | null>(null);
  const [autoCollectionIndex, setAutoCollectionIndex] = useState<number | null>(
    null
  );
  const [autoFeaturedIndex, setAutoFeaturedIndex] = useState<number | null>(
    null
  );
  const [expandedCollection, setExpandedCollection] = useState(false);

  // Replace these state variables with useRef to reduce rerenders
  const lastHoveredGalleryTimeRef = useRef<number>(0);
  const lastHoveredCollectionTimeRef = useRef<number>(0);
  const lastHoveredProductTimeRef = useRef<number>(0);

  const galleryRef = useRef(null);
  const galleryHeadingRef = useRef(null);
  const galleryControls = useAnimation();
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const [quickViewProduct, setQuickViewProduct] =
    useState<CollectionImage | null>(null);
  const [addingToCart, setAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addingToWishlist, setAddingToWishlist] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get("/api/products?featured=true");
        if (response.data.products && response.data.products.length > 0) {
          // Map API products to the format expected by the component
          const mappedProducts = response.data.products.map((p: any) => ({
            id: p._id,
            name: p.name,
            price: typeof p.price === 'number' ? `₹${p.price.toLocaleString()}` : p.price,
            image: p.image,
            category: p.category,
            link: `/products/${p._id}`, // Assuming we have a product page
          }));
          setFeaturedProducts(mappedProducts);
        }
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Optimize the floating elements animation to reduce performance impact
  useEffect(() => {
    if (!floatingElementsRef.current) return;

    // Create fewer floating elements (reduced from 8 to 4)
    const elements =
      floatingElementsRef.current.querySelectorAll(".floating-element");

    // Use requestAnimationFrame for better performance
    let rafId: number;
    let lastUpdateTime = 0;

    const animateElements = (timestamp: number) => {
      // Only update every 50ms (20fps) instead of every frame
      if (timestamp - lastUpdateTime >= 50) {
        lastUpdateTime = timestamp;

        elements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement;
          const randomX = Math.random() * 100 - 50;
          const randomY = Math.random() * 100 - 50;

          htmlElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
      }

      rafId = requestAnimationFrame(animateElements);
    };

    rafId = requestAnimationFrame(animateElements);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Optimize auto hover effect with less frequent updates
  useEffect(() => {
    // Gallery auto-hover - decreased frequency from 1000ms to 3000ms
    const galleryInterval = setInterval(() => {
      const now = Date.now();
      // Only update if there's no manual hover or if it's been more than 3s
      if (
        hoveredGalleryItem === null ||
        now - lastHoveredGalleryTimeRef.current > 3000
      ) {
        setAutoHoverIndex((prevIndex) => {
          if (prevIndex === null) return 0;
          return (prevIndex + 1) % galleryImages.length;
        });
      }
    }, 3000);

    // Collections auto-hover - decreased frequency from 800ms to 2000ms
    const collectionsInterval = setInterval(() => {
      const now = Date.now();
      // Only update if there's no manual hover or if it's been more than 3s
      if (
        hoveredCollection === null ||
        now - lastHoveredCollectionTimeRef.current > 3000
      ) {
        setAutoCollectionIndex((prevIndex) => {
          if (prevIndex === null) return 0;
          return (prevIndex + 1) % collectionSections.length;
        });
      }
    }, 2000);

    // Featured Products auto-hover - decreased frequency from 1500ms to 2500ms
    const featuredInterval = setInterval(() => {
      const now = Date.now();
      // Only update if there's no manual hover or if it's been more than 3s
      if (
        hoveredProduct === null ||
        now - lastHoveredProductTimeRef.current > 3000
      ) {
        setAutoFeaturedIndex((prevIndex) => {
          if (prevIndex === null) return 0;
          return (prevIndex + 1) % featuredProducts.length;
        });
      }
    }, 2500);

    return () => {
      clearInterval(galleryInterval);
      clearInterval(collectionsInterval);
      clearInterval(featuredInterval);
    };
  }, [hoveredGalleryItem, hoveredCollection, hoveredProduct]);

  // Optimize hover tracking with useRef instead of state updates
  useEffect(() => {
    if (hoveredGalleryItem !== null) {
      lastHoveredGalleryTimeRef.current = Date.now();
    }
  }, [hoveredGalleryItem]);

  useEffect(() => {
    if (hoveredCollection !== null) {
      lastHoveredCollectionTimeRef.current = Date.now();
    }
  }, [hoveredCollection]);

  useEffect(() => {
    if (hoveredProduct !== null) {
      lastHoveredProductTimeRef.current = Date.now();
    }
  }, [hoveredProduct]);

  // Control gallery animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          galleryControls.start("visible");
        }
      },
      { threshold: 0.25 }
    );

    const section = galleryRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [galleryControls]);

  // Add this function to handle quick add to cart
  const handleQuickAddToCart = () => {
    setAddingToCart(true);

    // Simulate API call delay
    setTimeout(() => {
      setAddingToCart(false);
      setAddedToCart(true);

      // Reset added status after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }, 1000);
  };

  // Add this function to handle quick add to wishlist
  const handleQuickAddToWishlist = () => {
    setAddingToWishlist(true);

    // Simulate API call delay
    setTimeout(() => {
      setAddingToWishlist(false);
      setAddedToWishlist(true);

      // Reset added status after 3 seconds
      setTimeout(() => {
        setAddedToWishlist(false);
      }, 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Intro Video - plays once per session */}
      <IntroVideo onComplete={() => console.log("Intro video completed")} />
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>

      <div
        ref={floatingElementsRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Reduced number of floating elements from 8 to 4 */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="floating-element absolute rounded-full bg-gold/5 blur-xl"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
            }}
          ></div>
        ))}
      </div>

      <Navigation />
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Our finest selection of premium furniture pieces, crafted with
              excellence and designed for your comfort.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
                animate={{
                  y:
                    hoveredProduct === index || autoFeaturedIndex === index
                      ? -8
                      : 0,
                  scale:
                    hoveredProduct === index || autoFeaturedIndex === index
                      ? 1.02
                      : 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <Link href={product.link}>
                  <div className="relative overflow-hidden rounded-lg mb-4 shadow-md">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[350px] object-cover"
                      animate={{
                        scale:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 1.08
                            : 1,
                        filter:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? "brightness(0.9)"
                            : "brightness(1)",
                      }}
                      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    />

                    {/* Gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      animate={{
                        opacity:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 0.7
                            : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    ></motion.div>

                    <div className="absolute top-4 left-4">
                      <motion.span
                        className="inline-block bg-gold text-white text-xs py-1.5 px-3 rounded-full font-semibold tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity:
                            hoveredProduct === index ||
                              autoFeaturedIndex === index
                              ? 1
                              : 0,
                          x:
                            hoveredProduct === index ||
                              autoFeaturedIndex === index
                              ? 0
                              : -20,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {product.category}
                      </motion.span>
                    </div>

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{
                          scale:
                            hoveredProduct === index ||
                              autoFeaturedIndex === index
                              ? 1
                              : 0.8,
                        }}
                        transition={{ duration: 0.4 }}
                        className="flex space-x-3"
                      >
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300 shadow-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300 shadow-lg">
                          <Heart className="w-4 h-4" />
                        </button>
                      </motion.div>
                    </motion.div>

                    {/* Product information for quick view */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 1
                            : 0,
                        y:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 0
                            : 20,
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                      <p className="text-white/90 font-medium">
                        {product.price}
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex justify-between items-center group">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-gold transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {product.price}
                      </p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0.5, scale: 0.8, x: -10 }}
                      animate={{
                        opacity:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 1
                            : 0.5,
                        scale:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 1
                            : 0.8,
                        x:
                          hoveredProduct === index ||
                            autoFeaturedIndex === index
                            ? 0
                            : -10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gold hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SignatureHighlights />

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-16 md:py-24 bg-zinc-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            ref={galleryHeadingRef}
            initial="hidden"
            animate={galleryControls}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Our Collections
            </h2>
            <p className="text-lg text-gray-600">
              Explore our stunning product range designed with exceptional
              craftsmanship and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
            {galleryImages.map((image, index) => (
              <div key={image.id}>
                <motion.div
                  className="relative w-full h-full overflow-hidden group rounded-lg shadow-md"
                  style={{ gridArea: image.gridArea }}
                  onMouseEnter={() => setHoveredGalleryItem(index)}
                  onMouseLeave={() => setHoveredGalleryItem(null)}
                  animate={{
                    y:
                      hoveredGalleryItem === index || autoHoverIndex === index
                        ? -12
                        : 0,
                    scale:
                      hoveredGalleryItem === index || autoHoverIndex === index
                        ? 1.05
                        : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Overlay gradient - more pronounced */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"
                    animate={{
                      opacity:
                        hoveredGalleryItem === index || autoHoverIndex === index
                          ? 0.95
                          : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    animate={{
                      scale:
                        hoveredGalleryItem === index || autoHoverIndex === index
                          ? 1.15
                          : 1,
                    }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  />

                  {/* Product information - more pronounced animations */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20 transition-all duration-300"
                    initial={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category badge - more pronounced */}
                    {image.category && (
                      <motion.span
                        className="text-white/90 text-sm mb-3 inline-block bg-gradient-to-r from-gold via-yellow-400 to-gold px-3 py-1 rounded-full w-fit font-semibold tracking-wide"
                        animate={{
                          opacity:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? 1
                              : 0,
                          y:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? 0
                              : 20,
                          scale:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? 1.05
                              : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {image.category}
                      </motion.span>
                    )}

                    {/* Description - faster animation */}
                    <motion.p
                      className="text-white/90 text-base md:text-lg max-w-[95%] font-medium leading-snug mb-3"
                      animate={{
                        opacity:
                          hoveredGalleryItem === index ||
                            autoHoverIndex === index
                            ? 1
                            : 0,
                        y:
                          hoveredGalleryItem === index ||
                            autoHoverIndex === index
                            ? 0
                            : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Explore our premium {image.category?.toLowerCase()}{" "}
                      collection crafted with precision and elegance for your
                      home.
                    </motion.p>

                    {/* Title - more pronounced effect */}
                    <motion.div
                      className="relative overflow-visible"
                      animate={{
                        y:
                          hoveredGalleryItem === index ||
                            autoHoverIndex === index
                            ? -8
                            : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3
                        className="text-white text-xl md:text-2xl font-extrabold mb-1 transition-all duration-300 px-1"
                        style={{
                          textShadow:
                            "0px 1px 3px rgba(0,0,0,0.8), 0px 2px 4px rgba(0,0,0,0.7)",
                          WebkitTextStroke: "0.5px rgba(0,0,0,0.3)",
                        }}
                        animate={{
                          scale:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? 1.1
                              : 1,
                          textShadow:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? "0 0 15px rgba(212, 175, 55, 0.8), 0 0 25px rgba(0,0,0,0.5)"
                              : "0px 1px 3px rgba(0,0,0,0.8), 0px 2px 4px rgba(0,0,0,0.7)",
                          WebkitTextStroke:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? "1px rgba(212, 175, 55, 0.4)"
                              : "0.5px rgba(0,0,0,0.3)",
                        } as any}
                        transition={{ duration: 0.3 }}
                      >
                        {image.alt}
                      </motion.h3>
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
                        animate={{
                          scaleX:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? 1
                              : 0.3,
                          opacity:
                            hoveredGalleryItem === index ||
                              autoHoverIndex === index
                              ? 1
                              : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Collections Section */}
      < section className="py-20 bg-white relative" >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif mb-4 text-gray-900"
            >
              Our Collections
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-0.5 w-24 bg-gold mx-auto"
            ></motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collectionSections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCollection(idx)}
                onMouseLeave={() => setHoveredCollection(null)}
                animate={{
                  y:
                    hoveredCollection === idx || autoCollectionIndex === idx
                      ? -8
                      : 0,
                  scale:
                    hoveredCollection === idx || autoCollectionIndex === idx
                      ? 1.02
                      : 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {section.image && (
                  <div className="h-48 overflow-hidden relative group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
                      animate={{
                        opacity:
                          hoveredCollection === idx ||
                            autoCollectionIndex === idx
                            ? 0.85
                            : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale:
                          hoveredCollection === idx ||
                            autoCollectionIndex === idx
                            ? 1.1
                            : 1,
                      }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    />
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-6 z-20"
                      animate={{
                        opacity:
                          hoveredCollection === idx ||
                            autoCollectionIndex === idx
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.h3
                        className="text-white text-2xl font-bold mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {section.title}
                      </motion.h3>
                      {section.subtitle && (
                        <motion.p
                          className="text-gold/90 text-lg font-medium mb-3"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {section.subtitle}
                        </motion.p>
                      )}
                      {section.description && (
                        <motion.p
                          className="text-white/90 text-base font-medium"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {section.description}
                        </motion.p>
                      )}
                      <motion.ul
                        className="flex flex-wrap gap-2 mt-3"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {section.items.slice(0, 3).map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="text-white/80 text-sm px-2 py-1 bg-black/30 rounded-md"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                        {section.items.length > 3 && (
                          <motion.li
                            className="text-white/80 text-sm px-2 py-1 bg-black/30 rounded-md"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            +{section.items.length - 3} more
                          </motion.li>
                        )}
                      </motion.ul>
                    </motion.div>
                  </div>
                )}
                <div className="p-8">
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <motion.li
                        key={item}
                        className="flex items-center space-x-2 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 + itemIdx * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-gold"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + itemIdx * 0.1,
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.5,
                            backgroundColor: "#D4AF37",
                          }}
                        ></motion.span>
                        <a
                          href="#"
                          className="text-gray-800 hover:text-gold transition-colors flex items-center group-hover/item:translate-x-1 font-medium"
                        >
                          <span className="relative">
                            {item}
                            <motion.span
                              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            ></motion.span>
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collection Images Row */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Browse Collection Images
              </h3>
              <div className="h-0.5 w-16 bg-gold"></div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onMouseEnter={() => setExpandedCollection(true)}
              onMouseLeave={() => setExpandedCollection(false)}
            >
              {/* First row - always visible */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                {collectionImages.slice(0, 6).map((image, idx) => (
                  <motion.div
                    key={image.id}
                    className="relative group overflow-hidden rounded-lg shadow-md h-[180px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.03 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-sm font-bold">{image.alt}</h4>
                          {image.category && (
                            <span className="text-xs bg-gold/80 px-2 py-0.5 rounded-full inline-block mt-1">
                              {image.category}
                            </span>
                          )}
                        </div>
                        {image.price && (
                          <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                            {image.price}
                          </span>
                        )}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="w-full bg-white text-gray-900 px-3 py-1.5 text-xs font-bold rounded shadow-md hover:bg-gold hover:text-white transition-colors"
                            onClick={() => setQuickViewProduct(image)}
                          >
                            Quick View
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-white">
                          <DialogHeader className="p-6 pb-0">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <DialogTitle className="text-xl font-serif">
                                  {quickViewProduct?.alt}
                                </DialogTitle>
                                <DialogDescription className="text-sm text-gold font-medium">
                                  {quickViewProduct?.category}
                                </DialogDescription>
                              </div>
                              <DialogClose className="bg-white/80 rounded-full p-1 hover:bg-gray-100">
                                <X className="h-4 w-4" />
                              </DialogClose>
                            </div>
                          </DialogHeader>
                          <div className="px-6 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="relative rounded-md overflow-hidden h-[220px]">
                                <img
                                  src={quickViewProduct?.src}
                                  alt={quickViewProduct?.alt}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="mb-3">
                                  <span className="text-lg font-bold block mb-1">
                                    {quickViewProduct?.price}
                                  </span>
                                  <p className="text-sm text-gray-600">
                                    {quickViewProduct?.description}
                                  </p>
                                </div>
                                <div className="flex gap-2 mt-6">
                                  <Button
                                    onClick={handleQuickAddToCart}
                                    className="flex-1 bg-gold hover:bg-gold/90 text-white"
                                  >
                                    {addingToCart ? (
                                      <span className="flex items-center gap-2">
                                        <svg
                                          className="animate-spin h-4 w-4 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                        >
                                          <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                          ></circle>
                                          <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                          ></path>
                                        </svg>
                                        Adding...
                                      </span>
                                    ) : addedToCart ? (
                                      <span className="flex items-center gap-2">
                                        <Check className="h-4 w-4" />
                                        Added!
                                      </span>
                                    ) : (
                                      <span className="flex items-center gap-2">
                                        <ShoppingCart className="h-4 w-4" />
                                        Add to Cart
                                      </span>
                                    )}
                                  </Button>
                                  <Button
                                    onClick={handleQuickAddToWishlist}
                                    variant="outline"
                                    className="px-3"
                                  >
                                    {addingToWishlist ? (
                                      <svg
                                        className="animate-spin h-4 w-4 text-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                      >
                                        <circle
                                          className="opacity-25"
                                          cx="12"
                                          cy="12"
                                          r="10"
                                          stroke="currentColor"
                                          strokeWidth="4"
                                        ></circle>
                                        <path
                                          className="opacity-75"
                                          fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                      </svg>
                                    ) : addedToWishlist ? (
                                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                                    ) : (
                                      <Heart className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>
                                <div className="mt-4">
                                  <Link
                                    href={`/product/elegant-modern-sofa`}
                                    className="text-sm text-gold hover:underline"
                                  >
                                    View full details →
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Expandable content - only visible on hover or when expanded */}
              <AnimatePresence>
                {expandedCollection && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {collectionImages.slice(6).map((image, idx) => (
                        <motion.div
                          key={image.id}
                          className="relative group overflow-hidden rounded-lg shadow-md h-[180px]"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          whileHover={{ y: -5, scale: 1.03 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="text-sm font-bold">
                                  {image.alt}
                                </h4>
                                {image.category && (
                                  <span className="text-xs bg-gold/80 px-2 py-0.5 rounded-full inline-block mt-1">
                                    {image.category}
                                  </span>
                                )}
                              </div>
                              {image.price && (
                                <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                                  {image.price}
                                </span>
                              )}
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <button
                                  className="w-full bg-white text-gray-900 px-3 py-1.5 text-xs font-bold rounded shadow-md hover:bg-gold hover:text-white transition-colors"
                                  onClick={() => setQuickViewProduct(image)}
                                >
                                  Quick View
                                </button>
                              </DialogTrigger>
                            </Dialog>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Show More Button */}
              <motion.div
                className="flex justify-center mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => setExpandedCollection(!expandedCollection)}
                  className="group bg-white px-6 py-2 rounded-full border border-gold text-gold font-medium hover:bg-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{expandedCollection ? "Show Less" : "Show More"}</span>
                  <motion.div
                    animate={{ rotate: expandedCollection ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section >

      <TestimonialsCarousel />

      {/* Call to Action with floating animation */}
      <section className="py-20 bg-gray-50 overflow-hidden relative">
        {/* Animated decorative elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gold/5 blur-lg"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold/5 blur-lg"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto text-center px-4 relative"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-gold/10"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold/10"
          ></motion.div>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6 relative"
            style={{ fontFamily: "Mistral" }}
          >
            Customize Your Dream
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 relative"
          >
            Let our master craftsmen create your perfect piece with premium
            materials and expert craftsmanship
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-white px-8 py-3 rounded-md hover:bg-gold/90 transition-all duration-300 relative"
          >
            Get a Custom Quote
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div >
  );
};

export default Index;
