import React from 'react'
import './Corporate.css'
import GamepadIcon from '@material-ui/icons/Gamepad';
import { keyframes } from "styled-components";
import styled from 'styled-components'

const Corporate = () => {
        // Create the keyframes
        const rotate = keyframes `
        from {
        transform: rotate(0deg);
        }
    
        to {
        transform: rotate(360deg);
        }
        `;
    
        // Here we create a component that will rotate everything we pass in over two seconds
        const Rotate = styled.div`
        display: inline-block;
        animation: ${rotate} 3s linear infinite;
        padding: 0 1.4rem;
        font-weight: bold;
        color: #2EA27E;
        font-size: 2rem;
        `;
  return (
      <div id="corporate">
          <h2 className='paygo' style={{ marginBottom: "3rem",marginTop: "1rem", paddingTop: "3rem", color: "#2FA27D", textAlign: "center", fontWeight: "600" }}><span><Rotate><GamepadIcon /></Rotate>MANAGED SERVICES<Rotate><GamepadIcon /></Rotate></span></h2>
          <h3 style={{ color: "#2fa27d", fontWeight: "bold", }}>Network | Security | Lifecycle Management | As-a-Service</h3>
          <h5 className='text-justify text-muted h5' style={{ color: "black", textAlign: "justify", padding: "1px 40px"}}>Through Twixt’s partnership with “JSNMEA” and “Aryaka Networks”, we offer enterprises that have multiple offices
              with complex centralized and cloud-native applications and services unrivaled application performance, cost
              optimization and business continuity solution through Aryaka’s Smart Services best-in class fully Integrated service.</h5>
          <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="mask flex-center">
                          <div className="container">
                              <div className="row align-items-center">
                                  <div className="col-md-5 col-12 order-md-1 order-2">
                                    <h1 style={{ fontWeight: "bold", fontSize: "2.3rem" }}>Aryaka Smart Services</h1>
                                    <h3>Consume Your Network As a Service</h3>
                                    </div>
                                  <div className="col-md-7 col-12 order-md-2 order-1"><img src="./images/ar.png" className="mt-5" alt="slide" /></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                       <div className="mask flex-center">
                          <div className="container">
                              <div className="row align-items-center">
                                  <div className="col-md-5 col-12 order-md-1 order-2 p-3">
                                      <h1 style={{ fontWeight: "bold", fontSize: "2.3rem" }}>Managed Services</h1>
                                      <p style={{textAlign: "justify"}}>Through Twixt’s partnership with “JSNMEA” and “Aryaka Networks”, we offer enterprises that have multiple offices
                                          with complex centralized and cloud-native applications and services unrivaled application performance, cost
                                          optimization and business continuity solution through Aryaka’s Smart Services best-in class fully Integrated service.</p>
                                  </div>
                                  <div className="col-md-7 col-12 order-md-2 order-1"><img src="./images/ar2.jpg" className="mt-5" alt="slide" /></div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> </div>
      </div>
  )
}

export default Corporate