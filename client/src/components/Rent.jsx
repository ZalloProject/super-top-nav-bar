import React from 'react';

const Rent = ({view}) => {
  return (<div>
    {view === 'Rent' ? (
    <div className="superNavRentModal">
      <h3 id="modalRentTitle1">Search for Rentals</h3>
        {col1.map((col1Item, idx) => <span id={"RentModalColOne" + idx} className="modalText" key={idx}>{col1Item}</span>)}
      <span className="divider"></span>
      <h3 id="modalRentTitle2">I'm a Rental Manager</h3>
        {col2.map((col2Item, idx) => <span id={"RentModalColTwo" + idx} className="modalText" key={idx}>{col2Item}</span>)}
      <h3 id="modalRentTitle3"> I'm a Renter</h3>
        {col3.map((col3Item, idx) => <span id={"RentModalColThree" + idx} className="modalText" key={idx}>{col3Item}</span>)}
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