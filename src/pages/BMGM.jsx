import { Fade } from "react-reveal";
import "../styles/Bride_Groom.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const Bride_Groom = () => {
  const cardBgImg =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/team-1-bg.png";
  const c1 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bridesmaid-1.png";
  const c2 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bridesmaid-team-2.png";

  const c3 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bridesmaid-3.png";

  const c4 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bridesmaid-4.png";

  const c5 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/Groomsmen-1.png";
  const c6 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/Groomsmen-3.png";

  const imgleft =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/tamp-bg-1.png";
  return (
    <div className="container-fluid position-relative py-5">
      <div className=" imgleft">
        <img src={imgleft} className="img-fluid" alt="img" />
      </div>
      <div className=" imgright">
        <img src={imgleft} className="img-fluid" alt="img" />
      </div>

      <div className="container text-center  pt-5 px-3 mb-0 pb-0">
        <Fade bottom>
          <h1 className="display-3 fh  mt-md-0 mt-5">
            Bridesmaids & Groomsmen
          </h1>
          <h5 className="px-lg-5 mx-lg-4 fw-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Ipsum is simply dummy text of the printing and typesetting Ipsum is
            simply dummy text of the printing and typesetting Amelia Alex
            Bridesmaid Amelia Alex Bridesmaid
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
          className="swiper  mb-5 py-5"
        >
          <SwiperSlide>
            <Fade bottom duration={1000}>
              <div className="card  position-relative overflow-hidden">
                <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c1}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">Amelia Alex</h4>
                  <p className="text-white  ft">Bridesmaid</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            <Fade bottom duration={2000}>
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c2}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">Amelia Alex</h4>
                  <p className="text-white  ft">Bridesmaid</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            <Fade bottom duration={3000}>
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c3}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">Amelia Alex</h4>
                  <p className="text-white  ft">Bridesmaid</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            <Fade bottom duration={4000}>
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c4}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">Amelia Alex</h4>
                  <p className="text-white  ft">Bridesmaid</p>
                </div>
              </div>
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
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c6}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">David John</h4>
                  <p className="text-white  ft">Groomsmen</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            <Fade bottom duration={2000}>
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c5}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">David John</h4>
                  <p className="text-white  ft">Groomsmen</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            <Fade bottom duration={3000}>
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c6}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">David John</h4>
                  <p className="text-white  ft">Groomsmen</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
          <SwiperSlide>
            <Fade bottom duration={4000}>
              <div className="card  position-relative overflow-hidden">
              <div className=" d-flex flex-column btnCardIconBriGroDiv ">
                  <button className="btn  mx-auto btnCardIconBriGro  my-2">
                    <FaFacebookF />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro    mb-2">
                    <FaInstagram />
                  </button>
                  <button className="btn    mx-auto btnCardIconBriGro   mb-2">
                    <FaTwitter />
                  </button>
                  <button className="btn   mx-auto  btnCardIconBriGro   ">
                    <FaLinkedinIn />
                  </button>
                </div>

                <div className=" cardBriGro ">
                  <img
                    className="img-fluid  CardBGMainImg overflow-hidden"
                    src={c5}
                    alt="Main"
                  />
                  <img
                    className="img-fluid  CardBGImgLeft"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                  <img
                    className="img-fluid  CardBGImgRight"
                    src={cardBgImg}
                    alt="BGMain"
                  />
                </div>
                <div className="CardBGBody">
                  <h4 className="text-white  ft">David John</h4>
                  <p className="text-white  ft">Groomsmen</p>
                </div>
              </div>
            </Fade>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Bride_Groom;
