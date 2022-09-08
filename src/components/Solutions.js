import React from 'react'
import './Solutions.css'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Solutions = () => {
    const Solution = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #2FA27D;
        text-align: left;

    `

let settings = {
  dots: false,
  infinite: true,
  speed: 150,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
};

const Carousel = styled(Slider)`
  // margin-top: 5px;
  padding-left: 3rem;
  height: 23vh;

  & > button {
    opacity: 1;
    height: 100%;
    color: #2FA27D !important;
    width: 5vw;
    z-index: 1;

    &:hover{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before{
        font-size: 12px;
        color: gray;
    }
  }

  li.slick-active button:before{
    color: #2FA27D;
  }

  .slick-list{
    overflow: initial;
  }

  .slick-prev{
    left: -40px;
  }

  .slick-next{
    right: -40px;
  }
  `;

const Wrap = styled.div`
    height: 18vh;
    border-radius: 4px;
    padding: 6px;
    cursor: pointer;
    position: relative;
    

    a{
        border-radius: 4px;
        box-shadow: 0 0 2px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img{
            height: 15vh;
            width: 18vw;
            object-fit: contain;
            padding: 12px;
            opacity: 0.8;       
            border: 2px solid #2FA27D;
            border-radius: 8px;
        }

        &:hover {
            padding:0;
            // border: 1px solid #2FA27D;
            transition-duration: 300ms;
        }
    }
`

  return (
    <>
        {/* <h1 style={{marginTop: "2rem", color: "#2FA27D", textAlign: "center", fontWeight: "700"}}>Our Clients</h1> */}
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
                  <p>
                    Coupled with our International ICT trade experience together with our strategic relationships with regional ICT
                    Distributors, Twixt is able to service both small and large volume of IT Hardware supplies needs at retail and
                    wholesale commercial models. We supply and install ICT the below categories;
                  </p>
                  <ul>
                    <li>
                      Work & Office Tools:- Mobile Devices, Tablets, Laptops, Desktops, Professional Display Screens, Audio-Video
                      Conferencing, Printers and Accessories (Flash Drives, Web Cams, Head Phones, Laptop Bags etc).
                    </li>
                    <li>
                    Office Automation:- Microsoft Software Licenses, LAN, CCTV, BioMetric, Hard Disks Drives, Servers.
                    </li>
                    <li>
                    Office Appliances:- TV, Sound Systems, Microwaves, Fridges and Water Dispensers.
                    </li>
                    <h4> Notable brands we serve our clients includes but is not limited to the below </h4>
                  </ul>
                  { <Carousel {...settings}>
                      <Wrap>
                          <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                              <img src="/images/clients/ident.png" alt="" />
                              
                          </a>
                      </Wrap> 
                    </Carousel>
                  }
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                </div>
              </div>

            </div>


          </div>
        </div>
      </Solution >
    </>
  )
}

export default Solutions