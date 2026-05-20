"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
import { Container } from "@/components";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  hasEmailJsConfig,
} from "@/config";
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

  return (
    <div className="h-auto w-screen bg-[var(--surface)] px-2 py-4 md:px-0 md:py-6">
      <Container>
        <section
          id="contact"
          className="mb-4 flex h-auto w-full flex-col items-start justify-start py-8 md:py-6"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
            Contact
          </p>
          <h2 data-aos="fade-right" className="mt-2 text-[32px] font-semibold leading-tight text-[var(--text)] md:text-[40px]">
            Let&apos;s Make The Impossible{" "}
            <span className="text-[var(--accent)]">Possible.</span>
          </h2>
          <p data-aos="fade-right" className="mt-3 text-[18px] text-[var(--text)] md:text-[20px]">
            Start by{" "}
            <button
              type="button"
              className="cursor-pointer text-[var(--accent)] underline underline-offset-2"
              onClick={openContactForm}
            >
              saying hi
            </button>
          </p>
          <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-[var(--muted)]">
            Founders, recruiters, and Web3/AI teams are welcome. Share your goal,
            timeline, and current constraints, and I&apos;ll respond with a practical
            delivery path.
          </p>
        </section>
      </Container>

      <ContactForm contactActive={contactActive} closeContactForm={closeContactForm} />

      <div className="fixed bottom-20 right-5 z-[100] flex flex-col items-center justify-center md:bottom-10">
        <button
          type="button"
          aria-label="Open contact form"
          className="flex scale-[.85] flex-col items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] p-3 text-[var(--accent)] shadow-sm transition-all hover:scale-100 hover:bg-[var(--line)]"
          onClick={openContactForm}
        >
          <AiFillMessage className="text-[28px]" />
        </button>
      </div>
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
        className={`fixed bottom-[90px] left-2 right-2 z-[999] w-auto rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 shadow-xl transition-all md:bottom-[20px] md:left-auto md:right-5 md:w-[360px] ${
          contactActive
            ? "h-auto max-h-[calc(100vh-120px)] overflow-y-auto md:max-h-[450px]"
            : "h-0 overflow-hidden"
        }`}
      >
        <div className="relative flex w-full flex-row items-start justify-start">
          <h3 className="py-4 text-[20px] font-semibold text-[var(--text)]">Contact Me</h3>
          <button
            type="button"
            onClick={closeContactForm}
            aria-label="Close contact form"
            className={`absolute right-[-5px] top-[-16px] rounded-full border border-[var(--line)] bg-[var(--surface)] p-2 text-[32px] text-[var(--muted)] ${
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
            className="mb-4 w-full rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--text)] outline-none"
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
            className="mb-4 w-full rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--text)] outline-none"
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
            className="mb-3 h-full w-full resize-none rounded-md border border-[var(--line)] bg-white px-3 py-3 text-[var(--text)] outline-none"
            placeholder="Message"
            onChange={handleInput}
            value={userInput.message}
          />

          <button
            type="submit"
            className="w-full rounded-md border border-[var(--line)] bg-[var(--surface)] px-2 py-3 text-center text-[var(--text)] transition-all hover:bg-[var(--line)]"
          >
            {loading ? <span className="text-[var(--accent)]">Sending message...</span> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
