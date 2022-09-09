import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { WorkOutline, HomeWorkOutlined } from '@material-ui/icons/';
import StorageIcon from '@material-ui/icons/Storage';
import GamepadIcon from '@material-ui/icons/Gamepad';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { keyframes } from "styled-components";
import EventSeatIcon from '@material-ui/icons/EventSeat';
import logo from './logo3.png'

const Nav = styled.nav`
    position: fixed;
    background-color: white;
    color: #2EA27D;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    padding: 8px 36px;
    letter-spacing: 16px;
    z-index: 1009;
    box-shadow: 0px 2px 8px #2EA27E;
`

const Logo = styled.a`
    padding: 0;
    width: 120px;
    margin-top: 4px;
    max-height: 60px;
    font-size: 0;
    display: inline-block;
    color: #2EA27D;

    img { 
        display: block;
        width: 100%;
    }
` 
  
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row no-wrap;
    justify-content: flex-end;
    height: 100%;
    margin: 0;
    position: relative;
    padding: 0px;
    margin-right: auto;    
    margin-left: auto;

    @media(max-width: 768px){
        display: none;
    }
`
const Span = styled.span`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.8px;
    padding: 2px 5px;
    color: #2EA27E;
    text-decoration: none;
    white-space: nowrap;
    position: relative; 
    
    &:before {
        content: "";
        background-color: #2EA27E;
        bottom: -3px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
    }

    &:hover {
        :before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
`

const MenuLinks = {
    display: "flex", 
    textDecoration: "none",
    alignItems: "center",
    padding: "0 12px",
}

const  MenuIcon ={
    maxWidth: "25px",
    maxHeight: "25PX",
    zIndex: "auto",
    color: "#2EA27D",
}


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


const Header = () => {
   return (
     <Nav>
        <Logo>
            <Link to="/"><img src={logo} alt="Twix Technologies" /></Link>
        </Logo>
        <NavMenu>
            <Rotate><GamepadIcon /></Rotate>
            <Link to="/" style={MenuLinks}><HomeWorkOutlined style={MenuIcon} /><Span>Home</Span></Link>
            <Link to="/caregivers" style={MenuLinks}><SupervisedUserCircleIcon style={MenuIcon} /><Span>About Us</Span></Link>
            <Link to="/recruiters" style={MenuLinks}><EventSeatIcon style={MenuIcon} /><Span>Our Clients</Span></Link>
            <Link to="/careers" style={MenuLinks}><WorkOutline style={MenuIcon} /><Span>Our Solutions</Span></Link>
            <Link to="/careers" style={MenuLinks}><StorageIcon style={MenuIcon} /><Span>Managed Services</Span></Link>
            <Link to="/careers" style={MenuLinks}><PeopleOutlineIcon style={MenuIcon} /><Span>Partnerships</Span></Link>
            <Rotate><GamepadIcon /></Rotate>
        </NavMenu>
    </Nav>
   )
}
 
export default Header