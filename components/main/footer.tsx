import Image from "next/image";
import Link from "next/link";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#030014] border-t border-[#2A0E61] pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 text-gray-400 z-[20]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12 md:mb-16">
          {/* 1. Brand Section */}
          <div className="flex flex-col items-start justify-start">
            <Link href="/#product" className="flex items-center mb-4 group">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                draggable={false}
                className="cursor-pointer w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]"
              />
              <span className="font-bold text-lg sm:text-xl ml-2 sm:ml-3 text-gray-200 group-hover:text-white transition-colors">
                D360 Guard
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed mb-6 max-w-[250px] text-gray-400">
              Securely adopt AI with built-in data protection, governance, and
              compliance.
            </p>
            <Link
              href="/request-demo"
              className="py-2 px-6 border border-[#7042f88b] bg-[rgba(112,66,248,0.1)] text-white text-sm font-medium rounded-md hover:bg-[rgba(112,66,248,0.3)] transition-all"
            >
              Request Demo
            </Link>
          </div>

          {/* 2. Product */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">
              Product
            </h3>
            <ul className="flex flex-col space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/#product"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#use-cases"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/#security"
                  className="text-xs sm:text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">
              Company
            </h3>
            <ul className="flex flex-col space-y-2 sm:space-y-3">
              <li className="text-xs sm:text-sm">Piazza Consulting Group</li>
            </ul>
          </div>

          {/* 4. Connect */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">
              Connect
            </h3>
            <ul className="flex flex-col space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-xs sm:text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <RxInstagramLogo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-[#E1306C] transition-colors" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-xs sm:text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <RxLinkedinLogo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-[#0A66C2] transition-colors" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="mb-4 sm:mb-[20px] text-[12px] sm:text-[13px] md:text-[15px] text-center">
          &copy; John Doe {new Date().getFullYear()} Inc. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};
