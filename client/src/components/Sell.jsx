import React from 'react';

const Sell = ({view}) => {
  return (<div>
    {view === 'Sell' ? (
    <div className="superNavSellModal">
      <h3 id="modalSellTitle1">Selling tools</h3>
        {col1.map((col1Item, idx) => <span id={"sellModalColOne" + idx} className="modalText" key={idx}>{col1Item}</span>)}
      <span className="divider"></span>
      <h3 id="modalSellTitle2">Post a home for sale</h3>
        {col2.map((col2Item, idx) => <span id={"sellModalColTwo" + idx} className="modalText" key={idx}>{col2Item}</span>)}
    </div>
    ) : (
    <div></div>
    )}
  </div>)
}

let col1 = [
  "See your home's Zestimate",
  "Home values",
  "Sellers Guide"
]
let col2 =[
  "For sale by owner",
  "Make me move"
]

export default Sell 