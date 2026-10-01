import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import logoMark from "@/assets/logo-mark.png";
import { useI18n } from "@/i18n";
import { site, waLink } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { d, dir } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: d.nav.home },
    { to: "/about", label: d.nav.about },
    { to: "/activities", label: d.nav.activities },
    { to: "/team", label: d.nav.team },
    { to: "/partners", label: d.nav.partners },
    { to: "/faq", label: d.nav.faq },
    { to: "/contact", label: d.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="" width={40} height={40} className="h-9 w-9 shrink-0" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-base font-semibold text-primary sm:text-lg">
              {site.name}
            </span>
            <span className="truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Morocco × United Kingdom
            </span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-2 lg:ms-0">
          <LanguageSwitcher />
          <a
            href={waLink(d.wa.general)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {d.cta.exploreMission}
            <ArrowRight className="h-4 w-4" style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }} />
          </a>
          <button
            type="button"
            aria-label={d.nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
