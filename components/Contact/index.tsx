"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineClose } from "react-icons/ai";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  hasEmailJsConfig,
} from "@/config";
import { resumeData } from "@/data/resume";
import { Notification, validateEmail } from "@/helpers";

interface ContactInputs {
  name: string;
  email: string;
  message: string;
}

const initialState: ContactInputs = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [contactActive, setContactActive] = useState(false);

  function openContactForm(): void {
    setContactActive(true);
  }

  function closeContactForm(): void {
    setContactActive(false);
  }

  useEffect(() => {
    function handleOpenContact(): void {
      setContactActive(true);
    }

    window.addEventListener("open-contact-modal", handleOpenContact as EventListener);
    return () => {
      window.removeEventListener("open-contact-modal", handleOpenContact as EventListener);
    };
  }, []);

  return (
    <div className="h-auto w-screen bg-[var(--surface)] py-4 md:py-6">
      <div className="editorial-container">
        <section
          id="contact"
          className="mb-4 flex h-auto w-full flex-col items-start justify-start py-8 md:py-6"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
            Contact
          </p>
          <h2 data-aos="fade-right" className="mt-2 text-[32px] font-semibold leading-tight text-[var(--text)] md:text-[40px]">
            Let&apos;s Ship What Matters{" "}
            <span className="text-[var(--accent)]">Possible.</span>
          </h2>
          <p data-aos="fade-right" className="mt-3 text-[18px] text-[var(--text)] md:text-[20px]">
            Need a senior engineer who can scope clearly and deliver reliably?{" "}
            <button
              type="button"
              className="cursor-pointer text-[var(--accent)] underline underline-offset-2"
              onClick={openContactForm}
            >
              Open the contact form
            </button>
          </p>
          <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-[var(--muted)]">
            Share your objective, timeline, and current blockers. I&apos;ll reply with a
            practical delivery plan, realistic next steps, and where I can add the
            most leverage fastest.
          </p>
          <p className="mt-3 max-w-[680px] text-[14px] leading-7 text-[var(--muted)]">
            Prefer direct channels:
          </p>
          <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px]">
            <li>
              <a
                href={`mailto:${resumeData.socials.email}`}
                className="text-[var(--accent)] underline underline-offset-2"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={resumeData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] underline underline-offset-2"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={resumeData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] underline underline-offset-2"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/CV/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent)] underline underline-offset-2"
              >
                Resume PDF
              </a>
            </li>
          </ul>
          <p className="mt-2 max-w-[680px] text-[13px] leading-6 text-[var(--muted)]">
            You can also use the contact form for detailed project briefs.
          </p>
        </section>
      </div>

      <ContactForm contactActive={contactActive} closeContactForm={closeContactForm} />
    </div>
  );
}

interface ContactFormProps {
  contactActive: boolean;
  closeContactForm: () => void;
}

function ContactForm({ contactActive, closeContactForm }: ContactFormProps) {
  const notifier = useMemo(() => new Notification(3000), []);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState<ContactInputs>(initialState);

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }

  async function sendMessage(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!userInput.name.trim()) {
      notifier.error("Name cannot be blank.");
      return;
    }

    if (!userInput.email.trim()) {
      notifier.error("Email cannot be blank.");
      return;
    }

    if (!userInput.message.trim()) {
      notifier.error("Message cannot be blank.");
      return;
    }

    if (!validateEmail(userInput.email)) {
      notifier.error("Email is invalid.");
      return;
    }

    if (!hasEmailJsConfig) {
      notifier.error(
        "EmailJS config is missing. Add NEXT_PUBLIC_EMAILJS_* env values.",
      );
      return;
    }

    const templateParams = {
      from_name: userInput.name,
      sender_email: userInput.email,
      message: userInput.message,
    };

    try {
      setLoading(true);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      notifier.success("Message sent.");
      setUserInput(initialState);
      setLoading(false);
      closeContactForm();
    } catch {
      setLoading(false);
      notifier.error("Could not send message. Please try again.");
    }
  }

  return (
    <div className="w-screen">
      <div
        className={`fixed bottom-[94px] left-3 right-3 z-[999] w-auto rounded-xl transition-all md:bottom-[112px] md:left-auto md:right-6 md:w-[390px] ${
          contactActive
            ? "h-auto max-h-[calc(100vh-140px)] overflow-y-auto border border-[var(--line)] bg-[var(--surface)] px-4 py-3 opacity-100 shadow-[0_18px_50px_rgba(18,16,13,0.14)]"
            : "h-0 overflow-hidden border-0 bg-transparent p-0 opacity-0 shadow-none pointer-events-none"
        }`}
      >
        <div className="relative flex w-full flex-row items-start justify-start pb-2 pt-1">
          <h3 className="py-2 text-[34px] font-semibold leading-none text-[var(--text)] md:text-[30px]">Contact Me</h3>
          <button
            type="button"
            onClick={closeContactForm}
            aria-label="Close contact form"
            className={`absolute right-0 top-0 rounded-full border border-[var(--line)] bg-[var(--surface)] p-2 text-[32px] text-[var(--muted)] transition-colors hover:bg-[var(--line)] ${
              contactActive ? "flex" : "hidden"
            }`}
          >
            <AiOutlineClose />
          </button>
        </div>

        <form
          id="inputs"
          onSubmit={sendMessage}
          className="flex w-full flex-col items-start justify-start"
        >
          <label htmlFor="contact-name" className="sr-only">
            Full name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            className="mb-4 w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[17px] text-[var(--text)] outline-none placeholder:text-[16px] placeholder:font-normal placeholder:text-[#9aa3ad]"
            placeholder="Full Name"
            value={userInput.name}
            onChange={handleInput}
          />

          <label htmlFor="contact-email" className="sr-only">
            Email address
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            className="mb-4 w-full rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[17px] text-[var(--text)] outline-none placeholder:text-[16px] placeholder:font-normal placeholder:text-[#9aa3ad]"
            placeholder="johndoe@mail.com"
            value={userInput.email}
            onChange={handleInput}
          />

          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            cols={30}
            rows={5}
            name="message"
            className="mb-4 h-full w-full resize-none rounded-md border border-[var(--line)] bg-white px-4 py-3 text-[17px] text-[var(--text)] outline-none placeholder:text-[16px] placeholder:font-normal placeholder:text-[#9aa3ad]"
            placeholder="Message"
            onChange={handleInput}
            value={userInput.message}
          />

          <button
            type="submit"
            className="w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-2 py-3 text-center text-[17px] font-medium text-[var(--text)] transition-all hover:bg-[var(--line)]"
          >
            {loading ? <span className="text-[var(--accent)]">Sending message...</span> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
