import React from 'react'

const Map = () => {
  return (
    <section class="map_sec" style={{ padding: "0"}}>
        <div class="containers">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="map_inner">
                        <h4>Find Us on Google Map</h4>
                        <p></p>
                        <div class="map_bind">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.841593305639!2d36.8068921288671!3d-1.2678168961175917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c8eb47de7%3A0x414fb82877c8c699!2sTwixt%20Technologies%20Limited!5e0!3m2!1sen!2sin!4v1662704163896!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" tabindex="0" title='Map' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map