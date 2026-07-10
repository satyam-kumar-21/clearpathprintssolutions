import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 section-space">
      {/* Glow */}
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="section-shell relative text-center">
        <h1 className="text-h1 text-white">
          Book Your Printer Service
          <span className="block text-blue-100">
            Appointment Today
          </span>
        </h1>

        <p className="text-body mx-auto mt-4 max-w-xl text-blue-100">
          Get fast and reliable printer support from our experts.
        </p>

      <a
  href="#appointmentForm"
  className="btn-secondary mt-8 bg-white text-blue-700 hover:bg-blue-50"
>
  Schedule Now
</a>
      </div>
    </section>
  );
}

export default Hero;