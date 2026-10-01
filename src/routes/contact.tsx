import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

import hero from "@/assets/hero-morocco-uk.jpg";
import { PageHero, Section } from "@/components/site/Section";
import { useI18n } from "@/i18n";
import { site, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Mamlakato Chaye Ltd | London & Morocco",
      },
      {
        name: "description",
        content:
          "Get in touch by WhatsApp on +44 7351 157724, email or post to build opportunities with Mamlakato Chaye Ltd.",
      },
      {
        property: "og:title",
        content: "Contact Mamlakato Chaye Ltd",
      },
      {
        property: "og:description",
        content:
          "WhatsApp, email or visit us at 124-128 City Road, London, EC1V 2NX.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Contact,
});

function Contact() {
  const { d } = useI18n();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  function set(key: keyof typeof form) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setForm((current) => ({
        ...current,
        [key]: e.target.value,
      }));
    };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast.error(
        d.contact.fillAll ||
          "Veuillez remplir tous les champs obligatoires.",
      );
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration manquante.");

      toast.error(
        "Configuration EmailJS manquante. Vérifiez votre fichier .env.local.",
      );
      return;
    }

    try {
      setSending(true);

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject: subject || "Contact website",
          message,
          reply_to: email,
        },
        {
          publicKey,
        },
      );

      console.log("EmailJS success:", result);

      toast.success(
        d.contact.sent ||
          "Votre message a été envoyé avec succès.",
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error("EmailJS error:", error);

      let errorMessage =
        "Une erreur est survenue lors de l'envoi du message.";

      if (
        typeof error === "object" &&
        error !== null &&
        "text" in error &&
        typeof (error as { text?: unknown }).text === "string"
      ) {
        errorMessage = (error as { text: string }).text;
      }

      toast.error(errorMessage);
    } finally {
      setSending(false);
    }
  }

  const details = [
    {
      icon: MapPin,
      label: d.contact.address,
      value: site.address,
      href: site.mapsUrl,
    },
    {
      icon: Mail,
      label: d.contact.email,
      value: site.emails[0],
      href: `mailto:${site.emails[0]}`,
    },
    {
      icon: Mail,
      label: d.contact.email,
      value: site.emails[1],
      href: `mailto:${site.emails[1]}`,
    },
    {
      icon: Phone,
      label: d.contact.phone,
      value: site.phoneDisplay,
      href: waLink(d.wa.general),
      ltr: true,
    },
    {
      icon: Building2,
      label: d.contact.company,
      value: site.companyNumber,
      href: undefined,
    },
  ];

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10";

  return (
    <>
      <PageHero
        kicker={d.contact.kicker}
        title={d.contact.title}
        subtitle={d.contact.subtitle}
        image={hero}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {details.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      dir={item.ltr ? "ltr" : undefined}
                      className="break-words text-sm font-semibold text-primary transition hover:text-gold-foreground"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-primary">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={waLink(d.wa.general)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[oklch(0.62_0.15_150)] px-5 py-4 text-sm font-semibold text-white shadow-soft transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />

              {d.cta.whatsapp}

              <span>·</span>

              <span dir="ltr">
                {site.phoneDisplay}
              </span>
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <h2 className="font-display text-2xl text-primary">
              {d.contact.formTitle}
            </h2>

            <div className="mt-5 space-y-3">
              <input
                className={field}
                type="text"
                name="name"
                placeholder={d.contact.name}
                value={form.name}
                onChange={set("name")}
                autoComplete="name"
                required
              />

              <input
                className={field}
                type="email"
                name="email"
                placeholder={d.contact.emailField}
                value={form.email}
                onChange={set("email")}
                autoComplete="email"
                required
              />

              <input
                className={field}
                type="text"
                name="subject"
                placeholder={d.contact.subject}
                value={form.subject}
                onChange={set("subject")}
              />

              <textarea
                className={`${field} min-h-32 resize-y`}
                name="message"
                placeholder={d.contact.message}
                value={form.message}
                onChange={set("message")}
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />

              {sending
                ? "Envoi en cours..."
                : d.cta.sendMessage}
            </button>

            <p className="mt-3 text-xs text-muted-foreground">
              {d.contact.formNote}
            </p>
          </form>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-soft">
          <h2 className="border-b border-border bg-card px-6 py-4 font-display text-xl text-primary">
            {d.contact.locationTitle}
          </h2>

          <iframe
            title={d.contact.locationTitle}
            src="https://www.google.com/maps?q=124-128%20City%20Road%20London%20EC1V%202NX&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}