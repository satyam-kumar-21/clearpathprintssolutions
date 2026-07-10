import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9V4h12v5M6 18h12v2H6zm-2-7h16a2 2 0 012 2v3H2v-3a2 2 0 012-2z"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  ClearPath<span className="text-blue-500">Printer</span>
                </h2>
                <p className="text-sm text-slate-400">
                  Printer Support & Setup
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              ClearPathPrinter offers easy printer setup, Wi-Fi configuration,
              driver installation and troubleshooting guides to help users keep
              their printers running smoothly.
            </p>
          </div>

          {/* Mobile: Company & Support in one row */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            {/* Company */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Company
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-blue-400 transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-an-appointment"
                    className="hover:text-blue-400 transition"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-white">
                Support
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-blue-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-blue-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="hover:text-blue-400 transition"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="hover:text-blue-400 transition"
                  >
                    Disclaimer
                  </Link>
                </li>

                 <li>
                  <Link
                    href="/refund-cancellation-policy"
                    className="hover:text-blue-400 transition"
                  >
                    Refund cancellation policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">
              <p>support@clearpathprinter.com</p>

              <p>+1 (800) 000-0000</p>

              <p className="leading-7">
                Demo Building
                <br />
                123 Example Avenue
                <br />
                Suite 100
                <br />
                Sample City, XX 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-500">
              ClearPathPrinter
            </span>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-blue-400 transition"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;