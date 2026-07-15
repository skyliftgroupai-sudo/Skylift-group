import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


const slides = [
  {
    title: "Power Your Growth with",
    highlight: "AI-Driven Marketing",
    description:
      "Smarter digital strategies powered by AI, data insights, and automation to help ",
    subdes: "brands scale faster, convert better, and stay ahead of the competition.",
    stat1: { value: "500+", label: "AI-Optimized Campaigns" },
    stat2: { value: "95%", label: "Client Success Rate" },
  },
  {
    title: "Turn Data into",
    highlight: "Real Business Results",
    description:
      "We use AI analytics and predictive insights to identify opportunities, optimize ",
    subdes: "performance, and maximize ROI across every digital channel.",
    stat1: { value: "350+", label: "Brands Scaled" },
    stat2: { value: "3×", label: "Average ROI Growth" },
  },
  {
    title: "Build Smarter",
    highlight: "Customer Experiences",
    description:
      "AI-powered personalization and automation help you connect with the right ",
    subdes: "audience at the right time, turning visitors into loyal customers.",
    stat1: { value: "10M+", label: "Data Points Analyzed" },
    stat2: { value: "4.9", label: "Client Rating" },
  },
];


export const HeroSlider = () => {


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="w-full">
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="flex flex-col items-center text-center space-y-8 max-w-6xl mx-auto">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
              {slide.title}
              <span className="block text-[#00A693] neon-text">
                {slide.highlight}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              {slide.description}
              <br />
              <span className="text-[#00A693]"> {slide.subdes}</span>
            </p>

            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-bold text-[#00A693]">
                  {slide.stat1.value}
                </div>
                <div className="text-sm text-gray-300">
                  {slide.stat1.label}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00A693]">
                  {slide.stat2.value}
                </div>
                <div className="text-sm text-gray-300">
                  {slide.stat2.label}
                </div>
              </div>
            </div>

            <button
              className="
    relative
    bg-[#00A693] text-white font-semibold rounded-xl
    transition-all duration-300
    hover:scale-105 sm:hover:scale-110
    hover:shadow-[0_0_25px_rgba(0,166,147,0.9)]
    shadow-[0_0_12px_rgba(0,166,147,0.6)]
    cursor-pointer

    px-5 py-3
    sm:px-6 sm:py-3
    md:px-8 md:py-4

    text-sm
    sm:text-base
    md:text-lg
  "
            >
              <Link to="book">
                <span className="relative z-10">
                  Book Now
                </span>
              </Link>
            </button>

          </div>
        </div>
      ))}
    </Slider>
  );
};
