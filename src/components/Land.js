import React from 'react'
import './Land.css'

const Land = () => {
  return (
      <div className="row fully">
          <div className="cont">

              <div className="pic"></div>

              <div className="box1"></div>
              <div className="box2"></div>

              <div className="social1">
                  <i className="fas fa-facebook" aria-hidden="true"></i>
              </div>
              <div className="social2">
                  <i className="fas fa-dribbble" aria-hidden="true"></i>
              </div>
              <div className="social3">
                  <i className="fas fa-codepen" aria-hidden="true"></i>
              </div>
          </div>

          <div className="content">
            <h2>ABOUT US</h2>
                <div className="mission">
                    <p>
                        To consistently create and provide disruptive
                        technology-driven business solutions that will
                        transform Enterprises.
                    </p>
                    <p>
                        To integrate technology with people to do more
                    </p>
                </div>
                <div className="core">
                   <p>
                        Creativity: We solve problems and challenges by use of broad-sight thinking, foresight in innovating solutions
                        and leveraging on acquired skills.
                        Integrity: We subscribe to the highest of standards not only in our work but also in our commitment to
                        clients. We value professionalism and enforce a high code of conduct throughout the organization.
                        People: We believe in the power of oneness; marshalling of skills, talents and resources towards a common
                        goal.
                        Excellence: Excellence to us is not an act but a habit. We go the extra mile to deliver and exceed client’s
                        expectations.
                   </p>
                </div>
                <div className="philosophy">
                    Pushing the boundaries of Novelty.
                </div>
          </div>
      </div>   

  )
}

export default Land