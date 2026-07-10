import Image from "next/image";
import Link from "next/link";

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}

       {/* Left */}

<div>
  <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
    What We Offer
  </span>

  <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
    Complete Printer
    <span className="text-blue-600"> Service</span>
    <br />
    Solutions
  </h2>

  <p className="mt-6 text-lg leading-8 text-slate-600">
    From new printer installation and wireless setup to troubleshooting,
    maintenance, and repair assistance, we provide dependable onsite printer
    services for homes, offices, and businesses.
  </p>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Our appointment-based support makes it easy to get professional assistance
    whenever you need help with setup, connectivity, performance, or everyday
    printer issues.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">
    <Link
      href="/book-an-appointment"
      className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Book Appointment
    </Link>

    <Link
      href="/services"
      className="rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
    >
      View Services
    </Link>
  </div>
</div>

        {/* Right */}

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-2xl">
            <Image
              src="/what-we-offer.webp"
              alt="Printer Support"
              width={700}
              height={650}
              className="h-[520px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;