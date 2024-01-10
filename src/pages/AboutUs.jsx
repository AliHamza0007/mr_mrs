import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "../styles/About.css";
import { Fade, Rotate, Zoom } from "react-reveal";

const AboutUs = () => {
  const bgimg =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bg-flower.png";
  const boy =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/Groom.jpg";
  const girl =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bride.jpg";
  const img1 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/about-1.jpg";
  return (
    <div className="aboutUsBg  container-fluid pt-5 position-relative">
      <div className="imgtop">
        <img src={bgimg} alt="image " className="img-fluid " />
      </div>
      <div className="imgbottom">
        <img src={bgimg} alt="image " className="img-fluid " />
      </div>
      <div className="container position-relative  py-5">
        <div className="row  align-items-center">
          <div className="col-xl-6 mb-3">
            <div className="border-white border">
              <Zoom>
                <img
                  src={img1}
                  className="img-fluid w-100 img-xl-6"
                  alt="img"
                />
              </Zoom>
            </div>
          </div>
          <div className="col-xl-6 ps-lg-5 px-3">
            <Fade top>
              <h5 className="text-uppercase cr ft mb-4">About Us</h5>
              <h1 className="display-5 fh text-white mb-4">
                We Make Your Every Moment
              </h1>
            </Fade>
            <Fade bottom>
              <p className="text-white fs-5 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </Fade>
            <Rotate>
              <div className="bg-danger  p-4">
                <ul className="nav d-flex mb-4">
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 btn bg-white active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      Bride Info
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 mx-md-3 mx-1 btn  bg-white"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      Groom info
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="me-4">
                            <img
                              src={girl}
                              className="img-fluid h-100 w-100 img-border"
                              alt="image"
                            />
                          </div>
                          <div className="text-start my-auto">
                            <h5 className="text-white ft">Evelyn</h5>
                            <p className="text-white mb-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <div className="d-flex">
                              <FaFacebookF className="me-3 text-white  pointer" />
                              <FaTwitter className="me-3 text-white pointer" />
                              <FaInstagram className="me-3 text-white pointer" />
                              <FaLinkedinIn className=" text-white pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab-pane  show p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="me-4">
                            <img
                              src={boy}
                              className="img-fluid  h-100 w-100 img-border"
                              alt="images"
                            />
                          </div>
                          <div className="text-start my-auto">
                            <h5 className="text-white ft">Anthony</h5>
                            <p className="text-white mb-3">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <div className="d-flex">
                              <FaFacebookF className="me-3 text-white pointer" />
                              <FaTwitter className="me-3 text-white pointer" />
                              <FaInstagram className="me-3 text-white pointer" />
                              <FaLinkedinIn className=" text-white pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </Rotate>

            <div className="d-flex align-items-center mt-5  ">
              <button className="btn  btn-lg btnBookAttendance ">
                Read More
              </button>

              <div className="d-flex align-items-center">
                <div className="d-inline-block ms-4 me-3">
                  <FaPhone
                    size={50}
                    className=" text-success  pointer border border-2 border-white p-2 "
                  />
                </div>
                <div className="d-md-flex  flex-column flex-nowrap ">
                  <h5 className="ft mb-2 ">Call Us Anytime</h5>
                  <h4 className="cr ft mb-0">+123 456 7890</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
