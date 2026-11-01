import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { SITE } from "@/lib/site";
import { LanguageSwitch, useLanguage } from "./Language";

const NAV = [
  { href: "/#about", labelKey: "About Me" },
  { href: "/#modalities", labelKey: "Healing Modalities" },
  { href: "/#gallery", labelKey: "Gallery" },
  { href: "/#contact", labelKey: "Contact" },
];

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 py-2 shadow-soft backdrop-blur-md" : "py-4 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logoImg} alt="Holistic Healing Home logo" className="h-11 w-11 shrink-0 rounded-full bg-card ring-2 ring-gold/40 shadow-sm" />
          <span className="truncate font-display text-lg font-bold tracking-[0.1em] text-primary sm:text-xl">
            {t("HOLISTIC HEALING HOME")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-foreground/80 transition-colors hover:text-accent">
              {t(n.labelKey)}
            </a>
          ))}
          <LanguageSwitch />
          <Link to="/book" className="btn-gold !py-2.5 !px-5 text-sm shadow-md">
            {t("Book a Session")}
          </Link>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitch />
          <button
            className="grid h-10 w-10 place-items-center rounded-xl bg-card border border-border shadow-sm text-primary"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="mx-5 mt-3 rounded-2xl border border-border bg-card p-6 shadow-soft lg:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="space-y-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-semibold text-foreground hover:bg-muted"
              >
                {t(n.labelKey)}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-border">
            <Link to="/book" onClick={() => setOpen(false)} className="btn-gold w-full text-center">
              {t("Book a Session")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed bottom-20 sm:bottom-22 right-5 sm:right-6 z-50 grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12S18.6 0 12 0z"/></svg>
    </a>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-forest-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3">
        <div>
          <img src={logoImg} alt="" className="h-20 w-20 rounded-full bg-card ring-2 ring-gold-soft/50 shadow-md" loading="lazy" />
          <h3 className="mt-5 text-3xl font-bold tracking-wide font-display">{t("HOLISTIC HEALING HOME")}</h3>
          <p className="mt-3 text-gold-soft font-medium">{t("Find New You. Transform Yourself. Create Happy Families.")}</p>
          <p className="mt-2 text-sm opacity-80 leading-relaxed">{t("Your Journey to Inner Peace and Personal Transformation Begins Here.")}</p>
        </div>
        <div>
          <p className="eyebrow !text-gold-soft">{t("Explore")}</p>
          <ul className="mt-5 space-y-3">
            {[{ href: "/#top", labelKey: "Home" }, ...NAV].map((n) => (
              <li key={n.href}>
                <a href={n.href} className="opacity-85 hover:text-gold-soft transition-colors">
                  {t(n.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-gold-soft">{t("Contact")}</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold-soft" /><a href={`tel:+91${SITE.phone}`}>+91 {SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-gold-soft" /><a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a></li>
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold-soft" /><span>{SITE.address.map((a) => t(a)).join(", ")}</span></li>
          </ul>
          <div className="mt-6 flex gap-3">
            {[{ h: SITE.instagram, I: Instagram, l: "Instagram" }, { h: SITE.youtube, I: Youtube, l: "YouTube" }, { h: SITE.facebook, I: Facebook, l: "Facebook" }].map(({ h, I, l }) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full border border-gold-soft/50 transition-colors hover:bg-gold hover:text-accent-foreground">
                <I className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Holistic Healing Home · {t(SITE.healer)}
      </div>
    </footer>
  );
}
