import React from "react";
import AccountCircle from "./AccountCircle";
import Logo from '../typing-logo.svg';
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
                 <img  className='logo-img' src={Logo} />
            </div>
            <div className="user-icon" style={{cursor:'pointer'}}>
                {/*user icon here*/}
                <AccountCircle/>
            </div>
        </div>
    )
}
export default Header;