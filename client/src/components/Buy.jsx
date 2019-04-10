import React from 'react';
import style from './style.css'

const Buy = ({view}) => {
  return (<div>
    {view === 'Buy' ? (
    <div className={style.superNavBuyModal}>
      <h3 id={style.modalBuyTitle1}>Phoenix homes for sale</h3>
        {col1.map((col1Item, idx) => <span id={style["buyModalColOne" + idx]} className={style.modalText} key={idx}>{col1Item}</span>)}
      <span className={style.divider}></span>
      <h3 id={style.modalBuyTitle2}>Resources</h3>
        {col2.map((col2Item, idx) => <span id={style["buyModalColTwo" + idx]} className={style.modalText} key={idx}>{col2Item}</span>)}
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