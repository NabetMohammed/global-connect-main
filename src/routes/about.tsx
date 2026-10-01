import { createFileRoute } from "@tanstack/react-router";
import { Eye, Shield, Sparkles, Star, Target, Users } from "lucide-react";
import flags from "@/assets/flags-morocco-uk.jpg";
import events from "@/assets/activity-events.jpg";
import { PageHero, Quote, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mamlakato Chaye Ltd | Two Kingdoms, One Vision" },
      {
        name: "description",
        content:
          "Our story, values, mission and journey as a cultural and commercial bridge between Morocco and the United Kingdom.",
      },
      { property: "og:title", content: "About Mamlakato Chaye Ltd" },
      {
        property: "og:description",
        content: "Two kingdoms. One vision. A more inclusive future built on trade and culture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const valueIcons = [Star, Shield, Sparkles, Users];

function About() {
  const { d } = useI18n();

  return (
    <>
      <PageHero
        kicker={d.about.kicker}
        title={d.about.title}
        subtitle={d.about.subtitle}
        image={events}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-2xl text-primary">{d.about.storyTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.about.storyP1}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.about.storyP2}</p>
          </div>
          <img
            src={flags}
            alt="Moroccan and British flags side by side"
            width={912}
            height={1104}
            loading="lazy"
            className="h-full max-h-96 w-full rounded-3xl object-cover shadow-lift"
          />
        </div>

        <h2 className="mt-14 font-display text-2xl text-primary">{d.about.valuesTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {d.about.values.map((v, i) => {
            const Icon = valueIcons[i] ?? Star;
            return (
              <div key={v.title} className="rounded-3xl border border-border bg-card p-5 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-primary">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <Quote text={d.about.quote} />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-foreground">
              <Target className="h-5 w-5" />
              {d.about.missionTitle}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.about.mission}</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-foreground">
              <Eye className="h-5 w-5" />
              {d.about.visionTitle}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.about.vision}</p>
          </div>
        </div>

        <h2 className="mt-14 font-display text-2xl text-primary">{d.about.journeyTitle}</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {d.about.journey.map((j) => (
            <li key={j.year} className="rounded-2xl border-t-2 border-gold bg-card p-5 shadow-soft">
              <p className="font-display text-xl text-primary">{j.year}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{j.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{j.desc}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
