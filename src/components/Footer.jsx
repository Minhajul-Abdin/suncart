import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      {/*idk*/}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                suncart
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Your one-stop shop for stylish and essential summer products—designed to keep you cool, comfortable, and ready for sunny days.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/generate"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Email: suncart@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Call: +088000000
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  123 Sunshine Avenue, Suite 45<br/>
                  Dhaka 1207<br/>  
                  Bangladesh
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Socials
            </h3>
            <div className="flex gap-2">
              <div className="p-2 text-white rounded-full bg-[#131D4F]"><BsTwitterX /></div>
              <div className="p-2 text-white rounded-full bg-[#131D4F]"><FaLinkedinIn /></div>
              <div className="p-2 text-white rounded-full bg-[#131D4F]"><FaInstagramSquare /></div>
            </div>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start exploring
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Join us today and unlock exclusive deals<br/> your perfect summer starts here!
            </p>

            <Link href={"/signup"}><Button className="btn bg-[#131D4F] text-sm text-white rounded-xl">Sign Up</Button></Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} suncart. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
