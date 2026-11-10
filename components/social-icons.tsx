import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement>;

/** Instagram brand mark rendered inline, without a lucide-react dependency. */
export function InstagramIcon(props: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Facebook brand mark rendered inline, without a lucide-react dependency. */
export function FacebookIcon(props: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      {...props}
    >
      <path d="M13.5 21v-8.2h2.75l.4-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.5 3.05 15.4 3 14.1 3c-2.7 0-4.55 1.66-4.55 4.7v1.9H6.5v3.2h3.05V21h3.95Z" />
    </svg>
  );
}
