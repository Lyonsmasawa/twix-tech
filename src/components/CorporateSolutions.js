import React from 'react'
import './Security.css'

const CorporateSolutions = () => {
    return (
        <div id="security">
            <div id="myCarousel" className="carousel slide carousel-fade px-5" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="mask flex-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4 col-12 order-md-1 order-2 one">
                                        <br />
                                        <h1>Data Visualization</h1>
                                        <h5>We empower you organization to making improved managerial
                                            decision-making through</h5>
                                        <br />
                                            <img src="./images/illust.jpg" className="mx-auto" alt="slide" style={{width: "80%"}}/>
                                            
                                        <div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-12 order-md-2 order-1" one>
                                        <br />
                                        <br />
                                        <img src="./images/ill2.jpg" className="mt-5" alt="slide" />
                                        
                                        <br />
                                        <h6 style={{fontWeight: "bold"}}> Detail Analysis</h6>
                                    </div>
                                    <div className="col-md-6 col-12 order-md-2 order-1" one>
                                        <br />
                                        <img src="./images/data.jpg" className="mt-5" alt="slide"  />
                    
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

                                    
                                    <div className="col-md-5  col-12 order-md-1 order-2">
                                        <h2>Business Intelligence Solutions</h2>
                                        <p style={{ color: "#2FA27D" }}>Through our partnership with “The DecisionSmiths”, Twixt
                                            is Crafting decision-making Strategies based on sound
                                            analytics and individual decision-maker insights.</p>
                                            <img src="./images/dec.png" className="mx-auto" alt="slide" style={{width: "45%"}} />
                                        <h5>Notable Features Include:</h5>
                                        <ul>
                                            <li> Data analytics and visualization </li>
                                            <li> Automated reporting</li>
                                            <li> Machine learning models</li>
                                            <li> Individual decision-maker insights and profiling </li>
                                            <li> Business strategizing</li>
                                        </ul>
                                       
                                    </div>
                                    <div className="col-md-1  col-12 order-md-1 order-2">
                                    </div>
                                    <div className="col-md-6 col-12 order-md-2 order-1  pt-10" >
                                        <img src="./images/data2.jpg" className="mx-auto" alt="slide" style={{width: ""}}/>
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

export default CorporateSolutions