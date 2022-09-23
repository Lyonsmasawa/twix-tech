import React, { useState } from 'react'
import { WorkOutline, HomeWorkOutlined } from '@material-ui/icons/';
import StorageIcon from '@material-ui/icons/Storage';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import styled from "styled-components"
import './nav.css'

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <navsmall>
      <a href="#" onClick={() => {setActive("#")}} className={active === '#' ? 'active' : ''}><HomeWorkOutlined/></a>
      <a href="#aboutus" onClick={() => {setActive("#aboutus")}} className={active === '#aboutus' ? 'active' : ''} ><SupervisedUserCircleIcon/></a>
      <a href="#oursolutions" onClick={() => {setActive("#oursolutions")}} className={active === '#oursolutions' ? 'active' : ''}><WorkOutline/></a>
      <a href="#managedservices" onClick={() => {setActive("#managedservices")}} className={active === '#managedservices' ? 'active' : ''}><StorageIcon/></a>
      <a href="#partnerships" onClick={() => {setActive("#partnerships")}} className={active === '#partnerships' ? 'active' : ''}><PeopleOutlineIcon/></a>
    </navsmall>
  )
}

export default Nav