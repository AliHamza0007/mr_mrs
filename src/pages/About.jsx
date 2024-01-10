import { Fade, Zoom } from "react-reveal";
import "../styles/About.css";
import { FaHeart } from "react-icons/fa";

const About = () => {
  const girl =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/bride.jpg";
  const boy =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/Groom.jpg";
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

      {/* //content */}
      <div className="container text-center  pt-5 px-3 mb-0 pb-0">
        <Fade bottom>
          <h1 className="cr fh display-1 mt-md-0 mt-3">Hello!</h1>
          <h4 className="ft">We invite you to celebrate our wedding</h4>
        </Fade>

        <div className="row pt-5">
          <Fade bottom>
            <div className="col-lg-5 col-12 text-end">
              <div className="row">
                <div className="col-md-8">
                  <h3 className="cr ft mb-3 ">Evelyn</h3>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
                <div className="col-md-4">
                  <img src={girl} className="img-fluid h-100" alt="img" />
                </div>
              </div>
            </div>
          </Fade>
          <Zoom>
            <div className="col-lg-2 col-12  my-auto">
              <FaHeart size={90} className="text-danger" />
            </div>
          </Zoom>

          <div className="col-lg-5 col-12 text-start">
            {" "}
            <Fade bottom>
              <div className="row">
                <div className="col-md-4">
                  <img src={boy} className="img-fluid h-100" alt="img" />
                </div>
                <div className="col-md-8">
                  <h3 className="cr ft mb-3 mt-3">Anthony</h3>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
              </div>{" "}
            </Fade>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default About;
