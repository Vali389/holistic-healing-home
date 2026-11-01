import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { z } from "zod";
import { Header, Footer, WhatsAppButton } from "@/components/site/Chrome";
import { useLanguage } from "@/components/site/Language";
import { SITE, SESSION_FEE_INR } from "@/lib/site";
import lotus from "@/assets/lotus.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Healing Session — Holistic Healing Home" },
      { name: "description", content: "Reserve your holistic healing session with Nagasri Lakshmi Prakash and pay securely online." },
      { property: "og:title", content: "Book a Healing Session — Holistic Healing Home" },
      { property: "og:description", content: "Begin your healing journey today. Secure online booking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  concern: z.string().trim().max(1000).optional(),
});

declare global {
  interface Window { Razorpay?: new (o: Record<string, unknown>) => { open: () => void } }
}

function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

function BookPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const keyId = import.meta.env["VITE_RAZORPAY_KEY_ID"] as string | undefined;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) return setError(t(parsed.error.issues[0]?.message ?? "Please check your details"));
    const d = parsed.data;
    if (!keyId) {
      setError(t("Online payment is being set up. Please book via WhatsApp for now."));
      return;
    }
    setBusy(true);
    const ok = await loadRazorpay();
    if (!ok || !window.Razorpay) { setBusy(false); return setError(t("Could not load payment. Please try again.")); }
    const rzp = new window.Razorpay({
      key: keyId,
      amount: SESSION_FEE_INR * 100,
      currency: "INR",
      name: "Holistic Healing Home",
      description: "Healing Session Booking",
      prefill: { name: d.name, email: d.email, contact: d.phone },
      notes: { concern: d.concern ?? "" },
      theme: { color: "#2B5A44" },
      handler: (res: { razorpay_payment_id: string }) =>
        navigate({ to: "/thank-you", search: { name: d.name, payment: res.razorpay_payment_id } }),
      modal: { ondismiss: () => setBusy(false) },
    });
    rzp.open();
  }

  const field = "w-full rounded-xl border border-input bg-card px-4 py-3.5 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <div>
      <Header />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-32 lg:grid-cols-2 lg:pt-40">
        <div className="animate-in fade-in slide-in-from-left-6 duration-700">
          <p className="eyebrow">{t("Book a Session")}</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-primary">
            {t("Begin Your Healing Journey")}
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t("Share a few details and reserve your session. You'll be contacted to schedule a convenient time.")}
          </p>
          <img src={lotus} alt="Lotus and candles" width={1200} height={1408} className="mt-10 hidden h-80 w-full rounded-[2rem] object-cover shadow-soft lg:block border border-gold/30" />
        </div>
        <form onSubmit={onSubmit} className="animate-in fade-in slide-in-from-right-6 rounded-[2rem] bg-card p-8 shadow-soft duration-700 sm:p-10 border border-gold/40">
          <div className="flex items-baseline justify-between border-b border-border pb-6">
            <span className="font-display text-2xl font-bold text-primary">{t("Healing Session")}</span>
            <span className="font-display text-3xl font-bold text-gold-gradient">₹{SESSION_FEE_INR}</span>
          </div>
          <div className="mt-6 space-y-4">
            <input name="name" placeholder={t("Full name")} className={field} required maxLength={100} />
            <input name="phone" placeholder={t("Mobile number")} inputMode="numeric" className={field} required maxLength={10} />
            <input name="email" type="email" placeholder={t("Email")} className={field} required maxLength={255} />
            <textarea name="concern" placeholder={t("What would you like support with? (optional)")} rows={4} className={field} maxLength={1000} />
          </div>
          {error && <p className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}
          <button disabled={busy} className="btn-gold mt-6 w-full shadow-gold disabled:opacity-60">
            <Lock className="h-4 w-4" /> {busy ? t("Opening payment…") : t("Pay & Book Session")}
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-gold" /> {t("Secure payment via Razorpay")}
          </p>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="mt-6 block text-center text-sm font-semibold text-primary underline-offset-4 hover:underline">
            {t("Prefer WhatsApp? Book via chat")}
          </a>
        </form>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
