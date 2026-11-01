import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Gift,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "./Language";

const SIMPLE_BONUSES = [
  {
    num: "1",
    val: "₹2,499",
    en: "Guided Morning Manifestation & Subconscious Reset Audio Track",
    te: "మార్నింగ్ మానిఫెస్టేషన్ & సబ్‌కాన్షియస్ రీసెట్ ఆడియో ట్రాక్",
  },
  {
    num: "2",
    val: "₹2,999",
    en: "7-Chakra Balancing & Daily Energy Self-Healing Blueprint (PDF)",
    te: "7-చక్ర బ్యాలెన్సింగ్ & ఎనర్జీ సెల్ఫ్-హీలింగ్ బ్లూప్రింట్ (PDF)",
  },
  {
    num: "3",
    val: "₹1,999",
    en: "Power Breathing (Pranayama) Anxiety Relief Pocket Protocols",
    te: "పవర్ బ్రీతింగ్ & తక్షణ ఆందోళన నివారణ గైడ్",
  },
  {
    num: "4",
    val: "₹2,500",
    en: "Personal 1-on-1 Energy Assessment with Nagasri Lakshmi Prakash",
    te: "నాగశ్రీ లక్ష్మీ ప్రకాశ్ గారిచే వ్యక్తిగత 1-ఆన్-1 ఎనర్జీ విశ్లేషణ",
  },
];

export function BonusesSection() {
  const { language, t } = useLanguage();

  // Live countdown timer: 2h 45m 30s
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 45, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section id="bonuses" className="relative bg-background py-20 lg:py-24 overflow-hidden border-t border-border/80">
      {/* Decorative Glow Accents (Pure CSS radial gradients for crisp rendering) */}
      <div
        className="pointer-events-none absolute left-1/2 -top-16 -translate-x-1/2 h-[28rem] w-[46rem] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.66 0.12 75 / 0.14) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-5">
        {/* Simple & Clean Unified Offer Card */}
        <div className="reveal rounded-3xl border-2 border-gold/40 bg-card p-7 sm:p-10 shadow-gold text-center relative overflow-hidden crisp-card">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-forest/10 px-4 py-1.5 text-xs font-bold text-forest shadow-sm">
            <Gift className="h-4 w-4 text-gold animate-bounce" />
            <span>{t("Limited-Time Exclusive Bonuses")}</span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Unlock Special Bonuses{" "}
            <span className="italic text-gold-gradient font-normal">(₹9,999/- Value) 🎁</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Book your personal healing session today and unlock immediate free access to all 4 transformative wellness bonuses curated by Nagasri Lakshmi Prakash."
            )}
          </p>

          {/* Countdown Timer Box */}
          <div className="mt-8 rounded-2xl bg-forest-gradient p-5 sm:p-6 text-primary-foreground border border-gold/40 shadow-md max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-soft">
              <Clock className="h-4 w-4 text-gold animate-pulse" />
              <span>{t("Special Bonus Offer Expires In")}</span>
            </div>

            {/* Countdown Digit Blocks */}
            <div className="mt-4 flex items-center justify-center gap-3 sm:gap-6">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-xl bg-card text-primary shadow-sm border border-gold/40">
                  <span className="font-display text-2xl sm:text-3xl font-bold">
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <span className="mt-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                  {t("Hours")}
                </span>
              </div>

              <span className="font-display text-2xl sm:text-3xl font-bold text-gold -mt-5">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-xl bg-card text-primary shadow-sm border border-gold/40">
                  <span className="font-display text-2xl sm:text-3xl font-bold">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <span className="mt-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                  {t("Minutes")}
                </span>
              </div>

              <span className="font-display text-2xl sm:text-3xl font-bold text-gold -mt-5">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-xl bg-card text-gold shadow-sm border border-gold/40">
                  <span className="font-display text-2xl sm:text-3xl font-bold">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <span className="mt-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                  {t("Seconds")}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-red-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>{t("Only 7 Bonus Access Passes Left for Today's Sessions")}</span>
            </div>
          </div>

          {/* Simple Clean Bonus Points (No heavy cards below!) */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left max-w-2xl mx-auto">
            {SIMPLE_BONUSES.map((b) => (
              <div
                key={b.num}
                className="flex items-start gap-3 rounded-xl border border-border bg-background/60 p-3.5 shadow-sm"
              >
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold border border-gold/40 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Bonus #{b.num}
                    </span>
                    <span className="text-[11px] font-bold text-forest bg-forest/10 px-2 py-0.5 rounded-full border border-forest/20">
                      FREE ({b.val})
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-foreground/90 leading-snug">
                    {language === "te" ? b.te : b.en}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col items-center gap-3">
            <Link
              to="/book"
              className="btn-gold !py-3.5 !px-8 text-sm sm:text-base shadow-gold flex items-center gap-2 group font-bold"
            >
              <Sparkles className="h-4 w-4 text-accent-foreground" />
              <span>{t("Claim ₹9,999/- Bonuses & Book Session")}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" /> 100% Confidential
              </span>
              <span>•</span>
              <span>Instant Confirmation</span>
              <span>•</span>
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
