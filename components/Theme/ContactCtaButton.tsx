"use client";

interface ContactCtaButtonProps {
  className: string;
}

export default function ContactCtaButton({ className }: ContactCtaButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("open-contact-modal"))
      }
    >
      Contact Me
    </button>
  );
}
