import Link from "next/link";

const Hero = () => {
  const features = [
    {
      title: "ON-SITE PRINTER SERVICE",
      description:
        "Professional assistance at your location for quick printer setup and repairs.",
    },
    {
      title: "CERTIFIED TECHNICIANS",
      description:
        "Experienced specialists delivering dependable printer support every visit.",
    },
    {
      title: "SCHEDULED APPOINTMENTS",
      description:
        "Book a convenient service time that works around your daily routine.",
    },
    {
      title: "TRUSTED SOLUTIONS",
      description:
        "Reliable printer services designed to keep your devices working smoothly.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/home-hero-image.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#020817]/85 via-45% to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pt-16 pb-12 lg:min-h-[850px] lg:px-8 lg:pt-20 lg:pb-72">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

            <span>
              PRINTER <span className="text-[#044dd9]">SERVICE</span> EXPERTS
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Professional Printer
            <br />
            <span className="text-blue-500">Care Services</span>
          </h1>

          <div className="mt-6 h-1 w-28 bg-[#044dd9]" />

          <p className="mt-8 max-w-lg text-base leading-7 text-slate-200 lg:text-lg lg:leading-8">
            Schedule professional printer service for installation,
            troubleshooting, maintenance, and wireless setup. Our experienced
            technicians provide dependable on-site support for homes and
            businesses.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/book-an-appointment"
              className="rounded-lg bg-[#044dd9] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#033cbc]"
            >
              BOOK APPOINTMENT
            </Link>

            <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"
                />
              </svg>

              <span className="font-semibold uppercase text-white">
                Certified Support
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE FEATURE CARDS ================= */}
      <div className="relative z-20 px-6 pb-8 lg:hidden">
        <div className="overflow-hidden rounded-2xl bg-[#12328a]/95 shadow-2xl">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-4 p-6 ${
                index !== features.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#044dd9] text-xl font-bold text-white">
                ✓
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP FLOATING CARDS ================= */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden w-full max-w-7xl -translate-x-1/2 px-6 lg:block">
        <div className="grid overflow-hidden rounded-2xl bg-[#044dd9] shadow-2xl md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-5 p-7 ${
                index !== features.length - 1
                  ? "border-r border-white/15"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#044dd9] text-xl font-bold text-white">
                ✓
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;