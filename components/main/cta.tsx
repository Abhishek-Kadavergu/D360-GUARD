import Link from "next/link";

export const Cta = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-5 text-center z-[20]">
      <h2 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
        Adopt AI With Confidence.
      </h2>
      <p className="text-gray-300 text-lg md:text-xl max-w-[700px] mb-10">
        D360 Guard ensures your organization can innovate with AI &mdash;
        without compromising security, privacy, or compliance.
      </p>
      <Link
        href="/request-demo"
        className="py-3 px-8 button-primary inline-block text-center text-white cursor-pointer rounded-lg text-lg font-medium shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] transition-all"
      >
        Request Demo
      </Link>
    </section>
  );
};
