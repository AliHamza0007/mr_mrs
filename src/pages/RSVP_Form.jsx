import { Fade } from "react-reveal";
import "../styles/RSVP.css";
const RSVP_Form = () => {
  const imgleft =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/tamp-bg-1.png";
  return (
    <div className="RSVPBG container-fluid position-relative  py-5">
      <div className=" imgleft">
        <img src={imgleft} className="img-fluid" alt="img" />
      </div>
      <div className=" imgright">
        <img src={imgleft} className="img-fluid" alt="img" />
      </div>

      {/* //Content */}

      <div className="container mt-5 py-5 ">
        <Fade top duration={1000}>
          <h1 className="fh display-2 cr text-center mb-5">RSVP Form</h1>
        </Fade>

        <form className="col-md-11 col-12 mx-auto">
          <div className="row  px-md-5 py-5  px-2 border-secondary rsvpForm  position-relative">
            <p className="cr fw-bold px-md-3 text-center border-secondary  px-2 py-2  bd">
              Kindly respond by June 25, 2024 we look forward to celebrating
              with you!
            </p>
            <Fade>
              <div className="col-lg-6 mt-md-0 mt-4">
                <div className="form-group">
                  <label className="form-label ">First Name</label>
                  <input
                    type="text"
                    className="form-control py-3 border-0 input"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="form-group">
                  <label className="form-label ">Last Name</label>
                  <input
                    type="text"
                    className="form-control input py-3 border-0"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="col-lg-6 ">
                <div className="form-group">
                  <label className="form-label ">Enter Your Email</label>
                  <input
                    type="email"
                    className="form-control input py-3 border-0"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="form-group">
                  <label className="form-label">Enter Your Phone</label>
                  <input
                    type="text"
                    className="form-control input py-3 border-0"
                    placeholder="Enter Your Phone"
                  />
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label ">Number Of Guests</label>
                  <select
                    className="form-control input bg-white  py-3 border-0"
                    placeholder="Number Of Guests"
                  >
                    <option>Only Me</option>
                    <option>02 Guests</option>
                    <option>03 Guests</option>
                    <option>04 Guests</option>
                  </select>
                </div>
              </div>
            </Fade>{" "}
            <Fade>
              {" "}
              <div className="col-12 mb-3">
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="text"
                    className="form-control input border-0"
                    cols={30}
                    rows={5}
                    placeholder="Message"
                  />
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="col-12 ">
                <div className="text-center border border-secondary p-4 my-4 position-relative">
                  <div className="fw-bold cr bd-sm text-center  border-secondary p-2">
                    Will you be attending?
                  </div>

                  <div className="mt-4">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex justify-content-center">
                          <div className="form-check d-flex">
                            <input
                              className="form-check-input me-2 "
                              type="radio"
                              name="radio"
                            />
                            <label className="form-check-label  ">
                              Accepts With Pleasure!
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex justify-content-center">
                          <div className="form-check d-flex">
                            <input
                              className="form-check-input me-2 cr"
                              type="radio"
                              name="radio"
                            />
                            <label className="form-check-label ">
                              Declines With Regret
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <div className="col-12 text-center ">
              <Fade>
                {" "}
                <button className="btnBookAttendance px-md-5 p-2 rounded-0 btn btn-lg mx-auto d-block">
                  Submit Now
                </button>
              </Fade>
            </div>
          </div>
        </form>
      </div>

      <div className="container ">
        <div className="row  gap-5 justify-content-center align-items-center">
          <Fade duration={1000}>
            <div
              className="col-lg-3 col-12 text-center border border-secondary p-4 "
              style={{ borderStyle: "double!important" }}
            >
              <h4 className="ft fw-light">Call Us Now</h4>
              +123 456 7890
            </div>
          </Fade>
          <Fade duration={2500}>
            <div
              className="col-lg-3 col-12 text-center border border-secondary p-4 "
              style={{ borderStyle: "double!important" }}
            >
              <h4 className="ft fw-light">When</h4>
              28. June 2024. at 7 o’clock in the evening
            </div>
          </Fade>
          <Fade duration={3500}>
            <div
              className="col-lg-3 col-12 text-center border border-secondary p-4 "
              style={{ borderStyle: "double!important" }}
            >
              <h4 className="ft fw-light">Where</h4>
              Niloy Hotel, 123 ranking Street, New York.
            </div>
          </Fade>
        </div>
      </div>

      {/* //Map */}

      <div className="container mt-5  ">
        <iframe
          className="map"
          src="https://maps.google.com/maps?q=Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{
            width: "100%",
            height: 500,
          }}
        />
      </div>
    </div>
  );
};

export default RSVP_Form;
