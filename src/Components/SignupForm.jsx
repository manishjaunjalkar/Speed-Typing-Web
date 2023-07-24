import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import {toast} from 'react-toastify'
import errorMapping from "../Utils/errorMapping";
const SignupForm=()=>{
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const handleSubmit =({handleClose})=>{
        if(!email || !password|| !confirmPassword){
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
        if(password!==confirmPassword){
            toast.warning('Password mismatch', {
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
        auth.createUserWithEmailAndPassword(email, password)
        .then((res)=>{
            toast.success('User Created', {
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
        }).catch((err)=>{
    
            toast.error(errorMapping[err.code] || 'some error occured', {
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
    const {theme} = useTheme();
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

            <TextField
            variant="outlined"
            type="password"
            label="Enter Confirm Password"
            onChange={(e)=>setConfirmPassword(e.target.value)}
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
           >Signup</Button>

        </Box>

        )
}
export default SignupForm;