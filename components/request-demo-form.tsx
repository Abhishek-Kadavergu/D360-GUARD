"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@example.com";

export function RequestDemoForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      message ? `Message:\n${message}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    const subject = encodeURIComponent(
      "D360 Guard — Demo / access request"
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-full max-w-lg flex-col gap-5"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-gray-400">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-[#7042f88b] bg-[#030014]/80 px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          placeholder="Jane Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-gray-400">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-[#7042f88b] bg-[#030014]/80 px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm text-gray-400">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className="w-full rounded-lg border border-[#7042f88b] bg-[#030014]/80 px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          placeholder="Your organization"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-gray-400">
          Message{" "}
          <span className="text-gray-600">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-y rounded-lg border border-[#7042f88b] bg-[#030014]/80 px-4 py-3 text-gray-100 placeholder:text-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
          placeholder="Tell us about your use case or questions."
        />
      </div>
      <button
        type="submit"
        className="button-primary mt-2 w-full cursor-pointer rounded-lg py-3 text-center text-lg font-medium text-white shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-all hover:shadow-[0_0_30px_rgba(112,66,248,0.5)]"
      >
        Submit request
      </button>
      {status === "sent" ? (
        <p className="text-center text-sm text-gray-500">
          If your email client did not open, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-purple-400 underline hover:text-purple-300"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
