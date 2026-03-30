import Image from "next/image";
import Link from "next/link";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/15 bg-[#04020f]/80 px-6 py-8 text-gray-200 backdrop-blur-sm md:px-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:items-start md:justify-items-center md:gap-8">
        <div className="flex w-full max-w-sm flex-col items-center text-center md:max-w-none">
          <Link href="#product" className="inline-flex items-center justify-center gap-3">
            <Image src="/logo.png" alt="D360 Vision logo" width={34} height={34} />
            <p className="text-[15px] font-medium text-gray-100">D360 GUARD -- Enterprise AI</p>
          </Link>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Link
              href="https://www.linkedin.com/company/piazzaconsulting"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-gray-300 transition hover:text-white"
            >
              <RxLinkedinLogo className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/piazzaconsulting/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-gray-300 transition hover:text-white"
            >
              <RxInstagramLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="flex w-full max-w-sm flex-col items-center text-center md:max-w-none">
          <h3 className="text-[15px] font-semibold text-white">Platform</h3>
          <div className="mt-3 flex flex-col items-center gap-3 text-[14px] text-gray-300">
            <Link href="#skills" className="transition hover:text-white">
              Capabilities
            </Link>
            <Link href="#use-cases" className="transition hover:text-white">
              Use Cases
            </Link>
            <Link href="#product" className="transition hover:text-white">
              Get started
            </Link>
          </div>
        </div>

        <div className="flex w-full max-w-sm flex-col items-center text-center md:max-w-none">
          <h3 className="text-[15px] font-semibold text-white">Company</h3>
          <p className="mt-3 text-[15px] font-medium text-gray-100">Piazza Consulting Group</p>
        </div>
      </div>
    </footer>
  );
};
