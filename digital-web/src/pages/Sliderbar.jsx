import React from "react";
import Slider from "react-slick";
import { Trophy } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBar = () => {
  const slides = [
    "🏆 Partnering with Sky Lift Group was the best decision for our online strategy –",
    "🚀 350+ Real Results: 100% Quality Organic Leads – Sky Lift Group –",
    "💡 Transforming Creativity into Conversions – Sky Lift Group SaaS Campaign –",
    "🔥 120% ROI Growth in Just 3 Months – Sky Lift Group AI Success Story –",
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 25000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#0E1525] text-white border-t border-gray-800 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4">
        <div className="bg-[#00A693] hover:bg-[#00947F] text-white font-semibold px-3 sm:px-4 py-1 rounded-sm text-base sm:text-lg whitespace-nowrap">
          350+ Real Results
        </div>

        <div className="flex-1 overflow-hidden w-full">
          <Slider {...settings}>
            {slides.map((text, i) => (
              <div key={i}>
                <div className="flex items-center text-white text-sm sm:text-lg font-medium px-2 sm:px-3 whitespace-nowrap">
                  <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                  {text}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
