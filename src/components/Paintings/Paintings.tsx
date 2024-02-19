
import './Paintings.css';
const Paintings = () => {
  return (
    <section className="work section" id="painting">
          <div className="container">
            <div className="row" >
              <div className="section-title padd-15">
                <h2>Paintings</h2>
              </div>
            </div>
            <div className="row">
              <div className="work-item-sub padd-15">
                <div className="work-item-inner">
                  <div
                    
                  >
                    Black eye in the darkness 2022
                    <div>
                      <a href="#painting-blackeye"
                        >click: 3 pieces in the series</a
                      >
                    </div>
                  </div>
                  <img
                    src="/src/assets/oneeyelookdownatu 2.jpg"
                    alt=""
                    
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="work-item-sub padd-15">
                <div className="work-item-inner">
                  <div
                    
                  >
                    Desert Spirit in the darkness 2022
                    <div>
                      <a href="#painting-blackeye"
                        >click: 3 pieces in the series</a
                      >
                    </div>
                  </div>
                  <img
                    src="/src/assets/rootycluster.jpg"
                    alt=""
                    
                  />
                </div>
              </div>
            </div>
          </div>
    </section>)
  
}


export default Paintings;