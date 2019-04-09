import React from 'react';
import Buy from './Buy.jsx';
import Rent from './Rent.jsx';
import Sell from './Sell.jsx';
import HomeLoans from './HomeLoans.jsx';
import AgentFinder from './AgentFinder.jsx';
import Logo from './Logo.jsx';
import RightSide from './RightSide'

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: '',
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(e){
    console.log(e.target)
  }

  render(){
    return(
      <div className="superNavContainer">
        <Buy onHover={(e)=> {this.handleHover}} view={this.state.view}/>
        <Rent onHover={(e)=> {this.handleHover}} view={this.state.view}/>
        <Sell onHover={(e)=> {this.handleHover}} view={this.state.view}/>
        <HomeLoans onHover={(e)=> {this.handleHover}} view={this.state.view}/>
        <AgentFinder onHover={(e)=> {this.handleHover}} view={this.state.view}/>
        <Logo/>
        <RightSide/>
      </div>
    )
  }
}

export default Index