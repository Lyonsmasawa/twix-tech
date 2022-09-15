import React from 'react'
import './Landing.css'
import logo from './logo1.png'
import logo1 from './logo3.png'

const Landing = () => {
  return (
    <div className="image">
        <div className="overlay">

            <div className="whatWeDo">
            <img src={logo} alt="Twix Technologies" />
            <h1>Twixt Technologies Limited</h1>
               <p style={{ padding: "10px"}} className="text-justify">
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
                    Businesses.
               </p>
            </div>
            <div className="sideDo">
                <img src={logo1} alt="Twix Technologies" style={{boxShadow: "0px 0px 5px white", opacity: ".6"}}/>
            </div>
        </div>
    </div>
  )
}

export default Landing