import { MessageCircle, CheckCircle2, ArrowRight, Sparkles, QrCode } from "lucide-react";
import qrImg from "@/assets/whatsapp-community-qr.png";
import { SITE } from "@/lib/site";
import { useLanguage } from "./Language";

export function WhatsAppCommunitySection() {
  const { language, t } = useLanguage();

  return (
    <section id="community" className="relative bg-card py-20 lg:py-24 overflow-hidden border-t border-border">
      {/* Decorative Glow Accents */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.17 150 / 0.15) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.66 0.12 75 / 0.12) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="rounded-3xl border-2 border-gold/40 bg-background/80 p-8 sm:p-12 lg:p-16 shadow-soft relative overflow-hidden backdrop-blur-sm">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content (7 Cols) */}
            <div className="reveal lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-whatsapp/50 bg-whatsapp/10 px-4 py-1.5 text-xs font-bold text-whatsapp shadow-sm">
                <MessageCircle className="h-4 w-4" />
                <span>{t("Official WhatsApp Community")}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {t("Join Holistic Healing Home [HHH] Community")} 🏡
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {t(
                  "Connect with a supportive family of over 2000+ members. Receive daily positive affirmations, morning motivation, healing insights, and exclusive announcements directly from Nagasri Lakshmi Prakash."
                )}
              </p>

              {/* Community Benefits Checklist */}
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {[
                  {
                    en: "Daily Morning Affirmations & Energy Reset",
                    te: "ప్రతిరోజూ సానుకూల సంకల్పాలు & శక్తి పునరుద్ధరణ",
                  },
                  {
                    en: "Mindful Meditation & Breathing Tips",
                    te: "ధ్యానం & శ్వాసాభ్యాసాల మార్గదర్శకత్వం",
                  },
                  {
                    en: "Family Harmony & Emotional Well-being",
                    te: "కుటుంబంలో శాంతి & భావోద్వేగ సమతుల్యత",
                  },
                  {
                    en: "Early Access to Free Masterclasses & Q&A",
                    te: "ప్రత్యేక లైవ్ సెషన్లు & సందేహాల నివృత్తి",
                  },
                ].map((item) => (
                  <div key={item.en} className="flex items-start gap-2.5">
                    <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-whatsapp/15 text-whatsapp mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90 leading-snug">
                      {language === "te" ? item.te : item.en}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.whatsappCommunity}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
                  </svg>
                  <span>{t("Join WhatsApp Community Now")}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <p className="text-xs text-muted-foreground font-medium">
                  {t("Free to join · Respectful & Sacred community")}
                </p>
              </div>
            </div>

            {/* Right Column: QR Code Card (5 Cols) */}
            <div className="reveal lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-gold/50 bg-black/90 p-4 shadow-2xl relative group">
                {/* Header label */}
                <div className="flex items-center justify-center gap-2 pb-2 text-center text-xs font-bold uppercase tracking-wider text-gold-soft">
                  <QrCode className="h-4 w-4 text-gold" />
                  <span>{t("Scan or Click to Join")}</span>
                </div>

                {/* QR Image Container */}
                <a
                  href={SITE.whatsappCommunity}
                  target="_blank"
                  rel="noreferrer"
                  title="Click to Join HHH WhatsApp Community"
                  className="block overflow-hidden rounded-2xl bg-black transition-transform duration-300 group-hover:scale-[1.02]"
                >
                  <img
                    src={qrImg}
                    alt="Holistic Healing Home HHH WhatsApp Community QR Code"
                    className="w-full h-auto object-cover rounded-2xl shadow-md"
                    loading="lazy"
                  />
                </a>

                <p className="mt-3 text-center text-xs text-primary-foreground/75 font-medium px-2">
                  {t("Scan this QR code using the WhatsApp camera to join this community")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
