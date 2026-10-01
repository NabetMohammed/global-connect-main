import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HandHeart, Leaf, ShieldCheck, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-morocco-uk.jpg";
import panorama from "@/assets/heritage-panorama.jpg";
import freight from "@/assets/activity-freight.jpg";
import events from "@/assets/activity-events.jpg";
import spices from "@/assets/activity-spices.jpg";
import social from "@/assets/activity-social.jpg";
import { Quote, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mamlakato Chaye Ltd | Morocco–UK Trade & Culture Bridge" },
      {
        name: "description",
        content:
          "A Moroccan-British company building trade, logistics, cultural and inclusive opportunities between Morocco and the United Kingdom.",
      },
      { property: "og:title", content: "Mamlakato Chaye Ltd | Morocco–UK Bridge" },
      {
        property: "og:description",
        content:
          "Import & export, road freight, Moroccan catering and cultural events, and social inclusion between Morocco and the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillarIcons = [Leaf, HandHeart, ShieldCheck, BadgeCheck];
const activityImages = [freight, events, spices, social];

function Home() {
  const { d, dir } = useI18n();
  const flip = dir === "rtl" ? "scaleX(-1)" : undefined;

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Moroccan riad blending into London Tower Bridge at sunset"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/35" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {d.home.kicker}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance-pretty font-display text-4xl leading-[1.1] text-primary-foreground sm:text-6xl">
            {d.home.heroTitleA} <span className="text-gold">{d.home.heroHighlight}</span>{" "}
            {d.home.heroTitleB}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            {d.home.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              {d.cta.discoverActivities}
              <ArrowRight className="h-4 w-4" style={{ transform: flip }} />
            </Link>
            <a
              href={waLink(d.wa.general)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" />
              {d.cta.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {d.home.pillars.map((p, i) => {
            const Icon = pillarIcons[i] ?? Leaf;
            return (
              <div key={p.title} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-primary">{p.title}</span>
                  <span className="block text-xs text-muted-foreground">{p.desc}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Section>
        <h2 className="font-display text-3xl text-primary sm:text-4xl">
          {d.home.activitiesTitle}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{d.home.activitiesSubtitle}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.activities.items.map((item, i) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
            >
              <img
                src={activityImages[i]}
                alt={item.title}
                width={1008}
                height={752}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg leading-snug text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                <Link
                  to="/activities"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-foreground"
                >
                  {d.cta.learnMore}
                  <ArrowRight className="h-4 w-4" style={{ transform: flip }} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-3xl bg-secondary p-6 sm:grid-cols-2 lg:grid-cols-4">
          {d.home.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl text-primary">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {d.home.heritageKicker}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
              {d.home.heritageTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {d.home.heritageBody}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {d.cta.learnMore}
              <ArrowRight className="h-4 w-4" style={{ transform: flip }} />
            </Link>
          </div>
          <img
            src={panorama}
            alt="Moroccan kasbah skyline merging into London skyline"
            width={1600}
            height={704}
            loading="lazy"
            className="h-72 w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
        <div className="mt-12">
          <Quote text={d.home.heritageQuote} author="Mamlakato Chaye Ltd" />
        </div>
      </Section>
    </>
  );
}
