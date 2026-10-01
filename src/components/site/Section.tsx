import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-balance-pretty font-display text-4xl leading-tight text-primary sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Quote({ text, author }: { text: string; author?: string }) {
  return (
    <figure className="rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-12">
      <blockquote className="font-display text-2xl leading-snug sm:text-3xl">“{text}”</blockquote>
      {author && (
        <figcaption className="mt-4 text-xs uppercase tracking-[0.24em] text-gold">
          {author}
        </figcaption>
      )}
    </figure>
  );
}
