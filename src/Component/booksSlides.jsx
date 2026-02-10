import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BooksSlides({ books = [] }) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {books.map((book) => {
          const images = Array.isArray(book.bookImage) ? book.bookImage : [];
          const img =
            images.find((i) => i.type === "main")?.image ||
            images[0]?.image ||
            "/public/533643aa8db82414f48d43a992d009dda3961386.png";
          return (
            <SwiperSlide key={book.bookId}>
              <div className=" rounded shadow">
                <img
                  src={img}
                  alt={book.bookName}
                  className="h-40 w-full object-cover rounded"
                  onError={(e) => {
            e.currentTarget.onerror = null; 
            e.currentTarget.src = "/placeholder.png";
          }}
                />
                 <p className="mt-2 text-sm font-semibold">{book.bookName}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
