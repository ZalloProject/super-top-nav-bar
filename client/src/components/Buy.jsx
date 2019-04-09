import React from 'react';

const Buy = ({view}) => {
  return (<div>
    {view === 'Buy' ? (
    <div className="superNavBuyModal">
      <span className="modalTitle">Phoenix homes for sale</span>
        {col1.map((col1Item, idx) => <span className="col1Item" key={idx}>{col1Item}</span>)}
      <span className="modalTitle">Resources</span>
        {col2.map((col2Item, idx) => <span className="col2Item" key={idx}>{col2Item}</span>)}
    </div>
    ) : (
      <div></div>
    )}
  </div>)
}

let col1 = [
  "Homes For sale",
  "Foreclosures",
  "For sale by owner",
  "Open houses",
  "New construction",
  "Coming soon",
  "Recent home sales",
  "All homes"
]
let col2 =[
  "Buyers Guide",
  "Foreclosure center",
  "Real estate app",
  "Find a buyer's agent",
  "Schools in Phoenix"
]

export default Buy