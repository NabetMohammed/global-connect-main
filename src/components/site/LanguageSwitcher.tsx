import { useI18n, languages } from "@/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div
      className="flex shrink-0 items-center rounded-full border border-border bg-card p-0.5"
      role="group"
      aria-label="Language"
    >
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-current={lang === l.code}
          title={l.label}
          className={
            "rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors " +
            (lang === l.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary")
          }
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
