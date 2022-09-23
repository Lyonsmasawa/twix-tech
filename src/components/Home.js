import React from 'react'
import styled from 'styled-components'
import Clients from './Clients'
import Contact from './Contact'
import Corporate from './Corporate'
import Footer from './Footer'
import Land from './Land'
import Landing from './Landing'
import Nav from './Nav'
import Partners from './Partners'
import Reviews from './Reviews'
import Solutions from './Solutions'
import Team from './Team'

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
        <Nav />
        <Landing />
        <Land />
        <Clients />
        <Solutions/>
        <Corporate />
        <Partners />
        <Team />
        <Contact />
        <Footer />
    </Container>
  )
}

export default Home;