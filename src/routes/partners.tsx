import { createFileRoute } from "@tanstack/react-router";
import { Building2, Handshake, HeartHandshake, Leaf, Palette, Truck, MessageCircle } from "lucide-react";
import social from "@/assets/activity-social.jpg";
import { PageHero, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners | Stronger Together" },
      {
        name: "description",
        content:
          "We collaborate with trusted producers, cultural institutions and logistics partners in Morocco and the United Kingdom.",
      },
      { property: "og:title", content: "Our Partners | Mamlakato Chaye Ltd" },
      {
        property: "og:description",
        content: "Trusted partners creating real opportunities between Morocco and the UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partners,
});

const icons = [Leaf, Truck, Building2, Palette, Handshake, HeartHandshake];

function Partners() {
  const { d } = useI18n();

  return (
    <>
      <PageHero
        kicker={d.partners.kicker}
        title={d.partners.title}
        subtitle={d.partners.subtitle}
        image={social}
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {d.partners.items.map((p, i) => {
            const Icon = icons[i] ?? Handshake;
            return (
              <article
                key={p.name}
                className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-lg text-primary">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="font-display text-3xl">{d.partners.becomeTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80">
            {d.partners.becomeSubtitle}
          </p>
          <a
            href={waLink(d.wa.partner)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            {d.cta.becomePartner}
          </a>
        </div>
      </Section>
    </>
  );
}
