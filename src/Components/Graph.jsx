import React  from "react";
import {Line} from 'react-chartjs-2'
import { useTheme } from "../Context/ThemeContext";

import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineElement
} from 'chart.js';



ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Graph =({graphData})=>{
    const {theme}= useTheme();
return (
    <>
    <Line
    data={
        {
            labels: graphData.map(i=>i[0]),
            datasets:[
                {
                    data:graphData.map(i=>i[1]),
                    label:'graph1',
                    borderColor:theme.textColor
                },
                
            ]
        }
    }
    />

    </>
)
}

export default Graph;