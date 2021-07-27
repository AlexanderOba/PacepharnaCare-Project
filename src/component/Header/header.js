import React, { Component } from 'react';
import './header.css';
import Burger from './burger';
import logo from "../../images/logo.png"




class Header extends Component {
    render(){
        return(
            
              <nav>
               <div className="nav">
                  <div className="nav-logo"><img src={logo}/></div>
                 <Burger/>
              </div>
            </nav>

        )
    }
}
export default Header;