import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { AppBar, Box, Modal, Tab, Tabs } from "@mui/material";
import Loginform from "./LoginForm";
import SignupForm from "./SignupForm";
import { useTheme } from "../Context/ThemeContext";
import GoogleButton from "react-google-button";
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect} from 'firebase/auth';
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";
const AccountCircle=()=>{
    const [open, setOpen]= useState(false);
    const [value, setValue]= useState(0)  
    const {theme}= useTheme();
    
    const [user] =useAuthState(auth);
    const navigate = useNavigate();

    const handleModalOpen=()=>{
        if(user){
            //navigate to the user page
            navigate('./user');
        }else{
            setOpen(true);
        }
       
    }
    const handleClose=()=>{
        setOpen(false);
    }

    const handleValueChange=(e,v)=>{
        setValue(v);
    }

    const logout=()=>{
        auth.signOut().then((res)=>{
            toast.success('Logged out', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider).then((res)=>{
            toast.success('Google Login Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                handleClose();
        })
        .catch((err)=>{
            toast.error(errorMapping[err.code] || 'not able to use google authentication', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                return;
        })


    }
    return (
        <div>
           <AccountCircleIcon  onClick={handleModalOpen}/>
            {user && <LogoutIcon onClick={logout}/>}
            <Modal
                 open={open}
                onClose={handleClose}
                style={
                {display:'flex',
                 alignItems : 'center' ,
                 justifyContent:'center'

                }}
            >
                <div style={{width:'400px', textAlign:'center'}}>
                    <AppBar position="static" style={{background:'transparent'}}>
                        <Tabs
                            value={value}
                            onChange={handleValueChange}
                            variant="fullWidth"
                        >
                            <Tab label="Login" style={{color:theme.textColor}}></Tab>
                            <Tab label="Signup"style={{color:theme.textColor}}></Tab>
                        </Tabs>
                    </AppBar>
                    {value===0 && <Loginform handleClose={handleClose} />}
                    {value===1 && <SignupForm handleClose={handleClose}/> }

                    <Box>
                       <span>OR</span> 
                       <GoogleButton
                       style={{width:'100%',marginTop:'12px'}}
                       onClick={handleGoogleSignIn}
                      />
                    </Box>

                </div>
            </Modal>
        </div>
    )
}
export default AccountCircle;