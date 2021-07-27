import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 50%;
    color: #999999;
    font-size: 16px;
    align-items:  baseline;
    
    li{
        cursor: pointer;
      }
       a{
          
          list-style: none;
          text-decoration: none;
      }
      a:hover{
        text-decoration: none;
    }
@media screen and (max-width:1024px){
     width: 60%;
}
@media screen and (max-width:760px){
    position: fixed;
    left: -1px;
    height: 92vh;
    top: 8vh;
    background-color:  #0675c1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    z-index: -6;
    transform: ${({open}) => open ?'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.5s ease-in-out;


`;

const Navlist=({open})=>{
    return(
        <Ul open={open}>
        <NavHashLink
          to="/"
          className="homenavlnks"
          activeStyle={{
            color: "#44931B",
            lineHeight: "29px",
            fontWeight: "700",
            borderBottom: "4px solid #44931B"
          }}
        >
          <li>Home</li>
        </NavHashLink>
        <NavHashLink
          to="/company"
          className="homenavlnks"
          activeStyle={{
            color: "#44931B",
            lineHeight: "29px",
            fontWeight: "700",
            borderBottom: "4px solid #44931B"
          }}
        >
          <li>Company</li>
        </NavHashLink>
        <NavHashLink
          to="/services"
          className="homenavlnks"
          activeStyle={{
            color: "#44931B",
            fontWeight: "700",
            lineHeight: "29px",
            borderBottom: "4px solid #44931B",
          }}
        >
          <li>Services</li>
        </NavHashLink>
        <NavHashLink
          to="/learnmore"
          className="homenavlnks"
          activeStyle={{
            color: "#44931B",
            lineHeight: "29px",
            borderBottom: "4px solid #44931B",
          }}
        >
          <li>Our Products</li>
        </NavHashLink>
        <NavHashLink
          to="/contactus"
          activeStyle={{
            color: "#44931B",
            lineHeight: "29px",
            borderBottom: "4px solid #44931B"
          }}
          className="homenavlnks"
        >
          <li>Contact us</li>
        </NavHashLink>
        <Link to="/signin">
          <li className="nav-login-btn">Shop Now</li>
        </Link>
      </Ul>
    )
}
export default Navlist;