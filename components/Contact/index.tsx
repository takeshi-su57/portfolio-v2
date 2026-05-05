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
    <div className="h-auto w-screen bg-dark-300 p-2 md:p-5">
      <Container>
        <div className="mb-[20px] flex h-auto w-full flex-col items-start justify-start py-[50px] md:py-5">
          <h1 data-aos="fade-right" className="text-[30px] font-thin">
            Let&apos;s Make The Impossible{" "}
            <span className="font-extrabold text-green-200">Possible.</span>
          </h1>
          <br />
          <a id="contact" />
          <p data-aos="fade-right" className="text-[20px]">
            Start by{" "}
            <button
              type="button"
              className="cursor-pointer text-green-200 underline"
              onClick={openContactForm}
            >
              saying hi
            </button>
          </p>
        </div>
      </Container>

      <ContactForm contactActive={contactActive} closeContactForm={closeContactForm} />

      <div className="fixed bottom-20 right-5 z-[100] flex flex-col items-center justify-center md:bottom-10">
        <button
          type="button"
          className="flex scale-[.80] flex-col items-center justify-center rounded-[50%] bg-dark-400 p-[12px] transition-all hover:scale-[.95]"
          onClick={openContactForm}
        >
          <AiFillMessage className="text-[30px] text-green-200" />
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
        className={`fixed bottom-[90px] right-1 z-[999] w-[380px] rounded-md bg-dark-300 px-3 shadow-xl transition-all md:bottom-[20px] md:right-5 md:w-[350px] ${
          contactActive ? "h-[100vh] max-h-[450px]" : "h-0 overflow-hidden"
        }`}
      >
        <div className="relative flex w-full flex-row items-start justify-start">
          <h1 className="py-4 text-[20px]">Contact Me</h1>
          <button
            type="button"
            onClick={closeContactForm}
            className={`absolute right-[-5px] top-[-16px] rounded-[50%] bg-red-900 p-2 text-[35px] text-red-200 ${
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
          <input
            type="text"
            name="name"
            className="mb-4 w-full rounded-md bg-dark-100 px-2 py-[12px] outline-none"
            placeholder="Full Name"
            value={userInput.name}
            onChange={handleInput}
          />

          <input
            type="email"
            name="email"
            className="mb-4 w-full rounded-md bg-dark-100 px-2 py-[12px] outline-none"
            placeholder="johndoe@mail.com"
            value={userInput.email}
            onChange={handleInput}
          />

          <textarea
            cols={30}
            rows={5}
            name="message"
            className="mb-3 h-full w-full resize-none rounded-md bg-dark-100 px-2 py-2 outline-none"
            placeholder="Message"
            onChange={handleInput}
            value={userInput.message}
          />

          <button
            type="submit"
            className="w-full rounded-md bg-dark-200 px-2 py-3 text-center transition-all hover:bg-dark-400"
          >
            {loading ? <span className="text-green-200">Sending message...</span> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
