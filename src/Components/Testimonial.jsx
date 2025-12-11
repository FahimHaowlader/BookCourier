import React from "react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Avid Reader",
    text: "BookCourier has completely changed my reading habits. I'm reading more than ever before because it's just so convenient. The selection is incredible!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF8uKdDOrTlAtNV-Xy_bACn51_OjARgG3y4lLEUKphmMXRvmqsONOUCc1u6-Eh9b_mkn4l9tADcmYdmoka_ousfbtJRF4_rruPiT8PWbgroQ6qwMhGKCZ9cBHefdCNfffVwUz6KWkJuxGKgExCjZJMxivLyjeau7wEJGD0tACbQnzXv88RyrcilMjHaiCtbN97NRfe3MiXv7LkYuOkKiolgQixEC5vQRg2jaxn_oRgB4To9tjYpdq7EDQfoNJVA2-ZCMuSESXGP4U",
  },
  {
    name: "Michael B.",
    role: "Book Club President",
    text: "As a busy professional, I never had time to go to the library. This service is a lifesaver. Fast, reliable, and the app is super easy to use. Highly recommend!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTnT-4DmyKmTwsL62W1o_rrbF3SfEnd15qTZLIrKoun07sgaMwY0MuvB1YeuFkmF7DkcCqh3YdWNJrrAIfE572pWCRoIu0xKGbDXDbUvb-un0wKryG25ec4WkFI1sENUsZtHH1C0cpKndX-1Spjn2Or8rppDJ4gBb5surQTT-YHYLRR14k_tRdsqjPvBl23-AbF5BHffm89kyTv0YaW9VeIDVAgmL7IPX52bHRYbkQiOa0CcFpjRD3guiSlR3Skelpt9BPg38mB5g",
  },
  {
    name: "Emily R.",
    role: "Parent & Educator",
    text: "My kids are so excited every time the BookCourier package arrives. It's like a special gift just for them. It's fostered a real love for reading in our home.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEv5DmconfEMhi5fs8PE0O29QXsM1_xiLo0JlEvd2MgZ0XBX-J6ZQjyDAs3bXG0TyfGZqr33LoaWEutI6DeSbwoz-0f7czKAqBEhCfcRUAUnCt15QOp2T2STYcMo5I0rZXDsOEbEJCwMxUp7lOJ5HhK80xYUkhvltvpQ9rjcOrZAF33EJX8sdujNf7Nww3S38Mu7xYeMCntcJrs4q7nD97A2MJMBmMUKVieqJQsaiTThmnsJzYFzt1GeqqsgLunCeR2s22rIKuTbU",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl  font-bold leading-tight tracking-tight text-[#0d141b] dark:text-slate-50">
          What Our Readers Are Saying
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 mx-auto max-w-2xl px-2">
          We're proud to have delivered thousands of stories. Here's what some of our members have to say.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-16 lg:mx-24 xl:mx-40">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-slate-800 dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex-grow">
              <p className="text-slate-600 dark:text-slate-300">"{t.text}"</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-200 flex items-center gap-4">
              <img alt={t.name} className="w-12 h-12 rounded-full object-cover" src={t.img} />
              <div>
                <p className="font-bold text-[#0d141b] dark:text-slate-50">{t.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
