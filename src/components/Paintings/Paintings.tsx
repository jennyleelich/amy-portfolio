import { NavLink } from "react-router-dom";
import "./Paintings.css";
import Blackeyes from "../../images/spikyfleurzzzz.jpg";
import Desertspirit from "../../images/illustration.jpg";
const Paintings = () => {
  return (
    <section className="work section" id="painting">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Paintings</h2>
          </div>
        </div>
        <div className="row">
          <div className="work-item-sub padd-15">
            <div className="work-item-inner">
              <div>
                Black eye in the darkness 2022
                <div>
                  <NavLink to="/works/paintings/blackeye">
                    click: 3 pieces in the series
                  </NavLink>
                </div>
              </div>
              <img src={Blackeyes} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="work-item-sub padd-15">
            <div className="work-item-inner">
              <div>
                Desert Spirit in the darkness 2022
                <div>
                  <NavLink to="/works/paintings/desertspirit">
                    click: 3 pieces in the series
                  </NavLink>
                </div>
              </div>
              <img src={Desertspirit} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paintings;
