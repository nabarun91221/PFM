
import { React, useState } from 'react';
import "./loanForm.css";
const LoanForm = ({setUserLoanData,UserLoanData}) => {
    let date1 = new Date();
    const [LoanProvider, setLoanProvider] = useState("");
    const [LoanType, setLoanType] = useState("");
    const [LoanAmount, setLoanAmount] = useState();
    const [InRate, setInRate] = useState();
    const [Duration, setDuration] = useState();
    const [MntGap, setMntGap] = useState();
    const [TotalAmt, setTotalAmt] = useState();
    const [OneTimeAmt, setOneTimeAmt] = useState();
    const [date, setdate] = useState(date1);
    const ClaculateTotalAmt = () => {
        setTotalAmt(Number(LoanAmount) + (LoanAmount * InRate / 100)*Duration/MntGap);
    }
    const ClaculateOneTimeAmt = () => {
        setOneTimeAmt(Math.round(TotalAmt / Duration - MntGap));
    }
    const combineAllstate = (e) => {
      let obj=
        {
            loanProvider: LoanProvider,
            type: LoanType,
            amount: LoanAmount,
            inRate: InRate,
            duration:Duration,
            mntGap: MntGap,
            totalAmt:TotalAmt,
            oneTimeAmt:OneTimeAmt,
            date:date
      }
        let objArray = UserLoanData;
        objArray.push(obj);
        setUserLoanData(objArray);
        console.log(UserLoanData);
    

       e.preventDefault();
        setLoanProvider("");
        setLoanType("");
        setLoanAmount();
        setInRate();
        setDuration();
        setMntGap();
        setTotalAmt();
        setOneTimeAmt();
        setdate();
    
  }
    return (
       

        <div className='Loanform'>
            <form className='Eform'>
                <h2 className='loanHeader'>Add Your Existing Loan</h2>
                <label>Loan Provider name</label>
                <input className='loanProvider same' placeholder='Loan Provider' onChange={(e) => { setLoanProvider(e.target.value) }} value={LoanProvider}></input>
                <label>Select Loan Type</label>
                <select className='loanType same' onChange={(e) => {
                    setLoanType(e.target.value);
                    
                }} value={LoanType}>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="CreditCard Loan">CreditCard Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Car Laon">Car Laon</option>
                    <option value="Two-wheeler Loan">Two-wheeler Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Agriculture Loan">Agriculture Loan</option>
                    <option value="Gold Loan">Gold Loan</option>
                    <option value="Education Loan">Education Loan</option>
                </select>
                 <label> Loan Amount</label>
                <input className='loanAmount same' placeholder='Loan Amount' value={LoanAmount} onChange={(e) => { setLoanAmount(e.target.value) }}></input>
                <label> Interent Rate</label>
                <input className='loanInRate same' placeholder='Interest Rate' value={InRate} onChange={(e) => { setInRate(e.target.value) }}></input>
                <label>Duration</label>
                <input className='Duration same' placeholder='Enter Dureation' value={Duration} onChange={(e) => { setDuration(e.target.value) }}></input>
                <label>Mounth Gap</label>
                <input className='mntGap same' placeholder='Enter Mounth Gap' value={MntGap} onChange={(e) => { setMntGap(e.target.value) }}></input>
                <label>Total Amount</label>
                <input className='totalAmt same' placeholder="Click to Calculate Total Payable" value={TotalAmt} onChange={ClaculateTotalAmt} onClick={ClaculateTotalAmt}></input>
                <label>One Time Payable Amount</label>
                <input className='OneTimePayable same' placeholder="Click to Calculate One Time Payable Amount" value={OneTimeAmt} onChange={ClaculateOneTimeAmt} onClick={ClaculateOneTimeAmt}></input>
                <label>Data</label>
                <input className='Loandate same' type="date" placeholder={date} onChange={(e) => {
                    setdate(e.target.value);
                }} value={date}></input>


           <button className='btn' onClick={combineAllstate}>Submit</button>
          </form>
     </div>
  )
}

export default LoanForm