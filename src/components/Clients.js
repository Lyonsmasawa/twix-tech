import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
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
    <div className="clients">
        <div className="clients_bg">
        <h1 style={{marginTop: "2rem", color: "#2FA27D", textAlign: "center", fontWeight: "700"}}>Our Clients</h1>
        <br />
        <Carousel {...settings}>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/ident.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/amref.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/bin.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/bora.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/comp.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/cop.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/dhll.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/jaambo.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/labs.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/mk.png" alt="" />
                    
                </a>
            </Wrap>
            <Wrap>
                <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <img src="/images/clients/vivo.png" alt="" />
                    
                </a>
            </Wrap>
        </Carousel>
        <hr style={{color: "#2FA27D", height: ".51rem", opacity: "0.15"}}/>
        </div>
    </div>
  )
}

export default Client;