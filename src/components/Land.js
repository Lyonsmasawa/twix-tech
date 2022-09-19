import React from 'react'
import './Land.css'
import styled from 'styled-components'
import logo from './logo3.png'

import { keyframes } from "styled-components";
import GamepadIcon from '@material-ui/icons/Gamepad';
const Land = () => {
        const Info = styled.div`
            display: flex;
            /* flex-direction: column; */
            /* align-items: center; */
            justify-content: flex-end;
            padding-left: 3rem;
            margin-bottom: 1rem;
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

        const Information = styled.div`
            margin-top: 1rem;
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
     <div id="aboutus" className='bg-full' style={{paddingTop: "2rem", paddingBottom: "rem"}}>
        <h1 className = "whoweare" style={{ color: "#2FA27D", textAlign: "center", fontWeight: "700"}}><span>ABOUT US</span></h1>
        <Information>
            <div className="row fully">
            <div className="cont">

                <div className="pic blink"></div>

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
                            
                    <Information>
                            <div className="why shadows p-3">
                                    <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Mission</h4>
                                    <ul>
                                        <li>To consistently create and provide disruptive
                                            technology-driven business solutions that will
                                            transform Enterprises.
                                        </li>
                                    </ul>
                            </div>
                            <div className="why shadows p-3">
                                    <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Vision</h4>
                                    <ul>
                                        <li>To integrate technology with people to do more
                                        </li>
                                    </ul>
                            </div>
                    </Information>
                    <br />
                    <div className="why shadows p-3">
                                    <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Philosophy</h4>
                                    <ul>
                                        <li>Pushing the boundaries of Novelty.</li>
                                    </ul>
                            </div>
                    <Information>
                            <div className="why shadows p-3 core-v">
                                <h4 style={{color: "#2FA27D", fontWeight: "bold", fontSize:"20px"}}>Core Values</h4>
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
            </div>
        </div>   
        </Information>
     </div>
  )
}

export default Land