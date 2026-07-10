import React from "react";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/book-appointment-bg.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101418]/95 via-[#101418]/80 to-transparent" />

      <div className="section-shell relative z-10 flex min-h-[520px] items-center py-16 lg:min-h-[620px]">
        <div className="max-w-xl">

          {/* Small Label */}
          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-600/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            Professional Printer Support
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-h1 text-white">
            Book Your Printer
            <span className="mt-2 block text-blue-400">
              Service Appointment
            </span>
          </h1>

    

          {/* Phone */}
          <div className="mt-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-300">
              Need Immediate Assistance?
            </p>

            <a
              href="tel:+18773230888"
              className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-2xl font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              📞 +1 (000) 000-0000
            </a>
          </div>

          {/* Features */}
          <div className="mt-8 space-y-2 text-slate-200">
            <p>✓ On-site printer installation & setup</p>
            <p>✓ Fast troubleshooting & repair</p>
            <p>✓ Certified printer technicians</p>
            <p>✓ No hidden charges • Doorstep service</p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#appointmentForm"
              className="btn-primary inline-flex rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;