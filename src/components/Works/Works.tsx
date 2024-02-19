import './Works.css';
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
              
              <a className="work-item padd-15" href="#painting">
                <div className="work-item-inner">
                  <img
                    src="src/assets/oneeyelookdownatu 2.jpg"
                    alt=""
                    
                  />
                </div>
                <h4>Paintings</h4>
              </a>
              
              
              <a className="work-item padd-15" href="#scrlpture">
                <div className="work-item-inner">
                  <img
                    src="src/assets/oneeyelookdownatu 2.jpg"
                    alt=""
                    
                  />
                </div>
                <h4>Sculptures</h4>
              </a>
              
              
              <a className="work-item padd-15" href="#sketch">
                <div className="work-item-inner">
                  <img
                    src="src/assets/spikyfleurzzzz.jpg"
                    alt=""
                    
                  />
                </div>
                <h4>Sketches</h4>
              </a>
              
              
              <a className="work-item padd-15" href="#portfolio">
                <div className="work-item-inner">
                  <img
                    src="src/assets/rootycluster.jpg"
                    alt=""
                    
                  />
                </div>
                <h4>2022 Portfolio</h4>
              </a>
              
              
              <a className="work-item padd-15" href="#furniture">
                <div className="work-item-inner">
                  <img
                    src="src/assets/spikyfleurzzzz.jpg"
                    alt=""
                    
                  />
                </div>
                <h4>Furniture Design</h4>
              </a>
              
              
              <a className="work-item padd-15" href="#illustration">
                <div className="work-item-inner">
                  <img
                    src="src/assets/illustration.jpg"
                    alt=""
                    
                  />
                </div>
                <h4>Illustration</h4>
              </a>
              
            </div>
          </div>
        </section>
    )
  }
  
  export default Works