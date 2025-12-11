import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import pic from "../assets/Register.png";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      label: "Explore The Latest Reads",
      title: "Dive into New Releases",
      desc: "Discover our curated selection of the newest books from every genre.",
      btn: "Shop Now",
    },
    {
      label: "Premium Collections",
      title: "Exclusive Book Bundles",
      desc: "Save more with curated sets from bestselling authors.",
      btn: "Browse Bundles",
    },
    {
      label: "Get It Faster",
      title: "Lightning-Fast Delivery",
      desc: "Your favorite books delivered at top speed.",
      btn: "Order Now",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[500px] md:h-[505px] flex items-center justify-center">

              {/* Background image */}
              <img
                src={pic}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="relative z-10 text-center max-w-2xl px-6">
                <span className="text-md uppercase tracking-wide text-primary font-semibold">
                  {slide.label}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mt-4 text-[#0d141b] dark:text-white">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  {slide.desc}
                </p>

                <button className="mt-6 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all">
                  {slide.btn}
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
