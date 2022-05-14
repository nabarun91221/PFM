import React from 'react'
import "./loan.css"
import LoanForm from '../../components/loanForm'
import LoanList from './loanList';
import { useState } from 'react';
import Datas from '../../Data/data/data';
const Loan = () => {
  const [UserLoanData, setUserLoanData] = useState(Datas.LoanEntries);
  return (
    <div className='Loan'>
      <LoanList UserLoanData={UserLoanData}></LoanList>
      <LoanForm setUserLoanData={setUserLoanData} UserLoanData={UserLoanData}></LoanForm>
      
    </div>
  )
}

export default Loan