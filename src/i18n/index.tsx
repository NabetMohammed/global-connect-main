import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, languages, type Dict, type Lang } from "./translations";

const STORAGE_KEY = "mamlakato-lang";

type I18nValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  d: Dict;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "fr" || value === "ar";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) {
      setLangState(stored);
      return;
    }
    const browser = window.navigator.language.slice(0, 2).toLowerCase();
    if (isLang(browser)) setLangState(browser);
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nValue>(
    () => ({ lang, dir, d: dictionaries[lang], setLang }),
    [lang, dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export { languages };
export type { Lang, Dict };
