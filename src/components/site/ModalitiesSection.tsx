import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Flower2,
  Hand,
  Sun,
  Orbit,
  CircleDot,
  HeartHandshake,
  Leaf,
  Wind,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "./Language";

export interface ModalityItem {
  id: string;
  en: string;
  te: string;
  subtitleEn: string;
  subtitleTe: string;
  eyebrowEn: string;
  eyebrowTe: string;
  descEn: string;
  descTe: string;
  tagsEn: string[];
  tagsTe: string[];
  Icon: any;
  accentBg: string;
  accentColor: string;
}

export const MODALITIES_DATA: ModalityItem[] = [
  {
    id: "manifestation",
    en: "Manifestation",
    te: "మానిఫెస్టేషన్",
    subtitleEn: "Set Meaningful Intentions",
    subtitleTe: "సానుకూల సంకల్ప శక్తి",
    eyebrowEn: "MINDSET & GOAL REALIZATION",
    eyebrowTe: "సానుకూల ఆలోచన & సంకల్పం",
    descEn: "Learn to align conscious thoughts, emotional frequency, and subconscious beliefs to manifest personal growth, harmony, and abundance in your daily life.",
    descTe: "మీలోని ఆలోచనలు, సంకల్పాలు మరియు నమ్మకాలను అనుసంధానించి జీవితంలో సంతోషం, ప్రశాంతత మరియు సమృద్ధిని ఆకర్షించే మార్గాన్ని నేర్చుకోండి.",
    tagsEn: ["Intentional Focus", "Positive Vibration", "Subconscious Reset"],
    tagsTe: ["సచేతన దృష్టి", "సానుకూల తరంగాలు", "అంతర్గత శక్తి"],
    Icon: Sparkles,
    accentBg: "rgba(212, 160, 23, 0.14)",
    accentColor: "#D4A017",
  },
  {
    id: "meditation",
    en: "Mindful Meditation",
    te: "ధ్యాన అభ్యాసాలు",
    subtitleEn: "Quietness & Inner Presence",
    subtitleTe: "అంతర్గత నిశ్శబ్దం & ప్రశాంతత",
    eyebrowEn: "MINDFULNESS & STILLNESS",
    eyebrowTe: "ధ్యానం & మానసిక ప్రశాంతత",
    descEn: "Gentle guided meditation practices that silence mental clutter, release anxious thoughts, and anchor your heart in deep stillness and grounded peace.",
    descTe: "ఆలోచనల రద్దీని తగ్గించి, అంతర్గత ప్రశాంతతను అనుభవించడానికి సులభమైన మరియు ప్రభావవంతమైన మార్గదర్శక ధ్యాన పద్ధతులు.",
    tagsEn: ["Mental Clarity", "Stress Dissolution", "Quiet Center"],
    tagsTe: ["స్పష్టమైన ఆలోచన", "ఒత్తిడి నివారణ", "శాంతమైన మనస్సు"],
    Icon: Flower2,
    accentBg: "rgba(43, 90, 68, 0.14)",
    accentColor: "#2B5A44",
  },
  {
    id: "eft-tapping",
    en: "EFT Tapping",
    te: "EFT ట్యాపింగ్",
    subtitleEn: "Emotional Freedom Technique",
    subtitleTe: "భావోద్వేగ విముక్తి పద్ధతి",
    eyebrowEn: "EMOTIONAL BALANCE & HEALING",
    eyebrowTe: "భావోద్వేగ సమతుల్యత",
    descEn: "A scientifically supported somatic technique combining acupressure tapping with mindfulness to relieve anxiety, old fears, and stagnant emotions rapidly.",
    descTe: "శరీరంలోని ఆక్యుప్రెజర్ పాయింట్లను సున్నితంగా తాకడం ద్వారా భయాలు, ఒత్తిడి మరియు భావోద్వేగ ఆటంకాలను సులభంగా దూరం చేసే పద్ధతి.",
    tagsEn: ["Trauma Relief", "Anxiety Ease", "Emotional Reset"],
    tagsTe: ["భావోద్వేగ ఉపశమనం", "ఆందోళన నివారణ", "శక్తి సమతుల్యం"],
    Icon: Hand,
    accentBg: "rgba(180, 120, 30, 0.14)",
    accentColor: "#B4781E",
  },
  {
    id: "reiki-healing",
    en: "Reiki Healing",
    te: "రేకీ హీలింగ్",
    subtitleEn: "Universal Life Energy",
    subtitleTe: "సార్వత్రిక జీవ శక్తి",
    eyebrowEn: "ENERGY RESTORATION & CALM",
    eyebrowTe: "శక్తి పునరుద్ధరణ",
    descEn: "Channeling gentle, revitalizing universal life force energy to ease bodily tension, accelerate natural recovery, and cultivate peaceful cellular renewal.",
    descTe: "విశ్వ శక్తి తరంగాల ద్వారా అలసటను తొలగించి, శరీర మరియు మనస్సులోని ప్రతి కణాన్ని నూతన శక్తితో నింపే సున్నితమైన హీలింగ్ పద్ధతి.",
    tagsEn: ["Vitality Boost", "Deep Relaxation", "Natural Recovery"],
    tagsTe: ["నూతన ఉత్తేజం", "గాఢ విశ్రాంతి", "సహజ రికవరీ"],
    Icon: Sun,
    accentBg: "rgba(220, 150, 20, 0.15)",
    accentColor: "#DC9614",
  },
  {
    id: "pranic-healing",
    en: "Pranic Healing",
    te: "ప్రానిక్ హీలింగ్",
    subtitleEn: "Prana & Aura Cleansing",
    subtitleTe: "ప్రాణ శక్తి & ఆరా శుద్ధి",
    eyebrowEn: "BIOPLASMIC ENERGY SYSTEM",
    eyebrowTe: "ప్రాణశక్తి వ్యవస్థ",
    descEn: "No-touch energy healing utilizing the body's innate prana to cleanse congested energy, recharge depleted meridians, and restore holistic well-being.",
    descTe: "శరీరాన్ని తాకకుండానే ప్రాణ శక్తితో అపరిశుద్ధ శక్తులను తొలగించి, నూతన శక్తిని నింపే ప్రాచీన మరియు శక్తివంతమైన హీలింగ్ విధానం.",
    tagsEn: ["Aura Cleansing", "Energy Balance", "No-Touch Healing"],
    tagsTe: ["ఆరా పరిశుద్ధి", "శక్తి సమతుల్యత", "స్పర్శ రహిత చికిత్స"],
    Icon: Orbit,
    accentBg: "rgba(35, 100, 75, 0.14)",
    accentColor: "#23644B",
  },
  {
    id: "chakra-healing",
    en: "Chakra Healing",
    te: "చక్ర హీలింగ్",
    subtitleEn: "Inner Vortex Rejuvenation",
    subtitleTe: "చక్రాల ఉత్తేజితం",
    eyebrowEn: "7 ENERGY CENTRES",
    eyebrowTe: "7 శక్తి కేంద్రాలు",
    descEn: "Focused energy work across the 7 foundational chakras—root, sacral, solar plexus, heart, throat, third eye, and crown—to unlock harmony and power.",
    descTe: "మూలాధారం నుండి సహస్రారం వరకు ఉన్న 7 ప్రధాన శక్తి కేంద్రాలను శుభ్రపరచి, అంతర్గత సామరస్యాన్ని పునరుద్ధరించే ప్రత్యేక సాధన.",
    tagsEn: ["Root to Crown", "Vibrational Alignment", "Core Power"],
    tagsTe: ["7 చక్రాల శుద్ధి", "అంతర్గత స్థిరత్వం", "శక్తి వికాసం"],
    Icon: CircleDot,
    accentBg: "rgba(185, 125, 45, 0.14)",
    accentColor: "#B97D2D",
  },
  {
    id: "chakra-balancing",
    en: "Chakra Balancing",
    te: "చక్ర బ్యాలెన్సింగ్",
    subtitleEn: "Harmonizing Energetic Flow",
    subtitleTe: "శక్తి ప్రవాహ సమన్వయం",
    eyebrowEn: "EQUILIBRIUM & ALIGNMENT",
    eyebrowTe: "సమన్వయం & సమతుల్యత",
    descEn: "Harmonizing overactive or blocked chakras so your physical stamina, emotional clarity, and spiritual intuition flow smoothly in perfect sync.",
    descTe: "అసమతుల్యమైన చక్రాలను తిరిగి సమాంతరంగా మార్చి మానసిక స్పష్టత, శారీరక దృఢత్వం మరియు ఆధ్యాత్మిక అనుసంధానాన్ని అందించడం.",
    tagsEn: ["Emotional Grace", "Grounded Calm", "Inner Alignment"],
    tagsTe: ["భావోద్వేగ సమతుల్యత", "స్థిరమైన ప్రశాంతత", "సమన్వయం"],
    Icon: HeartHandshake,
    accentBg: "rgba(43, 90, 68, 0.14)",
    accentColor: "#2B5A44",
  },
  {
    id: "natural-healing",
    en: "Natural Healing Modalities",
    te: "సహజ హీలింగ్ పద్ధతులు",
    subtitleEn: "Nature-Inspired Wellness",
    subtitleTe: "ప్రకృతి ఆధారిత జీవనశైలి",
    eyebrowEn: "HOLISTIC LIFESTYLE INTEGRATION",
    eyebrowTe: "సహజ జీవన విధానం",
    descEn: "Gentle daily wellness practices, grounding rituals, and mindful rhythms rooted in ancient Indian natural healing to maintain enduring wellness.",
    descTe: "ప్రకృతి నియమాలకు అనుగుణంగా ఆహార విహారాలు, జీవనశైలి మార్పులు మరియు సహజ అభ్యాసాల ద్వారా సంపూర్ణ ఆరోగ్యాన్ని సాధించడం.",
    tagsEn: ["Grounding Rituals", "Daily Vitality", "Wholesome Living"],
    tagsTe: ["ప్రకృతి సంబంధం", "ఆరోగ్యకర జీవనం", "నిత్యోత్సాహం"],
    Icon: Leaf,
    accentBg: "rgba(50, 115, 80, 0.14)",
    accentColor: "#327350",
  },
  {
    id: "power-breathing",
    en: "Power Breathing (Pranayama)",
    te: "పవర్ బ్రీతింగ్ & ప్రాణాయామం",
    subtitleEn: "Breath, Reset & Recharge",
    subtitleTe: "శ్వాసతో నూతన శక్తి",
    eyebrowEn: "PRANIC BREATH REGULATION",
    eyebrowTe: "శ్వాసాభ్యాసాలు & ప్రాణాయామం",
    descEn: "Structured breathwork practices to instantly reduce sympathetic nervous system tension, oxygenate the brain, and re-energize your mind and body.",
    descTe: "నియమబద్ధమైన శ్వాస పద్ధతుల ద్వారా నాడీ వ్యవస్థను శాంతింపజేసి, మెదడుకు ఆక్సిజన్ అందించి అలసటను తక్షణమే పోగొట్టే అద్భుత ప్రక్రియ.",
    tagsEn: ["Nervous System Calm", "Instant Recharge", "Oxygen Boost"],
    tagsTe: ["నాడీ వ్యవస్థ శాంతి", "తక్షణ శక్తి", "శ్వాస నియంత్రణ"],
    Icon: Wind,
    accentBg: "rgba(195, 140, 30, 0.15)",
    accentColor: "#C38C1E",
  },
];

export function ModalitiesSection() {
  const { language, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>("manifestation");

  return (
    <section id="modalities" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Background Soft Glows (pure CSS radial gradients with zero blur filter for crisp rendering) */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.66 0.12 75 / 0.14) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, oklch(0.38 0.09 145 / 0.12) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section Header (Certigo Style: Decorative lines + Eyebrow + Playfair Serif Heading) */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span>{t("Ancient Wisdom · Modern Energy Balancing")}</span>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 sm:w-16 bg-gold/50 inline-block" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gold">
              {t("My Healing Modalities")}
            </span>
            <span className="h-0.5 w-10 sm:w-16 bg-gold/50 inline-block" />
          </div>

          <h2 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl lg:text-6xl leading-tight">
            {t("Explore the Power of Holistic Healing")}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            {t("Personalized healing paths to restore your vitality, inner calm, and family happiness.")}
          </p>
        </div>

        {/* Quick Modality Quick Select Badges (Responsive Wrap, Zero cut off, 100% crisp typography) */}
        <div className="reveal mt-10 max-w-5xl mx-auto px-2">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {MODALITIES_DATA.map((item) => {
              const title = language === "te" ? item.te : item.en;
              const subtitle = language === "te" ? item.subtitleTe : item.subtitleEn;
              const Icon = item.Icon;
              const isSelected = selectedId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(item.id);
                    const el = document.getElementById(`modality-card-${item.id}`);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`group flex items-center gap-3 rounded-2xl border px-4 py-2.5 text-left transition-all duration-200 ease-out flex-1 min-w-[210px] max-w-[280px] sm:min-w-[230px] ${
                    isSelected
                      ? "border-gold bg-card shadow-gold ring-2 ring-gold/50 -translate-y-0.5"
                      : "border-border bg-card hover:border-gold/50 hover:shadow-sm hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-200"
                    style={{ backgroundColor: item.accentBg, color: item.accentColor }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-bold text-primary leading-tight truncate">
                      {title}
                    </h4>
                    <p className="text-[11px] font-medium text-muted-foreground leading-tight mt-0.5 truncate">
                      {subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rich Service Cards Grid (Certigo layout, Smooth hover, Stable height, Zero layout jitter) */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MODALITIES_DATA.map((item, idx) => {
            const title = language === "te" ? item.te : item.en;
            const eyebrow = language === "te" ? item.eyebrowTe : item.eyebrowEn;
            const desc = language === "te" ? item.descTe : item.descEn;
            const tags = language === "te" ? item.tagsTe : item.tagsEn;
            const Icon = item.Icon;
            const isHighlighted = selectedId === item.id;

            return (
              <div
                key={item.id}
                id={`modality-card-${item.id}`}
                className={`reveal group flex flex-col justify-between rounded-3xl border bg-card shadow-soft transition-all duration-300 ease-out hover:border-gold hover:shadow-2xl hover:ring-2 hover:ring-gold/30 crisp-card overflow-hidden ${
                  isHighlighted ? "border-gold ring-2 ring-gold/60 shadow-gold" : "border-border hover:border-gold/50"
                }`}
                style={{ transitionDelay: `${(idx % 3) * 60}ms` }}
              >
                <div>
                  {/* Card Media Header with Gradient Aura Banner & Floating Icon Ring */}
                  <div className="relative h-44 w-full overflow-hidden bg-forest-gradient p-6 flex flex-col justify-between">
                    {/* Decorative subtle mandala circles (static to prevent continuous GPU redraws) */}
                    <div className="pointer-events-none absolute -right-6 -bottom-6 h-36 w-36 rounded-full border border-gold-soft/20 group-hover:border-gold-soft/40 transition-colors duration-300" />
                    <div className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full border border-gold-soft/10" />

                    {/* Top Row: Floating Circle Badge + Index */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-primary shadow-md ring-2 ring-gold/40 transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{ color: item.accentColor }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-display text-2xl font-bold text-gold-soft/60">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Banner Title */}
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl font-bold text-primary-foreground tracking-wide group-hover:text-gold-soft transition-colors duration-200">
                        {title}
                      </h3>
                    </div>

                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Eyebrow */}
                    <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-gold">
                      {eyebrow}
                    </span>

                    {/* Description - Stable min-height, NO line-clamp hover toggle to avoid jerky layout snaps */}
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85 min-h-[4.25rem]">
                      {desc}
                    </p>

                    {/* Tags / Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-full bg-muted/70 px-2.5 py-1 text-xs font-semibold text-primary border border-border"
                        >
                          <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="border-t border-border/80 p-6 pt-4 flex items-center justify-between bg-muted/20">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all duration-200 group-hover:text-accent group-hover:translate-x-1"
                  >
                    <span>{t("Book This Modality")}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <span className="text-xs font-semibold text-muted-foreground">
                    1-on-1 Guidance
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner (Certigo ref-bottom-banner style) */}
        <div className="reveal mt-16 rounded-3xl bg-forest-gradient p-8 sm:p-10 text-primary-foreground shadow-2xl relative overflow-hidden border border-gold/40">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-card text-primary ring-2 ring-gold shadow-lg">
                <ShieldCheck className="h-8 w-8 text-gold" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-soft">
                  {t("Holistic Approach to Personal Wellness")}
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold">
                  {t("Transform Yourself, Transform Your Family.")}
                </h3>
                <p className="mt-1 text-sm opacity-85">
                  {t("Begin your journey towards inner peace, emotional wellness and happier family relationships.")}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link to="/book" className="btn-gold !py-3 !px-7 text-sm shadow-gold">
                {t("Book a Session")}
              </Link>
              <a
                href="#journey"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                {t("Explore")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
