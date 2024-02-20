import { NavLink } from "react-router-dom";
import "./PaintingDetail1.css";
import Painting1 from "../../images/oneeyelookdownatu 2.jpg";
import Painting2 from "../../images/onehalfeyelookatu 2.jpg";
import Painting3 from "../../images/spikyfleurzzzz.jpg";

const PaintingDetail2 = () => {
  return (
    <section className="work section" id="painting-blackeye">
      <div className="container">
        <NavLink to="/works/paintings" className="subwork-detail-goback">
          &#60;&#60;&nbsp;back
        </NavLink>
        <div className="row">
          <div className="work-item-sub padd-15">
            <div className="work-item-sub-inner">
              <img src={Painting1} alt="" />
              <div>
                Everyone who believes that Jesus is the Christ has been born of
                God, and everyone who loves the Father loves whoever has been
                born of him. Rhythm is important. We have different rhythms that
                we have in life. And right now we are going back to school. In
                my household, we got three young kids. And one of the things
                that my wife has said recently is we’ve got to get back into the
                rhythm of school, of waking up at a certain time and going to
                sleep at a certain time. And if you’re in that same stage of
                life, you understand that rhythm of back to school. It’s the one
                time a year that we check all the boxes, like each one of the
                kids, you gotta get your back to school haircut, you gotta get
                your back to school.
              </div>
            </div>
            <div className="work-item-sub-inner">
              <img src={Painting2} alt="" />
              <div>
                Everyone who believes that Jesus is the Christ has been born of
                God, and everyone who loves the Father loves whoever has been
                born of him. Rhythm is important. We have different rhythms that
                we have in life. And right now we are going back to school. In
                my household, we got three young kids. And one of the things
                that my wife has said recently is we’ve got to get back into the
                rhythm of school, of waking up at a certain time and going to
                sleep at a certain time. And if you’re in that same stage of
                life, you understand that rhythm of back to school. It’s the one
                time a year that we check all the boxes, like each one of the
                kids, you gotta get your back to school haircut, you gotta get
                your back to school.
              </div>
            </div>
            <div className="work-item-sub-inner">
              <img src={Painting3} alt="" />
              <div>
                Everyone who believes that Jesus is the Christ has been born of
                God, and everyone who loves the Father loves whoever has been
                born of him. Rhythm is important. We have different rhythms that
                we have in life. And right now we are going back to school. In
                my household, we got three young kids. And one of the things
                that my wife has said recently is we’ve got to get back into the
                rhythm of school, of waking up at a certain time and going to
                sleep at a certain time. And if you’re in that same stage of
                life, you understand that rhythm of back to school. It’s the one
                time a year that we check all the boxes, like each one of the
                kids, you gotta get your back to school haircut, you gotta get
                your back to school.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingDetail2;
