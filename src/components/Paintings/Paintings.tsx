

const Paintings = () => {
  return 
    <section className="work section" id="painting">
          <div className="container">
            <div className="row" style="height: 50px;">
              <div className="section-title padd-15">
                <h2>Paintings</h2>
              </div>
            </div>
            <div className="row">
              <div className="work-item-sub padd-15">
                <div className="work-item-inner">
                  <div
                    style="
                      text-align: center;
                      padding-bottom: 1rem;
                      cursor: pointer;
                    "
                  >
                    Black eye in the darkness 2022
                    <div>
                      <a href="#painting-blackeye"
                        >click: 3 pieces in the series</a
                      >
                    </div>
                  </div>
                  <img
                    src="images/portfolio/oneeyelookdownatu 2.jpg"
                    alt=""
                    style="max-height: 100%; max-width: 100%;"
                  />
                </div>
              </div>
            </div>
          </div>
    </section>
  
}

export default Paintings