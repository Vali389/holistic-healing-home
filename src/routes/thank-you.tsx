import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { z } from "zod";
import logoImg from "@/assets/logo.png";
import { SITE } from "@/lib/site";
import { WhatsAppButton } from "@/components/site/Chrome";
import { useLanguage } from "@/components/site/Language";

export const Route = createFileRoute("/thank-you")({
  validateSearch: z.object({ name: z.string().optional(), payment: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Thank You — Holistic Healing Home" },
      { name: "description", content: "Your healing session is booked. Welcome to Holistic Healing Home." },
      { property: "og:title", content: "Thank You — Holistic Healing Home" },
      { property: "og:description", content: "Your healing journey begins now." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { name, payment } = Route.useSearch();
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 bg-background">
      <img src={logoImg} alt="" aria-hidden className="pointer-events-none absolute h-[44rem] w-[44rem] opacity-[0.04] animate-spin-slow" />
      <div className="relative max-w-xl text-center animate-in fade-in zoom-in-95 duration-1000">
        <img src={logoImg} alt="Holistic Healing Home" className="mx-auto h-28 w-28 rounded-full bg-card shadow-soft ring-4 ring-gold/30 animate-float-slow" />
        <p className="mt-8 font-script text-5xl text-accent">{t("Thank You")}{name ? `, ${name}` : ""}</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">
          {t("Your Healing Journey Begins Now")}
        </h1>
        <p className="mt-5 leading-relaxed text-muted-foreground text-base sm:text-lg">
          {t("Your session booking is received. We will reach out on WhatsApp or phone shortly to schedule your session.")}
        </p>
        {payment && (
          <p className="mt-4 text-xs text-muted-foreground">
            {t("Payment reference:")} <span className="font-mono text-primary font-bold">{payment}</span>
          </p>
        )}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-gold">
          <span className="h-px w-12 bg-gold/60" /><Heart className="h-5 w-5 fill-current" /><span className="h-px w-12 bg-gold/60" />
        </div>
        <p className="mt-6 font-display text-xl italic text-primary">
          {t("Heal Yourself. Transform Your Life. Create Happy Families.")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="btn-gold shadow-gold">
            {t("Message on WhatsApp")}
          </a>
          <Link to="/" className="btn-outline-forest">
            {t("Back to Home")}
          </Link>
        </div>
      </div>
      <WhatsAppButton />
    </main>
  );
}
