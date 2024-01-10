import { Fade } from "react-reveal";
import "../styles/Gallery.css";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const Gallery = () => {
  const c1 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-1.jpg";
  const c2 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-2.jpg";
  const c3 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-3.jpg";
  const c4 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-4.jpg";
  const c5 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-5.jpg";
  const c6 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-6.jpg";
  const c7 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-7.jpg";
  const c8 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/gallery-8.jpg";

  const imgleft =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/tamp-bg-1.png";
  return (
    <div className="container-fluid position-relative   py-5">
      <div className=" imgleft">
        <img src={imgleft} className="img-fluid" alt="img" />
      </div>
      <div className=" imgright">
        <img src={imgleft} className="img-fluid" alt="img" />
      </div>

      <div className="container text-center  pt-5 px-3 mb-0 pb-0">
        <Fade bottom>
          <h1 className=" fh display-1 mt-md-0 mt-5">Wedding Gallery</h1>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </h5>
        </Fade>

        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          speed="1000"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            425: { slidesPerView: 1 },
          }}
          spaceBetween={30}
          className="swiper  mb-2 py-5"
        >
          <SwiperSlide>
            <Fade bottom duration={1000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c1}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Fade bottom duration={2000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c2}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>{" "}
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Fade bottom duration={3000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c3}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>{" "}
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Fade bottom duration={4000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c4}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>{" "}
            </Fade>
          </SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="slide"
          speed="1000"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            425: { slidesPerView: 1 },
          }}
          spaceBetween={30}
          className="swiper  mb-5 py-5"
        >
          <SwiperSlide>
            <Fade bottom duration={1000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c5}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Fade bottom duration={2000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c6}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>{" "}
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Fade bottom duration={3000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c7}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>{" "}
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Fade bottom duration={4000}>
              <div className="card  position-relative border-0 overflow-hidden p-0">
                <img
                  className="card-img-top cardGalleryImg overflow-hidden"
                  src={c8}
                  alt="Title"
                />
                <div className="btnAdd">
                  <button className="btnBookAttendance p-2 px-3  mx-auto btn btn-inline-block">
                    +
                  </button>
                </div>
                <div className="card-body cardGallery text-start">
                  <p className="card-title   fw-light fs-4 h5  ft">
                    Wedding on the beach
                  </p>
                  <p className="card-title   fw-light fs-6 h6">June 28, 2024</p>
                </div>
              </div>{" "}
            </Fade>
          </SwiperSlide>
        </Swiper>
        <button className=" btn btn-lg px-md-5 py-2  btnBookAttendance">
          View All&#10140;
        </button>
      </div>
    </div>
  );
};

export default Gallery;
