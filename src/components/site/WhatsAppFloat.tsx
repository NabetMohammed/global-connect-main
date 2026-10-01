import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  const { d } = useI18n();

  return (
    <a
      href={waLink(d.wa.general)}
      target="_blank"
      rel="noreferrer"
      aria-label={d.cta.whatsapp}
      className="fixed bottom-24 end-5 z-40 inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.15_150)] px-4 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{d.cta.whatsappShort}</span>
    </a>
  );
}
