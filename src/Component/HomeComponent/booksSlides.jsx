import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { books } from "../../store";

export default function booksSlides() {
  return (
    <div>
      <Swiper
        className="w-full"
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={700}
        loop={books.length > 1}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.7 },
          768: { slidesPerView: 3.8 },
          1024: { slidesPerView: 4.5 }, 
          1440: { slidesPerView: 6.2 }, 
        }}
      >
        {books.map((book) => (
          <SwiperSlide className="flex justify-center" key={book.id}>
            <div className="rounded shadow w-50 ">
              <img
                src={book.image}
                alt={book.name}
                className="h-80 xl:w-full object-cover rounded"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
