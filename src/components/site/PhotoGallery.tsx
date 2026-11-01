import { useState } from "react";
import { X, ZoomIn, Award, Users, BookOpen, Sparkles } from "lucide-react";
import { useLanguage } from "./Language";

import img10 from "@/assets/img-10.jpeg";
import img9 from "@/assets/img-9.jpeg";
import img5 from "@/assets/img-5.jpeg";
import img4 from "@/assets/img-4.jpeg";
import img12 from "@/assets/img-12.jpeg";
import img3 from "@/assets/img-3.jpeg";
import img7 from "@/assets/img-7.jpeg";
import img8 from "@/assets/img-8.jpeg";
import img11 from "@/assets/img-11.jpeg";
import img13 from "@/assets/img-13.jpeg";
import img2 from "@/assets/img-2.jpeg";
import healerImg from "@/assets/healer.jpg";

interface GalleryItem {
  id: string;
  src: string;
  category: "awards" | "workshops" | "leadership";
  titleEn: string;
  titleTe: string;
  descEn: string;
  descTe: string;
  badgeEn: string;
  badgeTe: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: img10,
    category: "awards",
    titleEn: "Growth Leader Award Presentation",
    titleTe: "గ్రోత్ లీడర్ అవార్డు ప్రదానం",
    descEn: "Receiving the Certificate of Commitment - Growth Leader from acclaimed actress & animal welfare leader Amala Akkineni.",
    descTe: "ప్రముఖ సినీ నటి మరియు సంఘ సేవకురాలు అమల అక్కినేని గారి చేతుల మీదుగా 'గ్రోత్ లీడర్' అవార్డు మరియు సర్టిఫికేట్ అందుకుంటున్న క్షణం.",
    badgeEn: "Growth Leader Award",
    badgeTe: "గ్రోత్ లీడర్ అవార్డు",
  },
  {
    id: "g2",
    src: img9,
    category: "awards",
    titleEn: "Golden Excellence Trophy & Felicitation",
    titleTe: "గోల్డెన్ ఎక్సలెన్స్ ట్రోఫీ & సన్మానం",
    descEn: "Honored with the prestigious Golden Excellence Trophy in recognition of outstanding holistic coaching and family transformation work.",
    descTe: "హోలిస్టిక్ కోచింగ్ మరియు కుటుంబ పరివర్తన విభాగంలో అద్భుతమైన కృషికి ప్రతిష్టాత్మక గోల్డెన్ ఎక్సలెన్స్ ట్రోఫీతో సత్కారం.",
    badgeEn: "Excellence Trophy",
    badgeTe: "ఎక్సలెన్స్ ట్రోఫీ",
  },
  {
    id: "g3",
    src: img5,
    category: "awards",
    titleEn: "Certified Digital Coach Award",
    titleTe: "సర్టిఫైడ్ డిజిటల్ కోచ్ అవార్డు",
    descEn: "Felicitation ceremony on stage as an officially Certified Coach empowering individuals through modern natural healing.",
    descTe: "ఆధునిక మరియు సహజ పద్ధతుల ద్వారా ప్రజలకు మార్గనిర్దేశం చేసే అధికారిక సర్టిఫైడ్ కోచ్‌గా వేదికపై ప్రదానం.",
    badgeEn: "Certified Coach",
    badgeTe: "సర్టిఫైడ్ కోచ్",
  },
  {
    id: "g4",
    src: img4,
    category: "workshops",
    titleEn: "AI Pro Mastery Trainer Certification",
    titleTe: "AI ప్రో మాస్టరీ ట్రైనర్ సర్టిఫికేషన్",
    descEn: "Receiving the Mastery Trainer certification with respected dignitaries and educational leaders.",
    descTe: "విద్యావేత్తలు మరియు ప్రముఖుల సమక్షంలో మాస్టరీ ట్రైనర్ సర్టిఫికేట్ అందుకుంటూ.",
    badgeEn: "Mastery Trainer",
    badgeTe: "మాస్టరీ ట్రైనర్",
  },
  {
    id: "g5",
    src: img12,
    category: "workshops",
    titleEn: "Dignitaries & Trainers Convocation",
    titleTe: "ప్రముఖులు మరియు ట్రైనర్ల సమావేశం",
    descEn: "Group convocation with leading transformational coaches, mentors, and corporate wellness leaders.",
    descTe: "ప్రముఖ లైఫ్ కోచ్‌లు, మెంటార్లు మరియు కార్పొరేట్ వెల్‌నెస్ లీడర్లతో సంయుక్త వేదికపై గౌరవం.",
    badgeEn: "Faculty & Mentors",
    badgeTe: "మెంటార్లు & ప్రతినిధులు",
  },
  {
    id: "g6",
    src: img3,
    category: "leadership",
    titleEn: "Nalanda Hyderabad Leadership Forum",
    titleTe: "నలంద హైదరాబాద్ నాయకత్వ వేదిక",
    descEn: "Participating in expert transformational dialogue at the Modern City Club for Experts, Hyderabad.",
    descTe: "హైదరాబాద్‌లోని మోడ్రన్ సిటీ క్లబ్ ఫర్ ఎక్స్‌పర్ట్స్ వేదిక వద్ద ప్రముఖుల నాయకత్వ సదస్సులో పాల్గొంటూ.",
    badgeEn: "Leadership Forum",
    badgeTe: "నాయకత్వ సదస్సు",
  },
  {
    id: "g7",
    src: img7,
    category: "leadership",
    titleEn: "Superstar Participant Summit",
    titleTe: "సూపర్‌స్టార్ పార్టిసిపెంట్ సమ్మిట్",
    descEn: "Connecting with esteemed mentors and holistic wellness advocates at the national leadership conclave.",
    descTe: "జాతీయ స్థాయి నాయకత్వ సదస్సులో ప్రముఖ వెల్‌నెస్ నిపుణులు మరియు మెంటార్లతో ఆలోచనల మార్పిడి.",
    badgeEn: "National Conclave",
    badgeTe: "జాతీయ సదస్సు",
  },
  {
    id: "g8",
    src: img8,
    category: "leadership",
    titleEn: "Holistic Wellness Dialogue & Interaction",
    titleTe: "హోలిస్టిక్ వెల్‌నెస్ సంభాషణ & కలయిక",
    descEn: "Sharing wellness experiences and fostering collaborative holistic healing for communities and families.",
    descTe: "కుటుంబ శ్రేయస్సు మరియు సమాజ పరివర్తనపై విశిష్ట వ్యక్తులతో అనుభవాల పంచుకోలు.",
    badgeEn: "Wellness Dialogue",
    badgeTe: "వెల్‌నెస్ కలయిక",
  },
  {
    id: "g9",
    src: img13,
    category: "leadership",
    titleEn: "Creating Happy Families Celebration",
    titleTe: "హ్యాపీ ఫ్యామిలీస్ వేడుక",
    descEn: "Celebrating the journey of love, family balance, and mutual support that forms the core of Holistic Healing Home.",
    descTe: "హోలిస్టిక్ హీలింగ్ హోమ్ ఆదర్శమైన ప్రేమ, పరస్పర మద్దతు మరియు కుటుంబ సమతుల్యత వేడుక.",
    badgeEn: "Happy Families",
    badgeTe: "సంతోషకర కుటుంబం",
  },
  {
    id: "g10",
    src: img2,
    category: "workshops",
    titleEn: "Guidance & Consultation Sessions",
    titleTe: "మార్గదర్శకత్వం & కౌన్సెలింగ్ సెషన్లు",
    descEn: "Nagasri Lakshmi Prakash offering peaceful, supportive spaces for emotional healing and self-discovery.",
    descTe: "భావోద్వేగ స్వస్థత మరియు స్వీయ అన్వేషణ కోసం ప్రశాంతమైన వాతావరణంలో నాగశ్రీ లక్ష్మీ ప్రకాశ్ గారి మార్గదర్శకత్వం.",
    badgeEn: "Personal Guidance",
    badgeTe: "వ్యక్తిగత మార్గదర్శకత్వం",
  },
  {
    id: "g11",
    src: healerImg,
    category: "workshops",
    titleEn: "Dedicated Healing Guide",
    titleTe: "నిబద్ధత కలిగిన హీలింగ్ గైడ్",
    descEn: "Ready to guide you with Reiki, Pranic healing, EFT tapping, and chakra balancing for personal peace.",
    descTe: "వ్యక్తిగత ప్రశాంతత కోసం రేకీ, ప్రానిక్ హీలింగ్, EFT ట్యాపింగ్ మరియు చక్ర బ్యాలెన్సింగ్ అందించడానికి సిద్ధం.",
    badgeEn: "Healer Profile",
    badgeTe: "హీలర్ ప్రొఫైల్",
  },
  {
    id: "g12",
    src: img11,
    category: "leadership",
    titleEn: "Cultural & Transformational Convention",
    titleTe: "సాంస్కృతిక & పరివర్తన సదస్సు",
    descEn: "Representing authentic Indian holistic practices, traditional wellness, and family harmony.",
    descTe: "భారతీయ సాంప్రదాయ శ్రేయస్సు పద్ధతులు మరియు కుటుంబ సామరస్యాన్ని ప్రతిబింబిస్తూ.",
    badgeEn: "Tradition & Wellness",
    badgeTe: "సాంప్రదాయం & వెల్‌నెస్",
  },
];

export function PhotoGallery() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "awards" | "workshops" | "leadership">("all");
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative bg-secondary/40 py-24 lg:py-32 overflow-hidden">
      {/* Background soft decorative accents */}
      {/* Background Soft Glows (pure CSS radial gradients with zero blur filter) */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-[45rem] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.66 0.12 75 / 0.12) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.38 0.09 145 / 0.1) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>{t("Moments of Recognition & Growth")}</span>
          </div>
          
          <h2 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">
            {t("Our Healing Journey in Pictures")}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            {t("Celebrating awards, certifications, training programs, and lives touched by Nagasri Lakshmi Prakash.")}
          </p>

          {/* Decorative Divider */}
          <div className="mt-6 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-12 bg-gold/50" />
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="h-px w-12 bg-gold/50" />
          </div>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { key: "all", labelKey: "All Photos", Icon: Sparkles },
              { key: "awards", labelKey: "Awards & Honors", Icon: Award },
              { key: "workshops", labelKey: "Training & Workshops", Icon: BookOpen },
              { key: "leadership", labelKey: "Community & Leadership", Icon: Users },
            ].map(({ key, labelKey, Icon }) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key as any)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    active
                      ? "bg-gold-gradient text-accent-foreground shadow-gold ring-2 ring-gold/40 -translate-y-0.5"
                      : "bg-card text-foreground/85 border border-border hover:border-gold/50 hover:bg-card hover:-translate-y-0.5 shadow-sm"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active ? "text-accent-foreground" : "text-gold"}`} />
                  <span>{t(labelKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid - Zero blur on hover with crisp isolation */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, idx) => {
            const title = language === "te" ? item.titleTe : item.titleEn;
            const desc = language === "te" ? item.descTe : item.descEn;
            const badge = language === "te" ? item.badgeTe : item.badgeEn;

            return (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group reveal relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border shadow-soft transition-all duration-300 ease-out hover:border-gold hover:shadow-2xl hover:ring-2 hover:ring-gold/40 crisp-card"
                style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/30 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1 text-[11px] font-semibold text-primary-foreground border border-gold/40 shadow-sm">
                      <Sparkles className="h-3 w-3 text-gold" />
                      {badge}
                    </span>
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card text-primary opacity-0 transition-all duration-200 group-hover:opacity-100 shadow-md border border-gold/40">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  {/* Caption on Card */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground z-10">
                    <h3 className="font-display text-lg font-bold leading-snug drop-shadow-sm group-hover:text-gold-soft transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed opacity-90 text-primary-foreground">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-3xl bg-card border border-gold/40 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition-transform hover:scale-110 hover:bg-black/80"
              aria-label={t("Close photo")}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Body */}
            <div className="grid md:grid-cols-[1.2fr_0.8fr] max-h-[90vh] overflow-y-auto">
              <div className="bg-black/95 flex items-center justify-center p-3">
                <img
                  src={activePhoto.src}
                  alt={language === "te" ? activePhoto.titleTe : activePhoto.titleEn}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 bg-card text-foreground">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold text-primary border border-gold/40">
                    <Sparkles className="h-3.5 w-3.5 text-gold" />
                    {language === "te" ? activePhoto.badgeTe : activePhoto.badgeEn}
                  </span>

                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-primary leading-tight">
                    {language === "te" ? activePhoto.titleTe : activePhoto.titleEn}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
                    {language === "te" ? activePhoto.descTe : activePhoto.descEn}
                  </p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("Meet Your Healing Guide")}
                    </p>
                    <p className="font-display text-lg font-bold text-primary mt-1">
                      Nagasri Lakshmi Prakash
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t("Certified Holistic Healer & Coach")}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="/book"
                    className="btn-gold !py-2.5 !px-6 text-sm flex-1 text-center"
                  >
                    {t("Book a Session")}
                  </a>
                  <button
                    type="button"
                    onClick={() => setActivePhoto(null)}
                    className="btn-outline-forest !py-2.5 !px-6 text-sm"
                  >
                    {t("Close photo")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
