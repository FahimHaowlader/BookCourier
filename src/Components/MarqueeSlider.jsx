import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <section className="w-full  py-4 lg:py-8 xl:py-9 bg-white dark:bg-white overflow-hidden">
      <Marquee 
        className="h-16  marquee text-4xl lg:text-5xl font-black uppercase tracking-widest text-black"
        pauseOnHover={true}
      >
        <span>BOOKCOURIER · FAST DELIVERY · THOUSANDS OF BOOKS · </span>
        <span>BOOKCOURIER · FAST DELIVERY · THOUSANDS OF BOOKS · </span>
        <span>BOOKCOURIER · FAST DELIVERY · THOUSANDS OF BOOKS · </span>
      </Marquee>
    </section>
  );
}

export default MarqueeSlider;

