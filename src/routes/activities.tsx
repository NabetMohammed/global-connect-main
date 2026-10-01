import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import freight from "@/assets/activity-freight.jpg";
import events from "@/assets/activity-events.jpg";
import spices from "@/assets/activity-spices.jpg";
import social from "@/assets/activity-social.jpg";
import { PageHero, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Our Activities | Import, Logistics, Events & Inclusion" },
      {
        name: "description",
        content:
          "Import and export, road freight, catering and cultural events, and social inclusion programmes across Morocco and the UK.",
      },
      { property: "og:title", content: "Our Activities | Mamlakato Chaye Ltd" },
      {
        property: "og:description",
        content: "Four activities, one shared purpose: stronger Morocco–UK connections.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Activities,
});

function Activities() {
  const { d } = useI18n();
  const images = [freight, events, spices, social];

  return (
    <>
      <PageHero
        kicker={d.activities.kicker}
        title={d.activities.title}
        subtitle={d.activities.subtitle}
        image={spices}
      />

      <Section>
        <div className="space-y-8">
          {d.activities.items.map((item, i) => (
            <article
              key={item.slug}
              id={item.slug}
              className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-[1fr_1.3fr]"
            >
              <img
                src={images[i]}
                alt={item.title}
                width={1008}
                height={752}
                loading="lazy"
                className="h-56 w-full object-cover lg:h-full"
              />
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl leading-snug text-primary">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {d.activities.detailOverview}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.long}</p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {d.activities.detailBenefits}
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {item.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`${d.wa.quote} (${item.title})`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  {d.cta.requestQuote}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-secondary p-8 text-center">
          <h2 className="font-display text-2xl text-primary">{d.activities.workTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{d.activities.workSubtitle}</p>
          <a
            href={waLink(d.wa.general)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            {d.cta.whatsapp}
          </a>
        </div>
      </Section>
    </>
  );
}
