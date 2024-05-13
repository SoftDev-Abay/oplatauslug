// import React from "react";
import Ticket from "../../Ticket";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper/modules";

function SuccessfulPay() {
  const slides = [<Ticket />, <Ticket />, <Ticket />];

  return (
    <div style={{ width: "100%" }}>
      <h1
        style={{
          fontSize: "23px",
          color: "rgb(58, 64, 107)",
          fontFamily: "Inter",
        }}
      >
        Оплата завершена!
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "50px",
          flexWrap: "wrap",
          rowGap: "20px",
        }}
      >
        {slides.map((slide) => slide)}
      </div>

      {/* <div style={{ position: "relative" }}>
        <Swiper
          slidesPerView={3}
          // spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
}

export default SuccessfulPay;
