/* ============================================================
   FOOTER — Roma D'Italia
   Design: "La Dolce Vita" — Deep Forest Green background
   ============================================================ */

import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A2A] text-white/80">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold italic text-white">
              Roma D'Italia
            </h3>
            <p className="font-body text-sm leading-relaxed text-white/60 italic">
              "A Slice of Italian Heaven"
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Tustin's first and original family-owned Italian restaurant. 
              Proud to be serving you since 1961, where experience makes the difference.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D4A843] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#D4A843] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div className="space-y-4">
            <h4 className="font-ui text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
              Hours of Operation
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#D4A843] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Sun, Tues – Thurs</p>
                  <p className="text-white/60">11:00 AM – 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#D4A843] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Fri & Sat</p>
                  <p className="text-white/60">11:00 AM – 9:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-white/30 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/50">Closed Mondays</p>
                </div>
              </div>
              <p className="text-white/50 text-xs mt-2 italic">
                Lunch served weekdays until 3 PM
              </p>
            </div>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h4 className="font-ui text-xs font-semibold tracking-widest uppercase text-[#D4A843]">
              Find Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=611+El+Camino+Real+Tustin+CA+92780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/70 hover:text-white transition-colors"
              >
                <MapPin size={14} className="text-[#D4A843] mt-0.5 flex-shrink-0" />
                <span>611 El Camino Real<br />Tustin, CA 92780</span>
              </a>
              <a
                href="tel:7145440273"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#D4A843] flex-shrink-0" />
                <span>714.544.0273</span>
              </a>
            </div>
            <div className="pt-4">
              <a
                href="tel:7145440273"
                className="btn-roma-red inline-block"
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © Roma D'Italia. The Dominic Corea Family. All Rights Reserved.
          </p>
          <p className="text-xs text-white/30 italic font-body">
            Serving Orange County since 1961
          </p>
        </div>
      </div>
    </footer>
  );
}
