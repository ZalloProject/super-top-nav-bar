import React from 'react';
import style from './style.css'

const HomeLoans = ({view}) => {
  return (<div>
    {view === 'Home Loans' ? (
    <div className={style.superNavLoansModal}>
      <h3 id={style.modalLoansTitle1}>Shop Mortgages</h3>
        {col1.map((col1Item, idx) => <span id={style["loansModalColOne" + idx]} className={style.modalText} key={idx}>{col1Item}</span>)}
      <span className={style.loansDivider1}></span>
      <span className={style.loansDivider2}></span>
      <h3 id={style.modalLoansTitle2}>Calculators</h3>
        {col2.map((col2Item, idx) => <span id={style["loansModalColTwo" + idx]} className={style.modalText} key={idx}>{col2Item}</span>)}
      <h3 id={style.modalLoansTitle3}>Resources</h3>
        {col3.map((col3Item, idx) => <span id={style["loansModalColThree" + idx]} className={style.modalText} key={idx}>{col3Item}</span>)}
    </div>
    ) : (
    <div></div>
    )}
  </div>)
}

let col1 = [
  "Mortgage lenders",
  "HELOC lenders",
  "Mortgage rates",
  "Refinance rates",
  "All mortgage rates"
]
let col2 =[
  "Mortgage calculator",
  "Refinance calculator",
  "Affordability calculator",
  "Amortization calculator",
  "Debt-to-Income calculator",
]

let col3 =[
  "Lender reviews",
  "Mortgage learning center",
  "Mortgages app",
  "Lender resource center"
]

export default HomeLoans