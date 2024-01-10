import "../styles/Story.css";
import { Fade, Zoom } from "react-reveal";

const StoryCard = () => {
  const BoxImage =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/wedding-date-bg.jpg";
  const imgleft =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/tamp-bg-1.png";
  const cardLeafs =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/attendance-bg.png";
  return (
    <>
      {" "}
      <div className="container-fluid mt-5  position-relative pt-5 ">
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
        <div className="px-3 container position-relative overflow-hidden py-5 mb-5">
          <div className="bgBorder mt-5">
            <img src={BoxImage} alt="img" className="img-fluid  bgCard " />
            <div className="content my-5 py-5 justify-content-center align-items-center text-center ">
              <Fade bottom>
                <h3 className="ft p-2 borderDouble">JUNE 28, 2024</h3>

                <h1 className="ft fw-bold">We Are Getting Married</h1>
                <h5>Niloy Hotel New York , 123 West 23th Street, NY</h5>
                <div className="d-flex align-items-center justify-content-center my-5 ">
                  <div className=" fs-2     me-md-4 me-2 ">
                    <div>00</div>
                    <span>Days</span>
                  </div>
                  <div className=" fs-2     me-md-4 me-2">
                    <div>00</div>
                    <span>Hours</span>
                  </div>
                  <div className=" fs-2     me-md-4 me-2">
                    <div>00</div>
                    <span>Mins</span>
                  </div>
                  <div className=" fs-2     me-md-0 me-0">
                    <div>00</div>
                    <span>Secs</span>
                  </div>
                </div>
                <button className=" btn mb-5 mt-4 btn-lg  btnBookAttendance px-md-5 py-md-3 p-2">
                  Book Your Attendance
                </button>
              </Fade>
            </div>{" "}
            <div className=" leafleft">
              <Zoom>
                <img src={cardLeafs} className="img-fluid" alt="img" />{" "}
              </Zoom>
            </div>
            <div className=" leafright ">
              <Zoom>
                <img src={cardLeafs} className="img-fluid" alt="img" />{" "}
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
