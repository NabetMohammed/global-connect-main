import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import panorama from "@/assets/heritage-panorama.jpg";
import anouarPortrait from "@/assets/team/el-mezouari-anouar.png";
import azizaPortrait from "@/assets/team/filali-sadiq-aziza.png";
import naimaPortrait from "@/assets/team/naima-laktati.png";
import soumiaPortrait from "@/assets/team/soumia-allali.png";
import soumiyaPortrait from "@/assets/team/soumiya-el-haddouni.png";
import zinebPortrait from "@/assets/team/zineb-el-yahiaoui.png";
import { PageHero, Quote, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";
import { teamMembers } from "@/lib/site";

const portraits = {
  naima: naimaPortrait,
  aziza: azizaPortrait,
  soumia: soumiaPortrait,
  soumiya: soumiyaPortrait,
  anouar: anouarPortrait,
  zineb: zinebPortrait,
} satisfies Record<(typeof teamMembers)[number]["key"], string>;

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Mamlakato Chaye Ltd" },
      {
        name: "description",
        content:
          "Meet the people behind Mamlakato Chaye Ltd: founder, cultural ambassadors, organisers and coordinators.",
      },
      { property: "og:title", content: "Our Team | Mamlakato Chaye Ltd" },
      {
        property: "og:description",
        content: "Dedicated people, shared values and a passion for Morocco–UK cooperation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Team,
});

function Team() {
  const { d } = useI18n();

  return (
    <>
      <PageHero
        kicker={d.team.kicker}
        title={d.team.title}
        subtitle={d.team.subtitle}
        image={panorama}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((m) => (
            <article
              key={m.key}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lift motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={portraits[m.key]}
                  alt={m.name}
                  width={720}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-6 text-center sm:px-6">
                <span className="mx-auto mb-4 h-px w-10 bg-gold" aria-hidden="true" />
                <h2 className="font-display text-2xl leading-tight text-primary">{m.name}</h2>
                <p className="mt-2 min-h-10 text-sm font-semibold leading-snug text-gold-foreground">
                  {d.team.roles[m.key]}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {d.team.bios[m.key]}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Quote text={d.team.quote} author="Mamlakato Chaye Ltd" />
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {d.cta.contactUs}
          </Link>
        </div>
      </Section>
    </>
  );
}
