import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact__us ">
            <section class="contact_us">
                <div className="divs">
                </div>
                <div class="containus">
                    <div class="contact_inner">
                        <div class="contact-row">
                            <div class="column1">
                                    <div class="contact_field">
                                        <h4 style={{ color: '#2FA27D' }}>Contact Us</h4>
                                        <h6 style={{ color: "#2FA27D" }}>Feel Free to contact us any time. We will get back to you as soon as we can!.</h6>
                                        <input type="text" class="form-control form-group" placeholder="Name" />
                                        <input type="text" class="form-control form-group" placeholder="Email" />
                                        <textarea class="form-control form-group" placeholder="Message"></textarea>
                                        <button class="contact_form_submit">Send</button>
                                    </div>
                            </div>
                            <div class="column2">
                                <div class="right_conatct_social_icon d-flex align-items-end">
                                    <div class="socil_item_inner d-flex">
                                        <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    </div>
                                </div>
                                 <div class="contact_info_sec">
                                <h4>Contact Info</h4>
                                <div class="d-flex info_single align-items-center">
                                    <i class="fas fa-headset"></i>
                                    <span> + 254 720 044 957</span>
                                </div>
                                <div class="d-flex info_single align-items-center">
                                    <i class="fas fa-envelope-open-text"></i>
                                    <span> Info @twixt.co.ke</span>
                                </div>
                                <div class="d-flex info_single align-items-center">
                                    <i class="fas fa-map-marked-alt"></i>
                                    <span>Lotus Plaza, Nairobi</span>
                                </div>
                            </div>
                            </div>
                           
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Contact