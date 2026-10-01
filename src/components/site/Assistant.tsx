import { Bot, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoMark from "@/assets/logo-mark.png";
import { useI18n } from "@/i18n";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export function Assistant() {
  const { d, lang, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, error]);

  async function submit(text: string) {
    const value = text.trim();
    if (!value || busy) return;

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: value,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError(null);
    setBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value, lang }),
      });

      const raw = await response.text();
      let data: any;
      try {
        data = JSON.parse(raw);
      } catch {
        data = { detail: raw };
      }

      if (!response.ok) {
        const detail = data?.detail || data?.error || `HTTP ${response.status}`;
        throw new Error(`[${response.status}] ${detail}`);
      }

      if (!data?.message) {
        throw new Error("The server returned no AI message.");
      }

      setMessages((current) => [
        ...current,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          text: data.message,
        },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("AI assistant error:", err);
      setError(message);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 end-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
        >
          <Bot className="h-5 w-5" />
          <span className="hidden sm:inline">{d.assistant.launcher}</span>
        </button>
      )}

      {open && (
        <div
          dir={dir}
          className="fixed bottom-4 end-4 z-50 flex h-[560px] max-h-[85vh] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lift"
        >
          <div className="flex items-start gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <img src={logoMark} alt="" width={36} height={36} className="h-8 w-8 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-base">{d.assistant.title}</p>
              <p className="truncate text-[11px] text-primary-foreground/70">
                {d.assistant.subtitle}
              </p>
            </div>
            <button
              type="button"
              aria-label={d.assistant.close}
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full hover:bg-primary-foreground/15"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            <p className="text-sm leading-relaxed text-foreground/85">{d.assistant.greeting}</p>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {d.assistant.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void submit(s)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-primary hover:bg-secondary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m) =>
              m.role === "user" ? (
                <div key={m.id} className="flex justify-end">
                  <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl bg-primary px-3.5 py-2.5 text-sm text-primary-foreground">
                    {m.text}
                  </p>
                </div>
              ) : (
                <p
                  key={m.id}
                  className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90"
                >
                  {m.text}
                </p>
              ),
            )}

            {busy && (
              <p className="animate-pulse text-sm text-muted-foreground">{d.assistant.thinking}</p>
            )}

            {error && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
                <p className="font-semibold">AI error</p>
                <p className="mt-1 whitespace-pre-wrap break-words">{error}</p>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submit(input);
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={d.assistant.placeholder}
              className="min-w-0 flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              aria-label={d.assistant.send}
              disabled={busy || !input.trim()}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-50"
            >
              <Send className="h-4 w-4" style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
