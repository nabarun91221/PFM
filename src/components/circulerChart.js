import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import "./circulerChart.css"
export const CirculerChart = ({ data,title }) => {
    
    return (
        <div className='CirculerChart'>
            <h4>{title}</h4>
        <div className='chart'>
             <Doughnut data={data}></Doughnut>
        </div>
            
      </div>
            
  )
}
export default CirculerChart