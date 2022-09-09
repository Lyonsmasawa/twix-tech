import React from 'react'
import './Security.css'

const Security = () => {
    return (
        <div id="security">
            <div id="myCarousel" className="carousel slide carousel-fade " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mask flex-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4 col-12 order-md-1 order-2">
                                        <br />
                                        <h1>YubiKeys</h1>
                                        <h5>We offer end user (Mobile, Laptop & Applications) and server side hardware based
                                            authentication solution that eliminates account takeovers through the use of Public
                                            Key Cryptography.</h5>
                                            <br />
                                            <img src="./images/yukis.jpg" className="mx-auto" alt="slide" style={{width: "80%"}}/>
                                            
                                        <div>
                                            <br />
                                            <div style={{padding: "20px"}}>
                                                <h3 style={{fontWeight: "bold"}}>How It Works</h3>
                                                <ol style={{fontSize: "1.1rem"}}>
                                                    <li> Enter Username and Password </li>
                                                    <li> Plug YubiKey into the USB Slot</li>
                                                    <li> Tap the button when LED Flashes</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 order-md-2 order-1">
                                        <br />
                                        <br />
                                        <img src="./images/yuki.jpg" className="mt-5" alt="slide" />
                                        
                                        <br />
                                        <h6 style={{fontWeight: "bold"}}> Up to 4X Faster than OTP (One Time Password)</h6>
                                    </div>
                                    <div className="col-md-6 col-12 order-md-2 order-1">
                                        <img src="./images/yuk.jpg" className="mt-5" alt="slide" style={{boxShadow: "0px 0px 4px #2fa27e4f"}} />
                                        <br />
                                        <h5 style={{fontWeight: "bold", textAlign: "center", textDecoration: "indent"}}> Your Security is our Priority</h5>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="mask flex-center">
                            <div className="container">
                                <br />
                                <div className="row align-items-center p-10">

                                    <div className="col-md-1  col-12 order-md-1 order-2">
                                    </div>
                                    <div className="col-md-6  col-12 order-md-1 order-2">
                                        <h2>Mobile Device Management (MDM)</h2>
                                        <p style={{color: "#2FA27D"}}>We offer a bespoke and Customizable Security Integrated MDM solution for managing your organization’s smart
                                            devices online and offline securely.</p>
                                        <h5>Notable Features Include:</h5>
                                        <ul>
                                            <li> Bulk Register multiple devices</li>
                                            <li> Bulk lock/unlock devices</li>
                                            <li> Lock/Unlock on online or offline modes Automate unlock device
                                                based on payments for locked state</li>
                                            <li> Whitelisting Call Centre/Emergency Numbers Push Notifications
                                                for payment reminders Complete Lock Screen for Locked Devices</li>
                                            <li> Disabled Factory Reset Functionality</li>
                                            <li> Provision of APIs for integration and customization</li>
                                        </ul>
                                        <img src="./images/mdnn.jpg" className="mx-auto" alt="slide" style={{width: "70%"}} />
                                    </div>
                                    <div className="col-md-4 col-12 order-md-2 order-1  pt-10" >
                                        <img src="./images/mdn.jpg" className="mx-auto" alt="slide" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> </div>
        </div>
    )
}

export default Security