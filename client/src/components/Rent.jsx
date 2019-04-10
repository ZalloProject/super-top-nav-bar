import React from 'react';
import style from './style.css';

const Rent = ({view}) => {
  return (<div>
    {view === 'Rent' ? (
    <div className={style.superNavRentModal}>
      <h3 id={style.modalRentTitle1}>Search for Rentals</h3>
        {col1.map((col1Item, idx) => <span id={style["rentModalColOne" + idx]} className={style.modalText} key={idx}>{col1Item}</span>)}
      <span className={style.divider}></span>
      <span className={style.rentDivider}></span>
      <h3 id={style.modalRentTitle2}>I'm a Rental Manager</h3>
        {col2.map((col2Item, idx) => <span id={style["rentModalColTwo" + idx]}  className={style.modalText} key={idx}>{col2Item}</span>)}
      <h3 id={style.modalRentTitle3}> I'm a Renter</h3>
        {col3.map((col3Item, idx) => <span id={style["rentModalColThree" + idx]}  className={style.modalText} key={idx}>{col3Item}</span>)}
    </div>
    ) : (
    <div></div>
    )}
  </div>)
}

let col1 = [
  "Rental Buildings",
  "Apartments for rent",
  "Houses for rent",
  "All rental listings",
  "All rental buildings"
]
let col2 =[
  "Sign in to see your listings",
  "List a rental",
  "Rent payments",
  "Resource center",
]

let col3 =[
"My rent payments",
"Rent affordability calculator",
"Renters Guide",
]

export default Rent