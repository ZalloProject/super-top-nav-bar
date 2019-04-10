import React from 'react';
import style from './style.css'

const AgentFinder = ({view}) => {
  return (<div>
    {view === 'Agent Finder' ? (
    <div className={style.superNavAgentModal}>
      <h3 id={style.modalAgentTitle1}>Looking for Pros?</h3>
        {col1.map((col1Item, idx) => <span id={style["agentModalColOne" + idx]} className={style.modalText} key={idx}>{col1Item}</span>)}
      <span className={style.divider}></span>
      <h3 id={style.modalAgentTitle2}>I'm a pro</h3>
        {col2.map((col2Item, idx) => <span id={style["agentModalColTwo" + idx]} className={style.modalText}  key={idx}>{col2Item}</span>)}
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