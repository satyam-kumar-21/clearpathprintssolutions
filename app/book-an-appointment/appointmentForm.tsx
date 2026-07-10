import React from "react";
import Image from "next/image";

function AppointmentForm() {
  return (
    <section
      id="appointmentForm"
      className="scroll-mt-24 bg-slate-50 py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900">
              Book an Appointment
            </h2>

            <p className="mt-3 text-slate-600">
              Fill out the form and our support team will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Printer Model Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. HP LaserJet Pro M404dn"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Appointment
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <Image
              src="/why-choose.webp"
              alt="Printer Service"
              width={550}
              height={550}
              className="relative z-10 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AppointmentForm;