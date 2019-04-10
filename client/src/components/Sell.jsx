import React from 'react';
import style from './style.css'

const Sell = ({view}) => {
  return (<div>
    {view === 'Sell' ? (
    <div className={style.superNavSellModal}>
      <h3 id={style.modalSellTitle1}>Selling tools</h3>
        {col1.map((col1Item, idx) => <span id={style["sellModalColOne" + idx]}  className={style.modalText} key={idx}>{col1Item}</span>)}
      <span className={style.divider}></span>
      <h3 id={style.modalSellTitle2}>Post a home for sale</h3>
        {col2.map((col2Item, idx) => <span id={style["sellModalColTwo" + idx]} className={style.modalText} key={idx}>{col2Item}</span>)}
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