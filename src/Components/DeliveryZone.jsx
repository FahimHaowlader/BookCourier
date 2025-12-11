import React from "react";
import { MapPin, Truck, Clock } from "lucide-react";

const DeliveryZone = () => {
  const zones = [
    {
      icon: <MapPin className="w-10 h-10 text-primary" />,
      title: "Available Zones",
      desc: "We currently deliver in all major districts and metropolitan areas.",
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Fast Dispatch",
      desc: "Orders are dispatched within 24 hours from our local hubs.",
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Same-day Delivery",
      desc: "Selected cities can enjoy same-day or next-day delivery.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-20 bg-white dark:bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] dark:text-white">
          Our Delivery Zone
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          We deliver fast — and we deliver everywhere.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {zones.map((zone, index) => (
          <div
            key={index}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
          >
            <div className="flex justify-center mb-5">{zone.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#0d141b] dark:text-white">
              {zone.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">{zone.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryZone;
