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
               <h2 className="text-justify "><span>&nbsp;&nbsp;</span>PayGo Enabler & ICT Innovations</h2>
              <h5 className="text-justify "><span>&nbsp;&nbsp;&nbsp;</span>Enabling Africa's digital tranformation, business by business</h5>
            </div>
            {/* <div className="sideDo">
                <img src={logo1} alt="Twix Technologies" style={{boxShadow: "0px 0px 5px white", opacity: ".6"}}/>
            </div> */}
        </div>
    </div>
  )
}

export default Landing