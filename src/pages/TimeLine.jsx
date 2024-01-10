import "../styles/TimeLine.css";
import {FaMenorah,FaPhotoVideo  , FaDungeon,FaRing  } from "react-icons/fa";

const TimeLine = () => {
  const flowerImg =
    "https://demo.htmlcodex.com/3166/wedding-bootstrap-template/img/wedding-bg.png";
  return (
    <div className="container-fluid  bgTimeLine position-relative overflow-hidden py-5">
      <img src={flowerImg} className="img-fluid flowerLeft" alt="img" />
      <img src={flowerImg} className="img-fluid flowerRight " alt="img" />
      <div className="container px-3  py-5">
        <div className="text-center mb-5">
          <h1 className="display-6 ft text-white">Wedding Planing Timeline</h1>
        </div>
        <div className="position-relative pt-5 px-4">
          <div className="row  ">
            <div className="col-6 col-md-6 col-xl-3 border border-bottom-0">
              <div className="text-center p-3 ">
                <FaMenorah
                  size={90}
                  className="mb-4 p-3 d-inline-flex text-danger"
                />

                <p className="cr ft">10:00AM - 11:00AM</p>
                <h3 className="ft">Dinner</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-xl-3 border border-top-0 border-start-0">
              <div className="text-center p-3">
                <FaPhotoVideo
                  size={90}
                  className="mb-4 p-3 d-inline-flex text-danger"
                />
                <p className="ft cr">10:00AM - 11:00AM</p>
                <h3 className="ft">Photoshoot</h3>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-xl-3 border border-bottom-0 border-end-0">
              <div className="text-center p-3">
                <FaDungeon
                  size={90}
                  className="mb-4 p-3 d-inline-flex text-danger"
                />
                <p className=" cr ft">10:00AM - 11:00AM</p>
                <h3 className=" ft">Reception</h3>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-xl-3 border border-top-0">
              <div className="text-center p-3">
                <FaRing
                  size={90}
                  className="mb-4 p-3 d-inline-flex text-danger"
                />
                <p className="cr ft">10:00AM - 11:00AM</p>
                <h3 className="ft">Ceremony</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>
          </div>
          <div className="circleLeft ">
            <div className="border border-2 border-danger rounded-circle p-2 " />
          </div>
          <div className="circleRight  ">
            <div className="border border-2 border-danger rounded-circle p-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
