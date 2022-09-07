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
            <h1 className="contentHead">ABOUT ME</h1>
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

                <div className="background">
                    <p>
                        Twixt was founded as a web development startup during its incubation stages in 2009 and later incorporated as a
                        limited liability company in 2012 actively offering IT and Mobility solutions progressively serving consumers and
                        enterprises needs.
                        Over the years, Twixt Technologies Ltd (Twixt) has established itslef within the Kenyan market as an ICT Service
                        provider of best-in class innovative products and solutions for our clients.
                        In a region where local, regional and multinational companies are coming to terms with the role of IT in accelerating
                        digital transformation in order to create competitive advantage, Twixt has positioned itself as an integrated ICT
                        solution enabler to organization's meeting their business objectives.
                        Twixt Products and Solution Portfolio thematically covers specific domains: Office, Security, Corporate and Managed
                        Services in delivering exemplary solutions to MNC's, FMCG's, NGO’s, FSI, Telecommunication and Technology-Based
                        Businesses..
                    </p>
                </div>
          </div>
      </div>   

  )
}

export default Land