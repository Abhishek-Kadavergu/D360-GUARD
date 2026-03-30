import Link from "next/link";
import Image from "next/image";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#030014] border-t border-[#2A0E61] pt-16 pb-8 text-gray-400 z-[20]">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* 1. Brand Section */}
          <div className="flex flex-col items-start justify-start">
            <Link href="#product" className="flex items-center mb-4 group">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                draggable={false}
                className="cursor-pointer"
              />
              <span className="font-bold text-xl ml-3 text-gray-200 group-hover:text-white transition-colors">
                D360 Guard
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-[250px] text-gray-400">
              Securely adopt AI with built-in data protection, governance, and
              compliance.
            </p>
            {/* <Link
              href="#product"
              className="py-2 px-6 border border-[#7042f88b] bg-[rgba(112,66,248,0.1)] text-white text-sm font-medium rounded-md hover:bg-[rgba(112,66,248,0.3)] transition-all"
            >
              Request Demo
            </Link> */}
          </div>

          {/* 2. Product */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white mb-5">Product</h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="#product"
                  className="text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#use-cases"
                  className="text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-sm text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white mb-5">Company</h3>
            <ul className="flex flex-col space-y-3">
              {/* <li><Link href="#about" className="text-sm text-gray-400 hover:text-white hover:underline transition-all">About</Link></li>
              <li><Link href="mailto:contact@example.com" className="text-sm text-gray-400 hover:text-white hover:underline transition-all">Contact</Link></li>
              <li><Link href="#privacy" className="text-sm text-gray-400 hover:text-white hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link href="#terms" className="text-sm text-gray-400 hover:text-white hover:underline transition-all">Terms of Service</Link></li> */}
              <li>Piazza Consulting Group</li>
            </ul>
          </div>

          {/* 4. Connect */}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-semibold text-white mb-5">Connect</h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <RxInstagramLogo className="mr-2 h-5 w-5 group-hover:text-[#E1306C] transition-colors" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <RxLinkedinLogo className="mr-2 h-5 w-5 group-hover:text-[#0A66C2] transition-colors" />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-[#2A0E61]/50 pt-8 text-sm text-gray-500">
          <p>&copy; 2026 D360 Guard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
