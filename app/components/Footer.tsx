import Link from 'next/link';
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/60 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + tagline + socials */}
          <div>
            <div className="font-semibold text-lg">US Market Partner</div>
            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              Your trusted partner for US market expansion.
            </p>
            <div className="mt-4 flex items-center gap-3 text-gray-500">
              <Link
                href={'https://www.linkedin.com/' as any}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 bg-white text-gray-500 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.05]"
              >
                <FaLinkedinIn className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href={'https://twitter.com/' as any}
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter / X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 bg-white text-gray-600 hover:text-black hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.05]"
              >
                <FaXTwitter className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href={'https://www.youtube.com/' as any}
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 bg-white text-gray-600 hover:text-[#FF0000] hover:bg-[#FF0000]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000]/30 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.05]"
              >
                <FaYoutube className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href={'https://www.facebook.com/' as any}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 bg-white text-gray-600 hover:text-[#1877F2] hover:bg-[#1877F2]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]/30 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.05]"
              >
                <FaFacebookF className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href={'https://www.instagram.com/' as any}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 bg-white text-gray-600 hover:text-[#E4405F] hover:bg-[#E4405F]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4405F]/30 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.05]"
              >
                <FaInstagram className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="text-sm">
            <div className="font-medium text-gray-900">Quick Links</div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={'/services' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={'/sectors' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  href={'/countries' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  href={'/blog' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={'/contact' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Policies */}
          <nav aria-label="Policies" className="text-sm">
            <div className="font-medium text-gray-900">Policies</div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={'/terms-and-conditions' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={'/privacy-policy' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={'/refund-policy' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href={'/cookie-policy' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href={'/disclaimer' as any}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <nav aria-label="Social Media" className="text-sm">
            <div className="font-medium text-gray-900">Social Media</div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={'https://www.linkedin.com/' as any}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={'https://twitter.com/' as any}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.youtube.com/' as any}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.facebook.com/' as any}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={'https://www.instagram.com/' as any}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600">
          © {new Date().getFullYear()} USMarketPartner.com | All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}
