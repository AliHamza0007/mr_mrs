import "../styles/Footer.css";
import { Link } from "react-scroll";
import Flash from "react-reveal/Flash";
import Tada from "react-reveal/Tada";

const Footer = () => {
  return (
    <Flash>
      <div className="bgImgFooter">
        <div className="container py-5">
          <div className="row  pt-5 px-3">
            <div className="col-md-4 col-12 mb-3">
              <h4 className="text-white text-md-start text-center ft mb-3">
                Links
              </h4>
              <ul className="navbar-nav footerNav flex-column text-md-start text-center ">
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="about"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="story"
                    aria-current="page"
                  >
                    Story
                  </Link>
                </li>
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link  "
                    to="timeLine"
                    aria-current="page"
                  >
                    Timeline
                  </Link>
                </li>
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link  "
                    to="gallery"
                    aria-current="page"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="footer-item px-2 ">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="rsvp"
                    aria-current="page"
                  >
                    RSVP
                  </Link>
                </li>
                <li className="footer-item px-2 ">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="rsvp"
                    aria-current="page"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="footer-item px-2 ">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="timeLine"
                    aria-current="page"
                  >
                    Wsedding Date
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12 text-center mb-3">
              <h4 className="cr ft">
                <b className="text-white fh">Mr</b>&
                <b className="text-white fh">Mrs</b>
              </h4>
              <p className="text-white fs-5 fw-light mt-3 overflow-auto  ">
                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
                tempor dui, non consectetur enim. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy
              </p>
            </div>
            <div className="col-md-4 col-12 text-white  text-md-end text-center mb-3">
              <h4 className=" ft mb-3">Follow Us</h4>
              <ul className="navbar-nav mb-3 footerNav flex-column text-md-end text-center ">
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="about"
                    aria-current="page"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="about"
                    aria-current="page"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="about"
                    aria-current="page"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
              <h4 className=" ft mb-3">Contact Us</h4>
              <ul className="navbar-nav mb-3 footerNav flex-column text-md-end text-center ">
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="about"
                    aria-current="page"
                  >
                    <i className="fa fa-envelope text-white"></i>{" "}
                    info@example.com
                  </Link>
                </li>
                <li className="footer-item px-2">
                  <Link
                    smooth
                    spy
                    activeClass="active"
                    offset={50}
                    duration={500}
                    className="footer-link "
                    to="about"
                    aria-current="page"
                  >
                    <i className="fa fa-phone text-white"></i> (+012) 3456 7890
                    123
                  </Link>
                </li>{" "}
              </ul>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col text-center">
              <i className="fa footerIcon fa-facebook fs-5"></i>
              <i className="fa footerIcon fa-twitter fs-5"></i>
              <i className="fa footerIcon fa-instagram fs-5"></i>
              <i className="fa footerIcon fa-skype fs-5"></i>
            </div>
          </div>
        </div>

        <div className=" bg-dark">
          <Tada>
            <div className="container py-4 ">
              <div className="row ">
                <div className="col-12 d-md-flex justify-content-md-between justify-content-center text-center text-white fw-light fs-5">
                  <h4 className="fw-light fs-5">
                    <span className="text-dark pointer rounded-circle bg-white  px-1 fs-6">
                      &copy;
                    </span>
                    <span className="pointer ps-2">
                      <b className="cr  fh">Mr</b>&
                      <b className="cr   fh">Mrs</b>
                    </span>
                    <span>, All right Reserved.</span>
                  </h4>
                  <h4 className="fw-light fs-5">
                    Designed By
                    <span className="cr pointer border-bottom border-white">
                      Explore Logics
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </Tada>
        </div>
      </div>{" "}
    </Flash>
  );
};

export default Footer;
