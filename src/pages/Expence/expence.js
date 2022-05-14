
import ExpenceForm from '../../components/expenceForm'
import "./expence.css"
import CirculerChart from '../../components/circulerChart'
import expenceTrackerDatas from '../../Data/data/datafromExpenceTracker'
import { useState, React,useEffect } from 'react';
const Expence = () => {
    
 
    const [ExpenceTrackerDatas, setExpenceTrackerDatas] = useState(expenceTrackerDatas);
    
    const [ExpenceChartData, setExpenceChartData] = useState({
    labels: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type==="expence"?data.text:" ").filter(item => item !== " "),
    datasets: [
      {
        label: "Expence",
        data: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type==="expence"?data.amount:" ").filter(item => item !== " "),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
    
    });
    const [IncomeChartData, setIncomeChartData] = useState({
    labels: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type==="income"? data.text:" ").filter(item => item !== " "),
    datasets: [
      {
        label: "Expence",
        data: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type==="income"? data.amount:" ").filter(item => item !== " "),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
    });

    const setECD = () => {
        setExpenceChartData({
            labels: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type === "expence" ? data.text : " ").filter(item => item !== " "),
            datasets: [
                {
                    label: "Expence",
                    data: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type === "expence" ? data.amount : " ").filter(item => item !== " "),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                },
            ],
        });
    }
    const setICD = () => {
        setIncomeChartData({
            labels: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type === "income" ? data.text : " ").filter(item => item !== " "),
            datasets: [
                {
                    label: "Expence",
                    data: ExpenceTrackerDatas.ExpenceEntries.map((data) => data.type === "income" ? data.amount : " ").filter(item => item !== " "),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                },
            ],
        });
    }
    
    
    
    const onFormSubmit = (newData) => {
        console.log(newData);
           ExpenceTrackerDatas.ExpenceEntries.push(newData);
           console.log(ExpenceTrackerDatas.ExpenceEntries);
           setECD();
           setICD();
           console.log(ExpenceChartData);
           console.log(IncomeChartData);
    }
    return (
        <div className='expence'>
            <div className="Chart">
                <CirculerChart data={ExpenceChartData} title="Expence"></CirculerChart>
                <CirculerChart data={IncomeChartData} title="Income"></CirculerChart>
            </div>
            <ExpenceForm onFormSubmit={onFormSubmit}></ExpenceForm>
            
      </div>
      
  )
}

export default Expence