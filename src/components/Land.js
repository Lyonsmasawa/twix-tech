import React from 'react'
import './Land.css'
import styled from 'styled-components'
import logo from './logo3.png'

const Land = () => {
        const Info = styled.div`
            display: flex;
            /* flex-direction: column; */
            /* align-items: center; */
            justify-content: flex-end;
            padding-left: 3rem;
            margin-bottom: 1rem;
        `
    
        const Information = styled.div`
            margin-top: 2rem;
            gap: 1rem;
            margin-right: 1.4rem;
            color: black;
            display: flex;
            text-align: left;
            justify-content: space-between;
    
            ul {
            list-style-type: none;
            padding-left: 20px;
            }
    
            li {
                position: relative;
                padding-left: 20px;
                margin-bottom: 10px;
            }
    
            li:before {
                position: absolute;
                top: 0;
                left: 0;
                font-family: FontAwesome;
                content: "\f101";
                color: #2FA27D;
            }
        `

  return (
     <>
        <h2 style={{marginTop: "3rem", color: "#2FA27D", textAlign: "center", fontWeight: "600"}}>ABOUT US</h2>
        <hr style={{color: "#2FA27D", height: ".51rem", opacity: "0.1"}}/>
        <Information>
            <div className="row fully">
            <div className="cont">

                <div className="pic"></div>

                <div className="box1"></div>
                <div className="box2"></div>

                <div className="social1">
                </div>
                <div className="social2">
                </div>
                <div className="social3">
                    <img alt="" src="./images/green.jpg" style={{ width: "5rem", height: "5rem"}}/>
                </div>
            </div>

            <div className="content">
                <br />
                            <div className="why">
                                    <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Philosophy</h4>
                                    <ul>
                                        <li>Pushing the boundaries of Novelty.</li>
                                    </ul>
                            </div>
                    <Information>
                            <div className="why">
                                    <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Mission</h4>
                                    <ul>
                                        <li>To consistently create and provide disruptive
                                            technology-driven business solutions that will
                                            transform Enterprises.
                                        </li>
                                    </ul>
                            </div>
                            <div className="why">
                                    <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Vision</h4>
                                    <ul>
                                        <li>To integrate technology with people to do more
                                        </li>
                                    </ul>
                            </div>
                    </Information>
                    <Info>
                        <Information>
                            <div className="why">
                                <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"30px"}}>Core Values</h4>
                                <ul>
                                    <li><strong>Creativity: </strong> We solve problems and challenges by use of broad-sight thinking, foresight in innovating solutions
                                    and leveraging on acquired skills.</li>
                                    <li><strong>Integrity: </strong> We subscribe to the highest of standards not only in our work but also in our commitment to
                                    clients. We value professionalism and enforce a high code of conduct throughout the organization.</li>
                                    <li><strong>People: </strong> We believe in the power of oneness; marshalling of skills, talents and resources towards a common
                            goal.</li>
                                    <li><strong>Excellence: </strong>  Excellence to us is not an act but a habit. We go the extra mile to deliver and exceed client’s
                            expectations. </li>
                                </ul>
                                <img src={logo} alt="Twix Technologies" style={{ opacity: ".7", width: "30%"}}/>
                            </div>
                        </Information>
                        
                    </Info>
            </div>
        </div>   


        </Information>
        <hr style={{color: "#2FA27D", height: ".51rem", opacity: "0.07"}}/>
     </>
  )
}

export default Land