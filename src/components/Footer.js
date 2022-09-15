import React from 'react'
import './footer.css'
import Map from './Map'

const Footer = () => {
    return (
    <>
        <Map />
        <footer className="site-footer" style={{display:"flex", paddingTop:"0px", flexDirection:"column", alignItems:"center", justifyContent: "center",  }}>
            
            <div className="containers" style={{width: "80%"}}>
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <h6 className=''>About</h6>
                        <p className="text-justify pe-5 pt-3">In a region where local, regional and multinational companies are coming to terms with the role of IT in accelerating
                            digital transformation in order to create competitive advantage, Twixt has positioned itself as an integrated ICT
                            solution enabler to organization's meeting their business objectives.
                            Twixt Products and Solution Portfolio thematically covers specific domains: Office, Security, Corporate and Managed
                            Services in delivering exemplary solutions to MNC's, FMCG's, NGO’s, FSI, Telecommunication and Technology-Based
                            Businesses.
                        </p>
                        <img src="/images/logo1.png" alt="" style={{ opacity: ".4" }} />
                    </div>

                    <div className="col-xs-6 col-md-4">
                        <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                        <div className="p-3">
                            <p><i className="fas fa-home mr-3"></i> Lotus Plaza, 1st Floor Chiromo Lane 15, Parklands-Nairobi</p>
                            <p><i className="fas fa-envelope mr-3"></i> Info@twixt.co.ke</p>
                            <p><i className="fas fa-phone mr-3"></i> + 254 113 139 254</p>
                            <p><i className="fas fa-print mr-3"></i> + 254 720 044 957</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; <span style={{ color: "black" }}>2022,</span> All Rights Reserved by
                            <span style={{ color: "black" }}> Twix Technologies.</span>
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer