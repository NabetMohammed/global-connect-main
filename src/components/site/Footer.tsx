import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { useI18n } from "@/i18n";
import { site, waLink } from "@/lib/site";

export function Footer() {
  const { d } = useI18n();

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
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl">{d.home.ctaTitle}</h2>
          <p className="mt-2 text-sm text-primary-foreground/75">{d.home.ctaSubtitle}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary"
            >
              {d.cta.contactUs}
            </Link>
            <a
              href={waLink(d.wa.partner)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {d.cta.becomePartner}
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoMark} alt="" width={44} height={44} loading="lazy" className="h-10 w-10" />
              <span className="font-display text-lg">{site.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">{d.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {d.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {d.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
              {site.emails.map((email) => (
                <li key={email} className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a href={`mailto:${email}`} className="break-all hover:text-gold">
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:+${site.phoneRaw}`} dir="ltr" className="hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={waLink(d.wa.general)}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  {d.cta.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="zellige-band mt-10 h-6 rounded-full opacity-40" aria-hidden />
        <p className="mt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {site.name} · {d.contact.company} {site.companyNumber} ·{" "}
          {d.footer.rights}
        </p>
      </div>
    </footer>
  );
}
