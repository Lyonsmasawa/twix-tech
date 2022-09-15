import React from 'react'
import './Solutions.css'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Security from './Security';
import { ControlPoint, DashboardTwoTone, DateRange, HomeTwoTone, SecuritySharp, StorageTwoTone } from '@material-ui/icons';
import CorporateSolutions from './CorporateSolutions';
import GamepadIcon from '@material-ui/icons/Gamepad';
import { keyframes } from "styled-components";
import Office from './Office';

const Solutions = () => {
  const Solution = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #2FA27D;
        text-align: left;
    `
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
    <div id="oursolutions" className="bg-full" style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
      <h1 className="saass" style={{marginBottom: "3rem",marginTop: "1rem", paddingTop: "3rem", color: "#2FA27D", textAlign: "center", fontWeight: "600"}}><span><Rotate><GamepadIcon /></Rotate>SOLUTIONS<Rotate><GamepadIcon /></Rotate></span></h1>
      <Solution>
        <div className="containers">
          <div className="row">
            <div className="col-xs-12 ">
              <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Office Solutions</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Security Solutions</a>
                  <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Corporate Solutions</a>
                </div>
              </nav>
              <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <section id="what-we-do">
                    <div class="container-fluid">
                      <h1 class="section-title mb-2 h1" style={{ fontWeight: "bold" }}> Office Solutions We Offer</h1>
                      <h2 class="text-muted h6 p-2">Coupled with our International ICT trade experience together with our strategic relationships with regional ICT
                        Distributors, Twixt is able to service both small and large volume of IT Hardware supplies needs at retail and
                        wholesale commercial models. We supply and install ICT the below categories.</h2>
                      <div class="row mt-3">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <div class="card ">
                            <div class="card-block block-5">
                              <h3 class="card-title">Work & Office Tools:</h3>
                              <p class="card-text">Mobile Devices, Tablets, Laptops, Desktops, Professional Display Screens, Audio-Video
                                Conferencing, Printers and Accessories (Flash Drives, Web Cams, Head Phones, Laptop Bags etc).
                              </p>
                              <a href="#" title="Read more" class="read-more" >See Products Brands Below<i class="fa fa-angle-double-right ml-2"></i></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <div class="card h-100">
                            <div class="card-block block-5">
                              <h3 class="card-title">Office Automation:</h3>
                              <p class="card-text">Microsoft Software Licenses, LAN, CCTV, BioMetric, Hard Disks Drives, Servers,</p>
                            </div>
                            <div class="card-block block-5">
                              <h3 class="card-title">Office Appliances:</h3>
                              <p class="card-text">TV, Sound Systems, Microwaves, Fridges and Water Dispensers</p>
                              <a href="#" title="Read more" class="read-more" >See Product Brands Below<i class="fa fa-angle-double-right ml-2"></i></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <div class="card ">
                            <div class="card-block " style={{ display: "flex", alignItems: "center", padding: "0px" }}>
                              <img src="./images/dete.jpg" className="mx-auto" alt="slide" style={{ width: "100%", height: "100%", padding: "4px", border: "5px solid #2fa27d", opacity: ".8" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Office />
                  </section>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <section id="what-we-do">
                    <div class="container-fluid">
                      <h2 class="section-title mb-2 h1" style={{ fontWeight: "bold" }}> Security Solutions We Offer</h2>
                      <p class="text-center text-muted h6">We offer end user (Mobile, Laptop & Applications) and server side hardware based
                        authentication solution that eliminates account takeovers through the use of Public
                        Key Cryptography.</p>
                      <div class="row mt-5">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <div class="card  h-100">
                            <div class="card-block block-1">
                              <h3 class="card-title">YubiKeys:</h3>
                              <p class="card-text">We offer end user (Mobile, Laptop & Applications) and server side hardware based
                                authentication solution that eliminates account takeovers through the use of Public
                                Key Cryptography.
                              </p>
                              <a href="#" title="Read more" class="read-more" >See Illustrations Below<i class="fa fa-angle-double-right ml-2"></i></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <div class="card h-100">
                            <div class="card-block block-1">
                              <h3 class="card-title">Mobile Device Management (MDM):</h3>
                              <p class="card-text">We offer a bespoke and Customizable Security Integrated MDM solution for managing your organization’s smart
                                devices online and offline securely.</p>
                              <a href="#" title="Read more" class="read-more" >See Illustrations Below<i class="fa fa-angle-double-right ml-2"></i></a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <div class="card">
                            <div class="card-block " style={{ display: "flex", alignItems: "center", padding: "0px" }}>
                              <SecuritySharp /><span style={{ fontWeight: "bold" }}>Safe</span>
                              <img src="./images/secure.png" className="mx-auto" alt="slide" style={{ width: "60%", height: "100%", padding: "4px", border: "5px solid #2fa27d" }} /> <span style={{ fontWeight: "bold" }}>Secure</span>
                              <SecuritySharp />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Security />
                  </section>
                </div>

                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" style={{width: "100vw"}}>
                  <section id="what-we-do" className='' >
                    <div class="containers">
                      <h2 class="section-title mb-2 h1" style={{ fontWeight: "bold" }}> Corporate Solutions We Offer</h2>
                      <p class="text-center text-muted h3">Data Analytics-Visualization & Business Intelligence Solutions.</p>
                      </div>
                    <CorporateSolutions />
                  </section>
                </div>
              </div>

            </div>


          </div>
        </div>
      </Solution >
    </div>
  )
}

export default Solutions