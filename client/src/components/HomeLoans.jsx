import React from 'react';

const HomeLoans = ({view}) => {
  return (<div>
    {view === 'Home Loans' ? (
    <div className="superNavLoansModal">
      <h3 id="modalLoansTitle1">Shop Mortgages</h3>
        {col1.map((col1Item, idx) => <span id={"loansModalColOne" + idx} className="modalText" key={idx}>{col1Item}</span>)}
      <span className="loansDivider1"></span>
      <span className="loansDivider2"></span>
      <h3 id="modalLoansTitle2">Calculators</h3>
        {col2.map((col2Item, idx) => <span id={"loansModalColTwo" + idx} className="modalText" key={idx}>{col2Item}</span>)}
      <h3 id="modalLoansTitle3">Resources</h3>
        {col3.map((col3Item, idx) => <span id={"loansModalColThree" + idx} className="modalText" key={idx}>{col3Item}</span>)}
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