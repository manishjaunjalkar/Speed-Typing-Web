import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import {toast} from 'react-toastify'
const Loginform=({handleClose})=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const {theme} = useTheme();

    const handleSubmit=()=>{
        if(!email || !password){
            toast.warning('Fill all Details', {
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
        }
        
        auth.signInWithEmailAndPassword(email,password).then((res)=>{
            toast.success('Logged in', {
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
                return;
        })
        .catch((err)=>{
            toast.error('Invalid Credintials', {
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
        <Box
        p={3}
        style={{
            display:'flex',
            flexDirection:'column',
            gap:"20px"
        }}
        >
            <TextField 
            variant="outlined"
            type="email"
            label="Enter Email"
            onChange={(e)=>setEmail(e.target.value)}
           InputLabelProps={{
            style:{
                color: theme.textColor
            }
           }}
           inputProps={{
            style:{
                color: theme.textColor
            }
           }}
           ></TextField>
            <TextField
            variant="outlined"
            type="password"
            label="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}

            InputLabelProps={{
                style:{
                    color: theme.textColor
                }
               }}
             inputProps={{
                style:{
                    color: theme.textColor
                }
            }}
            ></TextField>
            <Button
            variant="contained"
            size="large"
            style={{backgroundColor:theme.textColor, color: theme.backgroundColor}}
            onClick={handleSubmit}
           >Login</Button>

        </Box>

        )
}
export default Loginform;