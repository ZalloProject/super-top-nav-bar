import React from 'react';

const AgentFinder = ({view}) => {
  return (<div>
    {view === 'Agent Finder' ? (
    <div className="superNavAgentModal">
      <h3 id="modalAgentTitle1">Looking for Pros?</h3>
        {col1.map((col1Item, idx) => <span id={"AgentModalColOne" + idx} className="modalText" key={idx}>{col1Item}</span>)}
      <span className="divider"></span>
      <h3 id="modalAgentTitle2">I'm a pro</h3>
        {col2.map((col2Item, idx) => <span id={"AgentModalColTwo" + idx} className="modalText" key={idx}>{col2Item}</span>)}
    </div>
    ) : (
    <div></div>
    )}
  </div>)
}

let col1 = [
  "Real estate agents",
  "Property managers",
  "Home inspectors",
  "Other pros",
  "Home improvement pros",
  "Home builders",
  "Real estate photographers",
]
let col2 =[
  "Agent advertising",
  "Agent resource center",
  "Create a free agent account",
  "Real estate marketing guide",
  "Agent email scripts",
  "Listing flyer templates",
]

export default AgentFinder