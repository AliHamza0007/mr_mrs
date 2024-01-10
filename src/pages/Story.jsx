import { Fade, Zoom } from "react-reveal";
import "../styles/Story.css";

const Story = () => {
  const img1 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/story-1.jpg";
  const img2 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/story-2.jpg";
  const img3 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/story-3.jpg";
  const img4 =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/story-4.jpg";
  const imgleft =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/tamp-bg-1.png";
  return (
    <>
      <div className="container-fluid mt-5  position-relative pt-5">
        <div className=" imgleft">
          <Zoom>
            <img src={imgleft} className="img-fluid" alt="img" />{" "}
          </Zoom>
        </div>
        <div className=" imgright">
          <Zoom>
            <img src={imgleft} className="img-fluid" alt="img" />{" "}
          </Zoom>
        </div>
        <div className="container text-center  pt-5 px-3 mb-0 pb-0">
          <Fade bottom>
            <h1 className="cr fh display-1 mt-md-0 mt-3">Story</h1>
            <h4 className="ft">Our Love Story</h4>
          </Fade>
        </div>
        <div className="container position-relative py-5">
          <div>
            <div className="row ">
              <div className="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
                <div className="d-inline-flex align-items-center h-100">
                  <Zoom duration={1500}>
                    <img
                      src={img1}
                      className="img-fluid w-100 border border-white"
                      alt="image"
                    />
                  </Zoom>
                </div>
              </div>
              <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
                <Fade right duration={1500}>
                  <div className="h-100 d-flex flex-column justify-content-center bgGray p-4">
                    <h4 className="mb-2 ft text-dark">First Meet</h4>
                    <p className="text-uppercase cr ft mb-2">01 Jan 2050</p>
                    <p className="m-0 fs-5">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row flex-column-reverse flex-md-row ">
              <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                <Fade left duration={1500}>
                  <div className="h-100 d-flex flex-column justify-content-center bgGray p-4">
                    <h4 className="text-dark ft mb-2">First Date</h4>
                    <p className="text-uppercase cr ft mb-2">01 Jan 2050</p>
                    <p className="m-0 fs-5">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>{" "}
              </div>
              <div className="col-md-6 border-start border-top border-secondary p-4">
                <div className="d-inline-flex align-items-center h-100">
                  <Zoom duration={1500}>
                    <img
                      src={img2}
                      className="img-fluid w-100 border border-white"
                      alt="image"
                    />
                  </Zoom>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                <div className="d-inline-flex align-items-center h-100">
                  <Zoom duration={1500}>
                    <img
                      src={img3}
                      className="img-fluid w-100 img-border"
                      alt="image"
                    />
                  </Zoom>
                </div>
              </div>
              <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
                <Fade right duration={1500}>
                  <div className="h-100 d-flex flex-column justify-content-center bgGray p-4">
                    <h4 className="text-dark ft mb-2">Proposal</h4>
                    <p className="text-uppercase cr ft mb-2">01 Jan 2050</p>
                    <p className="m-0 fs-5">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>{" "}
              </div>
            </div>

            <div className="row flex-column-reverse flex-md-row ">
              <div className="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
                <Fade left duration={1500}>
                  {" "}
                  <div className="h-100 d-flex flex-column justify-content-center bgGray p-4">
                    <h4 className="text-dark ft mb-2">Enagagement</h4>
                    <p className="text-uppercase ft cr mb-2">01 Jan 2050</p>
                    <p className="m-0 fs-5">
                      Lorem elitr magna stet rebum dolores sed. Est stet labore
                      est lorem lorem at amet sea, eos tempor rebum, labore amet
                      ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd
                      stet amet est dolor elitr.
                    </p>
                  </div>
                </Fade>{" "}
              </div>
              <div className="col-md-6 border border-end-0 border-secondary p-4">
                <div className="d-inline-flex align-items-center h-100">
                  <Zoom duration={1500}>
                    <img
                      src={img4}
                      className="img-fluid w-100 img-border"
                      alt="images"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
