import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <Link
      href={brand.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Wabisabi Traditional Recipes on WhatsApp"
    >
      <MessageCircle size={22} strokeWidth={1.8} />
      <span>Let&apos;s talk</span>
    </Link>
  );
}
