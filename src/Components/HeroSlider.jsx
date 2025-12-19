import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import pic from "../assets/heroImage.avif";
import pic2 from "../assets/pic12.avif";
import pic3 from "../assets/pic11.avif";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      label: "Explore The Latest Reads",
      title: "Dive into New Releases",
      desc: "Discover our curated selection of the newest books from every genre.",
      btn: "Shop Now",
      pic: pic,
    },
    {
      label: "Premium Collections",
      title: "Exclusive Book Bundles",
      desc: "Save more with curated sets from bestselling authors.",
      btn: "Browse Bundles",
      pic: pic3,
    },
    {
      label: "Get It Faster",
      title: "Lightning-Fast Delivery",
      desc: "Your favorite books delivered at top speed.",
      btn: "Order Now",
      pic: pic2,
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
                src={slide.pic}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="relative z-10 text-center max-w-2xl px-6">
                <span className="text-md uppercase tracking-wide text-white font-semibold">
                  {slide.label}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold mt-4 text-[#0d141b] dark:text-white">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg text-white">
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
