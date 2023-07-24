import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import UserInfo from "../Components/UserInfo";
const UserPage = ()=>{

    const [data, setData]= useState([]);
    const [user, loading]= useAuthState(auth)
    const [dataLoading, setDataLoading]=useState(true)
    const [graphData, setGraphData]=useState([]);
    const navigate= useNavigate();
    const fetchUserData=()=>{
        const resultsRef = db.collection('Results');
       const {uid}= auth.currentUser;
      let tempData=[];
      let tempGraphData=[];
       resultsRef
        .where("userid", "==", uid)
        .orderBy('timeStamp','desc')
        .get()
        .then((snapshot)=>{
            console.log("snapshot", snapshot);
          snapshot.docs.forEach((doc)=>{
            tempData.push({...doc.data()});
            tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(",")[0],
                doc.data().wpm]);
          });
          console.log(tempData);
          setData(tempData);
          console.log(tempGraphData);
          setGraphData(tempGraphData.reverse());
          setDataLoading(false);
        });
    }

    useEffect(()=>{
        if(!loading){
            fetchUserData();
        }
        if(!loading && !user){
            navigate('/');
        }

    },[loading]);
    if(loading || dataLoading){
        return(
         <div className="center-of-screen">
            <CircularProgress size={300}/>
        </div>
        )
    }
    return(
       <div className="canvas">
        <UserInfo totalTestTaken={data.length}/>
       <div className="graph-user-page">
             <Graph graphData={graphData}/>
       </div>
        <TableUserData data={data}/>
        
       </div>
    )
}
export default UserPage;