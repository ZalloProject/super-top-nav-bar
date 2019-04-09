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
    console.log(e)
  }

  render(){
    return(
      <div className="superNavContainer">
        <Buy onHover={(e)=> {this.handleHover}} 
          view={this.state.view}/>
          <p id="superNavTextBuy">
            Buy
          </p>
        <Rent onHover={(e)=> {this.handleHover}} 
          view={this.state.view}/>
          <p id="superNavTextRent">
            Rent
          </p>
        <Sell onHover={(e)=> {this.handleHover}}
          view={this.state.view}/>
          <p id="superNavTextSell">
            Sell
          </p>
        <HomeLoans onHover={(e)=> {this.handleHover}}
          view={this.state.view}/>
          <p id="superNavTextLoans">
            Home Loans
          </p>
        <AgentFinder onHover={(e)=> {this.handleHover}} 
          view={this.state.view}/>
          <p id="superNavTextAgent">
            Agent Finder
          </p>
        <img src="https://s3-us-west-2.amazonaws.com/agents-zallo/zalloLogo.jpg" 
          id="superNavLogo">
        </img>
        <p id="superNavTextRental">
          List your rental
        </p>
        <p id="superNavTextAdvertise">
          Advertise
        </p>
        <p id="superNavTextSignIn">
          Sign in or Join
        </p>
        <p id="superNavTextHelp">
          Help
        </p>
      </div>
    )
  }
}

export default Index