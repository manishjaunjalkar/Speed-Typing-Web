import React from "react";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
function App() {
  const {theme}=useTheme();
  return (
     <ThemeProvider theme={theme}>
      <ToastContainer/>
      <GlobalStyles/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/user" element={<UserPage/>}/>
          </Routes>
      </ThemeProvider>

   
  );
}

export default App;
