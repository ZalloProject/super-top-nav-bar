import React from 'react';

const Buy = ({view}) => {
  return (<div>
    {view === 'Buy' ? (
    <div className="superNavBuyModal">
      <h3 className="modalTitle">Phoenix homes for sale</h3>
        {col1.map((col1Item, idx) => <span className="col1Item" key={idx}>{col1Item}</span>)}
      <h3 className="modalTitle">Resources</h3>
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