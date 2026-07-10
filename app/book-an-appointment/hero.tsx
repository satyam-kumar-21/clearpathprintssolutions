import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 py-16">
      {/* Glow */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Book Your Printer Service
          <span className="block text-blue-100">
            Appointment Today
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base text-blue-100 sm:text-lg">
          Get fast and reliable printer support from our experts.
        </p>

      <a
  href="#appointmentForm"
  className="mt-7 inline-block cursor-pointer rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
>
  Schedule Now
</a>
      </div>
    </section>
  );
}

export default Hero;