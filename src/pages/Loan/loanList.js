import React from 'react'
// import Datas from '../../Data/data/data'
import { useEffect } from 'react';
import "./loanList.css"
import LoanItems from '../../components/loanItems'
const LoanList = ({ UserLoanData }) => {
  let counter = 0;
  return (
      <div className='loanList'>
      {
        UserLoanData.map(Ldata => {
          counter++;
          return(
            <LoanItems title={`${counter}) Loan for ${Ldata.type} from ${Ldata.loanProvider} worth ${Ldata.amount} with interest rate of ${Ldata.inRate}, you need to pay total of ${Ldata.totalAmt}, and ${Ldata.oneTimeAmt} as per ${Ldata.mntGap} mounth gap`}></LoanItems>
          )
        })
        
     }
     </div>
  )
}

export default LoanList