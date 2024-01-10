import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Home.css";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const slide1 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/carousel-1.jpg";
  const slide3 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/carousel-3.png";
  const slide2 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/carousel-2.jpg";
  return (
    <div>
      <Swiper
        className="swiper swiperHome py-5"
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed="1000"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img className="slide1 position-relative" src={slide1} alt="slide1" />
          <div className="slideContent align-items-center text-center ">
            <div className="zoom">
              <h4
                className="d-inline-block ft  border-end-0 border-start-0 border border-light p-2 mb-4"
              >
                WE ARE GETTING MARRIED
              </h4>
              <h1 className="d-flex fh display-1 text-capitalize  mb-3">
                Evelyn
                <span className="px-4 pt-0">
                  <FaHeart className="text-danger  d-inline" />
                </span>
                Anthony
              </h1>
              <div className="d-inline-block border-end-0 border border-start-0 border-light p-2 mb-4">
                <h4 className="text-white ft text-uppercase fw-bold mb-0">
                  June 28 2024
                </h4>
              </div>
              <button className="btn  btn-lg px-4 bgred d-block  mx-auto ">
                RSVP Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide1 position-relative" src={slide2} alt="slide1" />
          <div className="slideContent align-items-center text-center ">
            <div className="zoom">
              <h4 className="d-inline-block ft border-end-0 border-start-0 border border-light p-2 mb-4">
                WE ARE GETTING MARRIED
              </h4>
              <h1 className="d-flex fh display-1 text-capitalize  mb-3">
                Evelyn
                <span className="px-4 pt-0">
                  <FaHeart className="text-danger  d-inline" />
                </span>
                Anthony
              </h1>
              <div className="d-inline-block border-end-0 border border-start-0 border-light p-2 mb-4">
                <h4 className="text-white ft text-uppercase fw-bold mb-0">
                  June 28 2024
                </h4>
              </div>
              <button className="btn  btn-lg px-4 bgred d-block  mx-auto ">
                RSVP Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slide1 position-relative" src={slide3} alt="slide1" />
          <div className="slideContent align-items-center text-center ">
            <div className="zoom">
              <h4 className="d-inline-block ft border-end-0 border-start-0 border border-light p-2 mb-4">
                WE ARE GETTING MARRIED
              </h4>
              <h1 className="d-flex fh display-1 text-capitalize  mb-3">
                Evelyn
                <span className="px-4 pt-0">
                  <FaHeart className="text-danger  d-inline" />
                </span>
                Anthony
              </h1>
              <div className="d-inline-block border-end-0 border border-start-0 border-light p-2 mb-4">
                <h4 className="text-white ft text-uppercase fw-bold mb-0">
                  June 28 2024
                </h4>
              </div>
              <button className="btn  btn-lg px-4 bgred d-block  mx-auto ">
                RSVP Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
