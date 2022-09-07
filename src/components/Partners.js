import React from 'react'
import './Partners.css'
import styled from "styled-components"

const Partners = () => {

    const Container = styled.div`
        
    `

    return (
        <section className="section section-default mt-none mb-none">
            <div className="container">
                <h2 className="mb-sm">Our <strong>Partners</strong></h2>
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
        </section>
    )
}

export default Partners