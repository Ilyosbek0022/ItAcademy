

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import "./ui/slider.css";

export default function CardSlider() {
  const cards = [
    "Real loyihalar",
    "Tajribali mentorla",
    "Sertifikat",
    "Ishga joylashish yordam",
    
  ];
  const infos=[
    "Bizning dasturimizda real loyihalar bilan shugullaning",
"bizdagi tajribalik mentor/uqituvchilar yordamida bilimingizni yanada samarali oshiring",
"uquv amaliyotimizda sertifikatni qulga kiriting,",
"ishga joylashishdan qurqmang uquv kursimiz bunda katta yordam kursatadi",

  ]

  return (
    <div className="container swiper">
      <div className="card-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          speed={700}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((title, i) => (
            <SwiperSlide key={i} className="card-item">
              <a href="#" className="card-link">
                <img src="/next.svg" className="card-image" />

                <p className="badge text-center">{title}</p>

              
                 {infos.map((info,i)=>(
  <h2 className="card-title text-white " key={i}>{info}</h2>
                 ))}
                

                <button className="card-button">→</button>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}