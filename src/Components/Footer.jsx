import React, { useState } from "react";
import Select from 'react-select'
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer=()=>{
    
    const {setTheme , theme}=useTheme();
    const hangleChange=(e)=>{
        console.log(e);
      
        setTheme(e.value);
        localStorage.setItem("theme",JSON.stringify(e.value));
    }
    
    return(
        <div className="footer">
            <div className="links">
            <a href='https://github.com/manishjaunjalkar' target="_blank" className='a'>
                <GitHubIcon style={{marginRight:'4px'}}/>
                </a>
              
            <a href='https://www.linkedin.com/in/manishjaunjalkar/' target="_blank" className='b'>
                <LinkedInIcon/>
            </a>
            </div>
            <div className="themeButton">
                <Select
               defaultValue={{label:theme.label, value:theme}}
                onChange={hangleChange}
                options={themeOptions}
                menuPlacement="top"

                styles={{
                    control: styles=>({...styles, backgroundColor: theme. background, color:theme.textColor}),
                    menu: styles=>({...styles, backgroundColor:theme.background}),
                    option:(styles, {isfocused})=>{
                        return {
                            ...styles,
                            backgroundColor:(!isfocused)? theme.background: theme.textColor,
                            color: (!isfocused)? theme.textColor: theme.background,
                            cursor: 'pointer',
                        }
                    }
                }}
                />
            </div>
        </div>
    )
}
export default Footer;