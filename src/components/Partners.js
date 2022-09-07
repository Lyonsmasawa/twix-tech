import React from 'react'
import './Partners.css'

const Partners = () => {

    return (
            <div className="container">
                <h1 style={{color: "#2FA27D", fontWeight:"bold", textDecoration: "underline", textDecorationThickness: "1px"}}><strong>Our Partners</strong></h1>
                <strong>
                    <div className="row" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="square-holder">
                                <img alt="" src="./images/arya.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="square-holder">
                                <img alt="" src="./images/mitsumi.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="square-holder">
                                <img alt="" src="./images/dot.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="square-holder">
                                <img alt="" src="./images/kobe.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="square-holder">
                                <img alt="" src="./images/yubic.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="square-holder">
                                <img alt="" src="./images/dev.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="square-holder">
                                <img alt="" src="./images/dec.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="square-holder">
                                <img alt="" src="./images/red.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="square-holder">
                                <img alt="" src="./images/jsn.png" />
                            </div>
                        </div>
                    </div>
                </strong>
            </div>
    )
}

export default Partners