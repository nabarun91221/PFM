import React from 'react'
import './loanItem.css'
const LoanItems = (props) => {
  return (
      <div className='loanItems'>
          <p className='title'>{props.title}</p>
     </div>
  )
}

export default LoanItems