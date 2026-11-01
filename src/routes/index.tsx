import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Flower2,
  Heart,
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Compass,
  Award,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import family from "@/assets/family.jpg";
import lotus from "@/assets/lotus.jpg";
import healerImg from "@/assets/healer.jpg";
import logoImg from "@/assets/logo.png";
import { Header, Footer, WhatsAppButton, useReveal } from "@/components/site/Chrome";
import { useLanguage } from "@/components/site/Language";
import { ModalitiesSection } from "@/components/site/ModalitiesSection";
import { BonusesSection } from "@/components/site/BonusesSection";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { StickyBottomCTA } from "@/components/site/StickyBottomCTA";
import { WhatsAppCommunitySection } from "@/components/site/WhatsAppCommunitySection";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holistic Healing Home — Find New You, Create Happy Families" },
      {
        name: "description",
        content:
          "Holistic healing, meditation, manifestation, EFT, Reiki, Pranic & Chakra healing with Nagasri Lakshmi Prakash. 4+ years, 2000+ people supported.",
      },
      {
        name: "keywords",
        content:
          "Holistic Healing, Personal Transformation, Self Healing, Meditation, Manifestation, EFT Tapping, Reiki Healing, Pranic Healing, Chakra Healing, Chakra Balancing, Natural Healing, Power Breathing, Emotional Wellness, Inner Peace, Stress Management, Sleep Wellness, Lifestyle Wellness, Happy Families, Personal Growth, Holistic Healing Home",
      },
      {
        property: "og:title",
        content: "Holistic Healing Home — Transform Yourself, Transform Your Family",
      },
      {
        property: "og:description",
        content:
          "Begin your journey towards inner peace, emotional wellness and happier family relationships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SUPPORT_ITEMS = [
  "Stress & Emotional Challenges",
  "Overthinking",
  "Sleep-Related Issues",
  "Lifestyle Challenges",
  "Lack of Self-Confidence",
  "Negative Mindset",
  "Emotional Imbalance",
  "Lack of Inner Peace",
  "Personal Growth & Self-Discovery",
  "Relationship & Family Wellness",
];

const WHY_ITEMS = [
  "4+ Years of Experience",
  "2000+ People Supported",
  "Multiple Healing Modalities",
  "Holistic Approach to Personal Wellness",
  "Guided Meditation and Healing Practices",
  "Focus on Inner Peace and Personal Transformation",
];

const JOURNEY_STEPS = [
  {
    step: 1,
    titleEn: "Discover Yourself",
    titleTe: "మిమ్మల్ని మీరు తెలుసుకోండి",
    descEn: "Uncover hidden emotional patterns, identify deep stress triggers, and connect with your authentic inner self.",
    descTe: "మీ గురించి మీరు తెలుసుకోండి. అంతర్గత భావాలు మరియు ఒత్తిడికి కారణమైన అంశాలను గుర్తించే తొలి అడుగు.",
  },
  {
    step: 2,
    titleEn: "Release & Heal",
    titleTe: "విడిచిపెట్టి స్వస్థత పొందండి",
    descEn: "Gently release persistent anxieties, negative thought loops, and accumulated past burdens through EFT & gentle healing.",
    descTe: "ప్రతికూల భావాలను అధిగమించే ప్రయాణాన్ని ప్రారంభించండి. మనస్సులోని భారాలను తేలికపరచుకోండి.",
  },
  {
    step: 3,
    titleEn: "Balance Your Energy",
    titleTe: "మీ శక్తిని సమతుల్యం చేసుకోండి",
    descEn: "Restore vital prana flow, align the 7 energy chakras, and cultivate deep emotional and physical tranquility.",
    descTe: "హీలింగ్ మరియు ధ్యాన పద్ధతులను అభ్యసించండి. చక్రాల సమతుల్యతతో నూతన జీవశక్తిని పొందండి.",
  },
  {
    step: 4,
    titleEn: "Transform Your Life",
    titleTe: "మీ జీవితాన్ని మార్చుకోండి",
    descEn: "Anchor empowered daily rituals, joyful mindset habits, and intentional manifestation to thrive in all dimensions.",
    descTe: "సానుకూలమైన జీవనశైలిని అలవర్చుకోండి. నిత్యం ఉత్సాహం మరియు ఆనందంతో కూడిన నూతన జీవనం ప్రారంభించండి.",
  },
  {
    step: 5,
    titleEn: "Create Happy Families",
    titleTe: "సంతోషకరమైన కుటుంబాలను నిర్మించండి",
    descEn: "Your transformed peaceful aura naturally uplifts your household, radiating love, mutual understanding, and family harmony.",
    descTe: "కుటుంబంలో ప్రేమ, ఆనందం మరియు ప్రశాంతతను పెంపొందించుకోండి. మీలోని మార్పు కుటుంబంలో వెలుగులు నింపుతుంది.",
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-gold" aria-hidden="true">
      <span className="h-px w-12 bg-gold/60" />
      <Flower2 className="h-5 w-5" />
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}

function Index() {
  useReveal();
  const { language, t } = useLanguage();

  return (
    <div id="top" className="overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Full-Bleed Nature Meditation Background Image with High Mobile Visibility */}
        <img
          src={hero}
          alt="Woman meditating peacefully in a sunlit garden"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover object-[55%_center] sm:object-[68%_center]"
        />

        {/* Soft Feathered Gradient Overlay - mobile uses subtle top-to-bottom so meditating woman & sunlight are vivid & visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/15 to-background/75 sm:bg-gradient-to-r sm:from-background/70 sm:via-background/25 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:pt-44">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <p className="eyebrow tracking-[0.25em] text-xs font-bold text-gold uppercase">
              {t("Holistic Healing Home")}
            </p>

            {/* Find New You - Golden Cursive Script Tagline */}
            <p className="mt-3 font-script text-5xl sm:text-6xl lg:text-7xl text-gold-gradient font-bold drop-shadow-sm tracking-wide leading-tight">
              Find New You
            </p>

            <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] text-primary sm:text-6xl lg:text-7xl drop-shadow-sm">
              {t("Transform Yourself,")}<br />
              <span className="italic text-gold-gradient font-normal">
                {t("Transform Your Family.")}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90 font-medium">
              {t(
                "Discover the power within you through holistic healing, meditation, manifestation and natural healing practices. Begin your journey towards inner peace, emotional wellness and happier family relationships."
              )}
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/book" className="btn-gold shadow-gold">
                {t("Book Your Session")} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#journey" className="btn-outline-forest">
                {t("Start Your Healing Journey")}
              </a>
            </div>

            {/* Animated Counters Strip */}
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-gold/40 pt-8">
              <div>
                <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                  <AnimatedCounter end={4} suffix="+" duration={1800} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {t("Years of Healing Experience")}
                </p>
              </div>

              <div>
                <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                  <AnimatedCounter end={2000} suffix="+" duration={2400} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {t("People Supported")}
                </p>
              </div>

              <div>
                <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                  <AnimatedCounter end={9} suffix="+" duration={1600} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {t("Holistic Healing Modalities")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS / QUICK HIGHLIGHTS BAR (Certigo ref-trust-bar style) */}
      <section className="relative z-10 -mt-6 mx-auto max-w-7xl px-5">
        <div className="rounded-2xl border border-gold/40 bg-card/95 p-6 shadow-soft backdrop-blur-md grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold border border-gold/40">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <strong className="block text-sm font-bold text-primary font-display">
                {t("Certified Holistic Healer & Coach")}
              </strong>
              <small className="text-xs text-muted-foreground">
                {t("4+ Years of Experience")}
              </small>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest/15 text-forest border border-forest/30">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <strong className="block text-sm font-bold text-primary font-display">
                {t("Multiple Healing Modalities")}
              </strong>
              <small className="text-xs text-muted-foreground">
                9 Proven Natural Disciplines
              </small>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold border border-gold/40">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <strong className="block text-sm font-bold text-primary font-display">
                {t("Personalized & Compassionate Care")}
              </strong>
              <small className="text-xs text-muted-foreground">
                1-on-1 Guidance & Family Focus
              </small>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest/15 text-forest border border-forest/30">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <strong className="block text-sm font-bold text-primary font-display">
                {t("Flexible Session Booking")}
              </strong>
              <small className="text-xs text-muted-foreground">
                Online & In-Person Sessions
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION (Featuring Real Photograph of Nagasri Lakshmi Prakash) */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Photo Frame */}
          <div className="reveal relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-6 rounded-full border border-gold/40 animate-spin-slow"
              style={{ borderStyle: "dashed" }}
            />
            <div className="relative aspect-square overflow-hidden rounded-full bg-gold-gradient p-2.5 shadow-soft ring-4 ring-gold/20">
              <img
                src={healerImg}
                alt={`${SITE.healer}, Holistic Healer`}
                className="h-full w-full rounded-full object-cover object-[center_20%]"
                loading="lazy"
              />
            </div>

            {/* Floating Lives Touched Pill */}
            <div className="absolute -bottom-4 -right-2 rounded-2xl bg-card border border-gold/40 px-6 py-4 shadow-soft animate-float-slow">
              <p className="font-display text-3xl font-bold text-primary">
                <AnimatedCounter end={2000} suffix="+" duration={2000} />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("Lives touched")}
              </p>
            </div>

            {/* Floating Experience Pill */}
            <div className="absolute -left-4 top-6 rounded-2xl bg-forest-gradient px-5 py-3 text-primary-foreground shadow-soft border border-gold-soft/30">
              <p className="font-display text-2xl font-bold">
                <AnimatedCounter end={4} suffix="+ Years" duration={1500} />
              </p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="reveal">
            <p className="eyebrow">{t("About Me")}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary">
              {t("Meet Your Healing Guide")}
            </h2>
            <p className="mt-2 font-script text-3xl text-accent">{t(SITE.healer)}</p>

            <div className="mt-8 space-y-4 text-base sm:text-[1.05rem] leading-relaxed text-foreground/80">
              <p>
                {t(
                  "Namaste! Through HOLISTIC HEALING HOME, I guide people towards personal transformation, inner peace and complete well-being."
                )}
              </p>
              <p>
                {t(
                  "For the past 4 years, I have supported over 2000 people on their journey of personal growth and mental peace through holistic and natural healing practices."
                )}
              </p>
              <p>
                {t(
                  "Through manifestation, meditation, EFT tapping, Reiki, Pranic healing, chakra healing, chakra balancing and power breathing, I help people discover their positive energy and build a peaceful, happy life."
                )}
              </p>
              <p>
                {t("I believe everyone has the power within them to improve their life.")}
              </p>
            </div>

            <blockquote className="mt-8 border-l-3 border-gold pl-6 font-display text-xl font-semibold italic leading-relaxed text-primary">
              {t(
                "My purpose is simple: to help create happy families by inspiring transformation within each individual."
              )}
            </blockquote>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/book" className="btn-gold shadow-gold">
                {t("Book a Session")}
              </Link>
              <a href="#gallery" className="btn-outline-forest">
                {t("Gallery")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION – HAPPY FAMILIES */}
      <section
        id="mission"
        className="relative bg-forest-gradient py-24 text-primary-foreground lg:py-32 overflow-hidden"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 relative z-10">
          <div className="reveal relative">
            <img
              src={family}
              alt="A happy family laughing together outdoors at sunset"
              width={1408}
              height={1008}
              loading="lazy"
              className="rounded-[2.5rem] object-cover shadow-soft border-2 border-gold-soft/30"
            />
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl bg-card p-5 text-center text-card-foreground shadow-soft border border-gold/40 sm:left-auto sm:right-8 sm:w-72">
              <Heart className="mx-auto h-6 w-6 fill-gold text-gold" />
              <p className="mt-2 font-display text-xl font-bold text-primary">
                {t("Happy Families")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("Happy families are at the heart of my purpose.")}
              </p>
            </div>
          </div>

          <div className="reveal pt-8 lg:pt-0">
            <p className="eyebrow !text-gold-soft">{t("My Mission")}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t("Healing Individuals.")}<br />
              <span className="italic text-gold-gradient font-normal">
                {t("Creating Happy Families.")}
              </span>
            </h2>

            <div className="mt-8 space-y-4 text-base sm:text-lg leading-relaxed opacity-90">
              <p>
                {t(
                  "When positive change begins within one person, it can create a better atmosphere for the whole family."
                )}
              </p>
              <p>
                {t(
                  "My mission is to help everyone understand themselves, grow emotionally and build a family life filled with love, peace and joy."
                )}
              </p>
            </div>

            <p className="mt-8 font-script text-3xl text-gold-soft">
              {t("Heal Yourself. Transform Your Life. Create Happy Families.")}
            </p>

            <Link to="/book" className="btn-gold mt-8 shadow-gold">
              {t("Book Your Healing Session")}
            </Link>
          </div>
        </div>
      </section>

      {/* MY HEALING MODALITIES (CERTIGO REFERENCE FORMAT) */}
      <ModalitiesSection />

      {/* HOW I CAN SUPPORT YOU */}
      <section className="bg-secondary/50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="reveal">
            <p className="eyebrow">{t("How I Can Support You")}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
              {t("Your Journey Towards a Better You Begins Here")}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80">
              {t(
                "I support people facing these concerns and life challenges through holistic wellness practices."
              )}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {SUPPORT_ITEMS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-gold/40 bg-card px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:bg-forest hover:text-primary-foreground hover:scale-105"
                >
                  {t(s)}
                </span>
              ))}
            </div>

            <Link to="/book" className="btn-gold mt-10 shadow-gold">
              {t("Book a Session")}
            </Link>
          </div>

          <div className="reveal relative">
            <div className="overflow-hidden rounded-t-[10rem] rounded-b-3xl border-2 border-gold/40 shadow-soft">
              <img
                src={lotus}
                alt="Lotus floating in a stone bowl beside candles"
                width={1200}
                height={1408}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YOUR TRANSFORMATION JOURNEY (Attractive Section with Left Highlight Card + Animated Counters) */}
      <section id="journey" className="relative bg-background py-24 lg:py-32 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">
          {/* Section Header */}
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="eyebrow">{t("Your Transformation Journey")}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">
              {t("A New Beginning Starts Within You")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("Personalized healing paths to restore your vitality, inner calm, and family happiness.")}
            </p>
            <div className="mt-6">
              <Ornament />
            </div>
          </div>

          {/* Main 2-Column Layout: Left Highlight Card + Right 5-Step Progression */}
          <div className="mt-16 grid items-stretch gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT HIGHLIGHT CARD ("Join Your Healing Journey" - Glowing Feature Box) */}
            <div className="reveal flex flex-col justify-between rounded-3xl bg-forest-gradient p-8 sm:p-10 text-primary-foreground shadow-2xl relative overflow-hidden border-2 border-gold/50">
              {/* Background radiant aura */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-soft/15 blur-2xl" />

              <div>
                {/* Healer Micro Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={healerImg}
                    alt={SITE.healer}
                    className="h-16 w-16 rounded-full object-cover object-top ring-2 ring-gold shadow-md"
                  />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gold-soft">
                      {t("Guided Personally by Nagasri Lakshmi Prakash")}
                    </span>
                    <h3 className="font-display text-xl font-bold">
                      {t(SITE.healer)}
                    </h3>
                  </div>
                </div>

                <div className="mt-8">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-soft">
                    {t("Join Your Healing Journey")}
                  </span>
                  <h4 className="mt-2 font-display text-3xl font-bold leading-tight">
                    {t("Transform Yourself, Transform Your Family.")}
                  </h4>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-90">
                    {t("Healing begins with one person and blossoms into a happy family.")}
                  </p>
                </div>

                {/* Value Checkmarks */}
                <div className="mt-8 space-y-3">
                  {[
                    "Personal 1-on-1 Energy Assessment",
                    "Custom Healing & Meditation Roadmap",
                    "Lasting Harmony for Your Family",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-3">
                      <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-accent-foreground">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-semibold opacity-95">{t(pt)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big Highlighted Button */}
              <div className="mt-10 pt-6 border-t border-primary-foreground/20">
                <Link
                  to="/book"
                  className="btn-gold w-full text-center shadow-gold !py-3.5 text-base flex items-center justify-center gap-2 group"
                >
                  <span>{t("Join Your Journey Now")}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-2 text-center text-xs opacity-70">
                  {t("A little time for yourself. A meaningful new beginning.")}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: 5-Stage Transformation Roadmap */}
            <div className="space-y-6">
              {JOURNEY_STEPS.map((s, idx) => {
                const title = language === "te" ? s.titleTe : s.titleEn;
                const desc = language === "te" ? s.descTe : s.descEn;
                const isFinal = idx === JOURNEY_STEPS.length - 1;

                return (
                  <div
                    key={s.step}
                    className="reveal group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-md hover:bg-card/95"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {/* Step Number Circle */}
                    <div
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-bold transition-all duration-300 group-hover:scale-110 ${
                        isFinal
                          ? "bg-gold-gradient text-accent-foreground shadow-gold"
                          : "bg-forest/10 text-forest border border-forest/30 group-hover:bg-forest group-hover:text-primary-foreground"
                      }`}
                    >
                      {isFinal ? <Heart className="h-6 w-6 fill-current" /> : s.step}
                    </div>

                    {/* Step Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                          {t("Step")} {s.step}
                        </span>
                        {isFinal && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold text-accent-foreground border border-gold/40">
                            <Sparkles className="h-3 w-3 text-gold" />
                            {t("Happy Families")}
                          </span>
                        )}
                      </div>

                      <h4 className="mt-1 font-display text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY HOLISTIC HEALING HOME */}
      <section className="relative overflow-hidden bg-card py-24 lg:py-28">
        <img
          src={logoImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 opacity-[0.05] animate-spin-slow"
        />
        <div className="relative mx-auto max-w-5xl px-5">
          <div className="reveal text-center">
            <p className="eyebrow">{t("Why Holistic Healing Home?")}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary">
              {t("Why Begin Your Journey With Us?")}
            </h2>
          </div>
          <ul className="mt-14 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {WHY_ITEMS.map((w) => (
              <li
                key={w}
                className="reveal flex items-center gap-4 text-base sm:text-lg font-semibold text-foreground rounded-2xl border border-border/80 bg-background/50 p-4 shadow-sm hover:border-gold/40 transition-colors"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient text-accent-foreground shadow-sm">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>{t(w)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECIAL BONUSES SECTION (₹9,999/- VALUE) WITH LIVE COUNTDOWN TIMER */}
      <BonusesSection />

      {/* PHOTO GALLERY (REAL NAGASRI LAKSHMI PRAKASH PHOTOS) */}
      <PhotoGallery />

      {/* STORIES / VIDEO TESTIMONIALS */}
      <section id="stories" className="mx-auto max-w-7xl px-5 py-24 lg:py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t("Real Voices")}</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary">
            {t("Stories of Transformation")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("Hear directly from people who walked this journey.")}
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.testimonials.map((id, i) => (
            <div
              key={id}
              className="reveal mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-gold-gradient p-1.5 shadow-soft"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[9/16] overflow-hidden rounded-[1.6rem] bg-forest">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Testimonial video ${i + 1}`}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-forest"
          >
            <Play className="h-4 w-4" /> {t("More on YouTube")}
          </a>
        </div>
      </section>

      {/* WHATSAPP COMMUNITY SECTION */}
      <WhatsAppCommunitySection />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1104}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/90" />
        <div className="reveal relative mx-auto max-w-3xl px-5 py-28 text-center text-primary-foreground">
          <p className="font-script text-4xl text-gold-soft">{t("Find New You")}</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold">
            {t("Are You Ready to Find the New You?")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-loose opacity-90">
            {t(
              "Welcome a new change in your life. Discover your inner strength. Begin your healing journey today."
            )}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/book" className="btn-gold shadow-gold">
              {t("Book Your Healing Session")}
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-7 py-3.5 font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              {t("Connect on WhatsApp")}
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-bold text-gold-soft underline-offset-4 hover:underline"
            >
              {t("Start Your Transformation")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyBottomCTA />
    </div>
  );
}
