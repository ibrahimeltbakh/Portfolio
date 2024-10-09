import "./hero.css";
import Lottie from "lottie-react";
import laptop from "../../../public/animations/laptop.json";
export default function Hero() {
  return (
    <div className="hero flex inside-container">
      <div className="content">
        <div className="image">
          <img src="/me-modified.png" alt="me" />
        </div>
        <div className="data">
          <h1>Software designer, founder, and amateur astronaut.</h1>
          <p>
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="social ">
            <ul className="flex">
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-section animation border">
        <Lottie className="Lottie" animationData={laptop} />
      </div>
    </div>
  );
}
