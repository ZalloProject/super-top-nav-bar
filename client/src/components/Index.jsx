import React from 'react';
import Buy from './Buy.jsx';
import Rent from './Rent.jsx';
import Sell from './Sell.jsx';
import HomeLoans from './HomeLoans.jsx';
import AgentFinder from './AgentFinder.jsx';
import Logo from './Logo.jsx';

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
      <div className="superNavOuterContainer">
        <span className="superNavInnerContainer">
        <Buy 
        handleHover={this.handleHover} 
        view={this.state.view}/>
        Buy
        <Rent 
        handleHover={this.handleHover} 
        view={this.state.view}/>
        Rent
        <Sell handleHover={this.handleHover} 
        view={this.state.view}/>
        Sell
        <HomeLoans 
        handleHover={this.handleHover} 
        view={this.state.view}/>
        Home Loans
        <AgentFinder 
        handleHover={this.handleHover} 
        view={this.state.view}/>
        Agent Finder
        <Logo />
        List your rental
        Advertise
        Sign in or Join
        Help
        </span>
      </div>
    )
  }
}

export default Index