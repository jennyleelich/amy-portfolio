import { NavLink } from "react-router-dom";
import "./Works.css";
import Painting from "../../images/oneeyelookdownatu 2.jpg";
import Scrlpture from "../../images/onehalfeyelookatu 2.jpg";
import Sketch from "../../images/spikyfleurzzzz.jpg";
import Portfolio from "../../images/rootycluster.jpg";
import Furniture from "../../images/spikyfleurzzzz.jpg";
import Illustration from "../../images/illustration.jpg";

const Works = () => {
  return (
    <section className="work section" id="works">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Works</h2>
          </div>
        </div>
        <div className="row">
          <NavLink className="work-item padd-15" to="/works/paintings">
            <div className="work-item-inner">
              <img src={Painting} alt="" />
            </div>
            <h4>Paintings</h4>
          </NavLink>

          <a className="work-item padd-15" href="#scrlpture">
            <div className="work-item-inner">
              <img src={Scrlpture} alt="" />
            </div>
            <h4>Sculptures</h4>
          </a>

          <a className="work-item padd-15" href="#sketch">
            <div className="work-item-inner">
              <img src={Sketch} alt="" />
            </div>
            <h4>Sketches</h4>
          </a>

          <a className="work-item padd-15" href="#portfolio">
            <div className="work-item-inner">
              <img src={Portfolio} alt="" />
            </div>
            <h4>2022 Portfolio</h4>
          </a>

          <a className="work-item padd-15" href="#furniture">
            <div className="work-item-inner">
              <img src={Furniture} alt="" />
            </div>
            <h4>Furniture Design</h4>
          </a>

          <a className="work-item padd-15" href="#illustration">
            <div className="work-item-inner">
              <img src={Illustration} alt="" />
            </div>
            <h4>Illustration</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
