import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Gift, Sparkles } from "lucide-react";
import { useLanguage } from "./Language";
import { SESSION_FEE_INR } from "@/lib/site";

export function StickyBottomCTA() {
  const { t } = useLanguage();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  // Don't show on checkout (/book) or thank you (/thank-you) pages
  const isExcludedPage = pathname === "/book" || pathname === "/thank-you";

  if (isExcludedPage) return null;

  return (
    <aside
      aria-label="Limited Time Healing Session Booking Offer"
      className="fixed bottom-0 inset-x-0 z-40 bg-forest-gradient border-t-2 border-gold/50 shadow-2xl py-3 px-4 sm:px-8 transition-transform duration-300 ease-out animate-in slide-in-from-bottom-full text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        {/* Left: Price & Urgent Seats Left (Matches attached reference) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-gold tracking-tight leading-none">
                ₹{SESSION_FEE_INR}
              </span>
              <span className="text-xs sm:text-sm line-through text-primary-foreground/60 font-semibold">
                ₹2,999
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-red-300 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>{t("Only 7 Seats Left")}</span>
            </div>
          </div>
        </div>

        {/* Center: Bonus Callout (Tablet & Desktop) */}
        <div className="hidden md:flex items-center gap-2 rounded-full bg-black/25 px-4 py-1.5 border border-gold/30">
          <Gift className="h-4 w-4 text-gold shrink-0 animate-bounce" />
          <span className="text-xs font-bold text-gold-soft">
            {t("Unlock Special Bonuses (₹9,999/-) Free Today")} 🎁
          </span>
        </div>

        {/* Right: Join Now Button (Matches attached reference style in site colors) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/book"
            className="btn-gold !py-2.5 !px-5 sm:!px-7 text-xs sm:text-sm font-bold shadow-gold flex items-center gap-1.5 group shrink-0"
          >
            <span>{t("Join Now")}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
