import Image from "next/image";

export const PoweredBy = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 z-[20]">
      <div className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-sm md:text-base font-semibold tracking-[0.3em] mb-6 text-center">
          POWERED BY
        </h3>
        <Image
          src="/piazza-logo-bg.png"
          alt="Piazza Consulting Group"
          width={240}
          height={80}
          className="object-contain"
          draggable={false}
        />
      </div>
    </section>
  );
};
