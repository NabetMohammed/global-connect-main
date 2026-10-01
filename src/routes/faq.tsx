import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import events from "@/assets/activity-events.jpg";
import { PageHero, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Mamlakato Chaye Ltd" },
      {
        name: "description",
        content:
          "Answers about our activities, partnerships, social inclusion work and how to reach us.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Mamlakato Chaye Ltd" },
      {
        property: "og:description",
        content: "Quick answers about working with Mamlakato Chaye Ltd.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { d } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        kicker={d.faq.kicker}
        title={d.faq.title}
        subtitle={d.faq.subtitle}
        image={events}
      />

      <Section className="max-w-4xl">
        <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          {d.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-start"
                >
                  <span className="min-w-0 text-sm font-semibold text-primary">{item.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
