import type { Metadata } from "next";
import Link from "next/link";

import { RequestDemoForm } from "@/components/request-demo-form";

export const metadata: Metadata = {
  title: "Request a demo | D360 Guard",
  description:
    "Request a demo or get access to D360 Guard — enterprise AI security for your organization.",
};

export default function RequestDemoPage() {
  return (
    <main className="relative z-[20] min-h-screen w-full bg-[#030014] px-6 pb-20 pt-28 text-gray-200">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 transition hover:text-purple-400"
        >
          &larr; Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-semibold text-white md:text-5xl">
          Request a demo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            or get access
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-400">
          Share a few details and we&apos;ll follow up about D360 Guard for your
          team.
        </p>

        <RequestDemoForm />
      </div>
    </main>
  );
}
