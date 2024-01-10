import { Link } from "react-scroll";
import "../styles/Navbar.css";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bgNav mb-5">
      <nav className="navbar  navbar-expand-lg  ">
        <div className="container  ">
          <Link
            smooth={true}
            offset={70}
            duration={1000}
            className="navbar-brand pt-3 justify-content-center  fh"
            to="home"
          >
            <h1>
              <b className="cr fh">Mr</b>&<b className="cr fh">Mrs</b>
            </h1>
          </Link>
          <button
            className="navbar-toggler d-lg-none "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa  fa-bars fs-1 justify-content-center py-2 navbar-toggler-icon"></i>
            <i className="fa   fa-times  fs-1 justify-content-center py-2 navbar-toggler-icon"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav mx-auto text-center ">
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  
                  duration={500}
                  className="nav-link ft "
                  to="home"
                  aria-current="page"
                  
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={1500}
                  className="nav-link ft"
                  to="about"
                  
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={1500}
                  className="nav-link ft"
                  to="story"
                  
                  aria-current="page"
                >
                  Story
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={1500}
                  className="nav-link ft "
                  to="timeLine"
                  
                  aria-current="page"
                >
                  Timeline
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={1500}
                  className="nav-link ft "
                  to="gallery"
                  
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item px-2 ">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={1500}
                  className="nav-link ft"
                  to="rsvp"

                  aria-current="page"
                >
                  RSVP
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto text-center ">
              <li className="nav-item  px-2  ">
                <Link
                  smooth
                  spy
                  activeClass="active"
                  offset={50}
                  duration={1500}
                  className="nav-link btnBookAttendance px-4  border-0"
                  
                  to="bookAttendance"
                  aria-current="page"
                >
                  Book Attendance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
