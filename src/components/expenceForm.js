
import "./expenceForm.css"
import { useState,React } from 'react';
const ExpenceForm = ({onFormSubmit}) => {
  let date1 = new Date();
  const [text, settext] = useState("");
  const [type, settype] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");
  const setText = (e) => {
    settext(e.target.value)
  }
  const setType = (e) => {
    settype(e.target.value);
  }
  const setDate = (e) => {
    setdate(e.target.value);
  }
  const setAmount = (e) => {
    setamount(e.target.value);
  }
  const combineAllstate= (e) => {
      let obj=
        {
          text: text,
          type: type,
          date: date,
          amount: amount
      }
    if(text,type,date,amount)
      onFormSubmit(obj);

    e.preventDefault();
    settext("");
    settype("");
    setdate("");
    setamount("");

   
    
  }
  return (
      <div className='ExpenceForm'>
         
      <form className='exform' onSubmit={combineAllstate}>
               <p>Enpence Tracker</p>
        <input type="text" placeholder="Description.." className="description" onChange={setText} value={text}></input>
              <select className='type' onChange={setType}>
                  <option value="income">Income</option>
                  <option value="expence">Expence</option>
              </select>
        <input className='amt' type="text" placeholder='Amount' onChange={setAmount} value={amount}></input>
        <input className='date' type="date" placeholder={date1} onChange={setDate} value={date}></input>
              <button className='btn'>Add</button>
          </form>
    </div>
  )
}

export default ExpenceForm