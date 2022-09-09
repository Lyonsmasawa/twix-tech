import React from 'react'
import styled from 'styled-components'
import Clients from './Clients'
import Contact from './Contact'
import Corporate from './Corporate'
import Footer from './Footer'
import Land from './Land'
import Landing from './Landing'
import Partners from './Partners'
import Reviews from './Reviews'
import Solutions from './Solutions'

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;  
    display: block;
    top: 72px;
    /* padding: 0 calc(1vw + 2px); */

    &:after {
        /* background: url("/images/home-background.png") center center / cover no-repeat fixed; */
        content: "";
        inset: 0;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0;
        position: absolute;
        z-index: -1;
        opacity: 1;
    }
`

const Home = (props) => {  

  return (
    <Container>
        <Landing />
        <Land />
        <hr style={{color: "#2FA27D", height: "1rem", opacity: "0.1"}}/>
        <Clients />
        <hr style={{color: "#2FA27D", height: "1rem", opacity: "0.1"}}/>
        <Solutions/>
        <hr style={{color: "#2FA27D", height: "1rem", opacity: "0.1"}}/>
        <Corporate />
        <hr style={{color: "#2FA27D", height: "1rem", opacity: "0.1"}}/>
        <Partners />
        <hr style={{color: "#2FA27D", height: "1rem", opacity: "0.1"}}/>
        <Contact />
        <Footer />
    </Container>
  )
}

export default Home;