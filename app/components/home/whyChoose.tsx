import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Easy Appointment Booking",
    description:
      "Choose a convenient schedule that fits your home or office needs.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced Professionals",
    description:
      "Skilled technicians providing dependable printer support and setup.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Quality assistance focused on resolving issues efficiently and correctly.",
  },
  {
    icon: Headphones,
    title: "Friendly Support",
    description:
      "Clear communication and responsive assistance throughout your service.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-2xl">
              <Image
                src="/why-choose.webp"
                alt="Why Choose ClearPathPrinter"
                width={700}
                height={650}
                className="h-[520px] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}

          {/* Content */}

<div className="order-1 lg:order-2">
  <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
    Why Choose Us
  </span>

  <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
    Trusted Printer
    <span className="text-blue-600"> Support</span>
  </h2>

  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
    We make printer service simple with convenient appointments,
    experienced technicians, and dependable onsite assistance for
    homes and businesses.
  </p>

  <div className="mt-8 space-y-4">
    {[
      "Convenient Appointment Scheduling",
      "Experienced Service Professionals",
      "Fast & Reliable Onsite Assistance",
      "Friendly Customer Support",
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          ✓
        </div>

        <span className="font-medium text-slate-800">
          {item}
        </span>
      </div>
    ))}
  </div>

  <Link
    href="/book-an-appointment"
    className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    Book Appointment
  </Link>
</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;