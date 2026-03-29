/* ============================================================
   HOME PAGE — Roma D'Italia
   Design: "La Dolce Vita" — Cinematic Italian Poster Style
   Sections: Hero, About, Featured Dishes, Gallery, Hours & Visit
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, MapPin, Clock, ChevronDown, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// CDN URLs
const HERO_FOOD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_hero_food-Tp58xfwVi66dkbxZUrhaeu.webp";
const PASTA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_pasta_dish-2te7QfZ3Xug98t6b9XBkUw.webp";
const PIZZA_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_pizza_dish-PZASZWGuZgReJGgSNXJvm6.webp";
const SEAFOOD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/roma_seafood_dish-3KkbYAHZGanYBTt4aQz2hf.webp";
const INTERIOR1_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/interior1_ccb6e2af.jpg";
const INTERIOR2_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/interior2_23e8c83a.jpg";
const INTERIOR3_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/interior3_ff6f84bb.jpg";
const INTERIOR4_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/interior4_512b35d7.jpg";
const INTERIOR5_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/interior5_3a28eee3.jpg";
const INTERIOR6_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/interior6_ac8ffaef.jpg";
const EXTERIOR1_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/exterior1_4bfef537.jpg";
const EXTERIOR2_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/exterior2_c3022ec7.jpg";

// Animated counter hook
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const featuredDishes = [
  {
    name: "Chicken D'Italia",
    description: "Boneless chicken breast baked with eggplant, ham, sliced tomatoes and provolone. Topped with mushrooms in a creamy white wine sauce.",
    price: "$19.95",
    category: "Chef's Specialty",
    image: INTERIOR1_URL,
  },
  {
    name: "Fettucini Prima Classe",
    description: "Fresh shrimp tossed with fettucini pasta in a creamy marinara sauce. Alfio's favorite!",
    price: "$21.95",
    category: "Fresh Seafood",
    image: SEAFOOD_URL,
  },
  {
    name: "Roma Special Pizza",
    description: "Meatball, green peppers, sausage, pepperoni, mushrooms and onions on Roma's original New York style hand thrown crust.",
    price: "from $16.45",
    category: "Specialty Pizza",
    image: PIZZA_URL,
  },
  {
    name: "Veal Sorrentino",
    description: "Fillets of veal baked with mozzarella, mushrooms, bacon, onions and olives. Teresa's favorite!",
    price: "$23.95",
    category: "Veal Entrée",
    image: INTERIOR2_URL,
  },
];

const galleryImages = [
  { src: EXTERIOR1_URL, alt: "Roma D'Italia exterior" },
  { src: INTERIOR3_URL, alt: "Cozy dining room" },
  { src: INTERIOR4_URL, alt: "Restaurant ambiance" },
  { src: INTERIOR5_URL, alt: "Warm Italian atmosphere" },
  { src: INTERIOR6_URL, alt: "Interior dining" },
  { src: EXTERIOR2_URL, alt: "Restaurant exterior" },
];

export default function Home() {
  const statsRef = useInView(0.3);
  const years = useCounter(63, 1800, statsRef.inView);
  const dishes = useCounter(80, 2000, statsRef.inView);
  const reviews = useCounter(500, 2200, statsRef.inView);

  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_FOOD_URL})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F15]/90 via-[#0D1F15]/70 to-[#0D1F15]/30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <p className="ornament text-sm mb-4 animate-fade-in">
              <span className="w-8 h-px bg-[#D4A843] inline-block" />
              Tustin, California · Est. 1961
              <span className="w-8 h-px bg-[#D4A843] inline-block" />
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-none mb-4">
              Roma<br />
              <span className="italic font-normal text-[#D4A843]">D'Italia</span>
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed mb-8 max-w-lg italic">
              "A Slice of Italian Heaven" — The Dominic Corea family has been crafting 
              authentic Italian recipes since 1961, where experience makes the difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:7145440273" className="btn-roma-red">
                Call to Order
              </a>
              <Link href="/menu" className="btn-roma-outline border-white text-white hover:bg-white hover:text-[#1A3A2A]">
                View Menu
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-[#D4A843] text-[#D4A843]" />
                ))}
              </div>
              <span className="text-white/60 text-sm font-ui">Loved by Orange County for over 60 years</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── ANNOUNCEMENT BANNER ── */}
      <div className="bg-[#1A3A2A] text-white py-3 px-4 text-center">
        <p className="font-ui text-sm tracking-wide">
          <span className="text-[#D4A843] font-semibold">Call to Order:</span>{" "}
          <a href="tel:7145440273" className="hover:text-[#D4A843] transition-colors font-medium">
            (714) 544-0273
          </a>
          <span className="mx-4 text-white/30">|</span>
          <span className="text-white/70">Lunch served weekdays until 3 PM</span>
          <span className="mx-4 text-white/30">|</span>
          <span className="text-white/70">Closed Mondays</span>
        </p>
      </div>

      {/* ── STATS ── */}
      <section ref={statsRef.ref} className="bg-[#C0392B] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display text-5xl md:text-6xl font-bold italic text-white">
                {statsRef.inView ? years : 0}+
              </div>
              <p className="font-ui text-xs tracking-widest uppercase text-white/70 mt-2">Years of Excellence</p>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl font-bold italic text-white">
                {statsRef.inView ? dishes : 0}+
              </div>
              <p className="font-ui text-xs tracking-widest uppercase text-white/70 mt-2">Menu Items</p>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl font-bold italic text-white">
                {statsRef.inView ? reviews : 0}+
              </div>
              <p className="font-ui text-xs tracking-widest uppercase text-white/70 mt-2">Happy Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={INTERIOR3_URL}
                  alt="Roma D'Italia dining room"
                  className="w-full h-64 object-cover rounded-sm shadow-lg"
                />
                <img
                  src={INTERIOR4_URL}
                  alt="Roma D'Italia interior"
                  className="w-full h-64 object-cover rounded-sm shadow-lg mt-8"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#1A3A2A] text-white p-6 rounded-sm shadow-xl">
                <div className="font-display text-4xl font-bold italic text-[#D4A843]">1961</div>
                <div className="font-ui text-xs tracking-widest uppercase text-white/70 mt-1">Est. Tustin, CA</div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:pl-8">
              <p className="ornament text-sm mb-3">
                <span className="w-8 h-px bg-[#D4A843] inline-block" />
                Our Story
              </p>
              <h2 className="font-display text-5xl font-bold text-[#1A3A2A] leading-tight mb-6">
                Tustin's Original<br />
                <span className="italic text-[#C0392B]">Italian Family</span>
              </h2>
              <p className="font-body text-base text-[#2D1B0E]/70 leading-relaxed mb-4">
                The Dominic Corea family of Roma D'Italia presents a "Slice of Italian Heaven" daily. 
                The recipes of Nina Corea still prevail. Daughters Tina and Teresa put them all together 
                with fun, finesse and expertise of a family in the business for over 60 years.
              </p>
              <p className="font-body text-base text-[#2D1B0E]/70 leading-relaxed mb-8">
                We are Tustin's first and original family-owned Italian restaurant — proud to be 
                serving you since 1961, where experience makes the difference. Every dish is crafted 
                with the same love and dedication that has kept our neighbors coming back for generations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/menu" className="btn-roma-primary">
                  Explore Our Menu
                </Link>
                <a href="#gallery" className="btn-roma-outline">
                  See the Restaurant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-24 bg-[#1A3A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="ornament text-sm mb-3 text-[#D4A843]">
              <span className="w-8 h-px bg-[#D4A843] inline-block" />
              From Our Kitchen
            </p>
            <h2 className="font-display text-5xl font-bold text-white">
              House <span className="italic text-[#D4A843]">Favorites</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="group bg-[#FAF6EE]/5 border border-white/10 rounded-sm overflow-hidden hover:border-[#D4A843]/40 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#C0392B] text-white text-xs font-ui font-medium tracking-wide uppercase px-2 py-1">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold italic text-white mb-2">{dish.name}</h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed mb-4">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-[#D4A843]">{dish.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-roma-outline border-white text-white hover:bg-white hover:text-[#1A3A2A]">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="ornament text-sm mb-3">
              <span className="w-8 h-px bg-[#D4A843] inline-block" />
              Our Space
            </p>
            <h2 className="font-display text-5xl font-bold text-[#1A3A2A]">
              The <span className="italic text-[#C0392B]">Restaurant</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-sm group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? "h-64 md:h-full" : "h-48 md:h-52"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE / TESTIMONIAL ── */}
      <section className="py-20 bg-[#C0392B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-display text-7xl text-white/20 leading-none mb-4">"</div>
          <blockquote className="font-display text-3xl md:text-4xl font-bold italic text-white leading-snug mb-6">
            Experience makes the difference — and we've been making it since 1961.
          </blockquote>
          <p className="font-ui text-sm tracking-widest uppercase text-white/60">
            — The Dominic Corea Family
          </p>
        </div>
      </section>

      {/* ── HOURS & VISIT ── */}
      <section id="visit" className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Hours */}
            <div>
              <p className="ornament text-sm mb-3">
                <span className="w-8 h-px bg-[#D4A843] inline-block" />
                When We're Open
              </p>
              <h2 className="font-display text-5xl font-bold text-[#1A3A2A] mb-8">
                Hours of <span className="italic text-[#C0392B]">Operation</span>
              </h2>

              <div className="space-y-4">
                {[
                  { days: "Sunday", hours: "11:00 AM – 9:00 PM" },
                  { days: "Tuesday – Thursday", hours: "11:00 AM – 9:00 PM" },
                  { days: "Friday & Saturday", hours: "11:00 AM – 9:30 PM" },
                  { days: "Monday", hours: "Closed", closed: true },
                ].map((item) => (
                  <div
                    key={item.days}
                    className={`flex items-center justify-between py-4 border-b border-[#1A3A2A]/10 ${
                      item.closed ? "opacity-40" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={14} className="text-[#D4A843]" />
                      <span className="font-ui text-sm font-medium text-[#1A3A2A]">{item.days}</span>
                    </div>
                    <span className={`font-body text-sm ${item.closed ? "text-[#2D1B0E]/50 italic" : "text-[#2D1B0E]"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#2D1B0E]/50 italic font-body mt-4">
                Lunch served weekdays until 3 PM
              </p>

              <div className="mt-8 p-6 bg-[#1A3A2A] rounded-sm">
                <p className="font-ui text-xs tracking-widest uppercase text-[#D4A843] mb-3">
                  Call to Place Your Order
                </p>
                <a
                  href="tel:7145440273"
                  className="font-display text-3xl font-bold italic text-white hover:text-[#D4A843] transition-colors"
                >
                  714.544.0273
                </a>
              </div>
            </div>

            {/* Map / Address */}
            <div>
              <p className="ornament text-sm mb-3">
                <span className="w-8 h-px bg-[#D4A843] inline-block" />
                Find Us
              </p>
              <h2 className="font-display text-5xl font-bold text-[#1A3A2A] mb-8">
                Our <span className="italic text-[#C0392B]">Location</span>
              </h2>

              {/* Map embed */}
              <div className="rounded-sm overflow-hidden shadow-lg mb-6 h-72">
                <iframe
                  title="Roma D'Italia Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d-117.8259!3d33.7459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7b0c5c5c5c5%3A0x0!2s611+El+Camino+Real%2C+Tustin%2C+CA+92780!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex items-start gap-3 p-5 bg-white border border-[#1A3A2A]/10 rounded-sm">
                <MapPin size={18} className="text-[#C0392B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-ui text-sm font-semibold text-[#1A3A2A]">Roma D'Italia</p>
                  <p className="font-body text-sm text-[#2D1B0E]/70">611 El Camino Real</p>
                  <p className="font-body text-sm text-[#2D1B0E]/70">Tustin, CA 92780</p>
                  <a
                    href="https://maps.google.com/?q=611+El+Camino+Real+Tustin+CA+92780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C0392B] text-xs font-ui font-medium mt-2 inline-block hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[#1A3A2A] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${HERO_FOOD_URL})` }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold italic text-white mb-4">
            Ready to <span className="text-[#D4A843]">Dine?</span>
          </h2>
          <p className="font-body text-lg text-white/70 mb-8">
            Call us to place your order or come visit us at 611 El Camino Real, Tustin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:7145440273" className="btn-roma-red">
              Call (714) 544-0273
            </a>
            <Link href="/menu" className="btn-roma-outline border-white text-white hover:bg-white hover:text-[#1A3A2A]">
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
