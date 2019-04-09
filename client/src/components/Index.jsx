import React from 'react';
import Buy from './Buy.jsx';
import Rent from './Rent.jsx';
import Sell from './Sell.jsx';
import HomeLoans from './HomeLoans.jsx';
import AgentFinder from './AgentFinder.jsx';

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: '',
    }
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
  }

  handleOnMouseEnter(str){
    this.setState({
      view: str
    }, ()=>{
      console.log(this.state)
    })
  }

  render(){
    return(
      <div className="superNavContainer">
        <Buy 
          view={this.state.view}/>
          <p id="superNavTextBuy" 
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Buy
          </p>
        <Rent 
          view={this.state.view}/>
          <p id="superNavTextRent"
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Rent
          </p>
        <Sell
          view={this.state.view}/>
          <p id="superNavTextSell"
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Sell
          </p>
        <HomeLoans
          view={this.state.view}/>
          <p id="superNavTextLoans"
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Home Loans
          </p>
        <AgentFinder
          view={this.state.view}/>
          <p id="superNavTextAgent"
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Agent Finder
          </p>
        <img src="https://s3-us-west-2.amazonaws.com/agents-zallo/zalloLogo.jpg" 
          id="superNavLogo"
          onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
        </img>
        <p 
          id="superNavTextRental"
          onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
          List your rental
        </p>
        <p 
        id="superNavTextAdvertise"
        onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
          Advertise
        </p>
        <p 
        id="superNavTextSignIn"
        onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
          Sign in or Join
        </p>
        <p 
        id="superNavTextHelp"
        onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
          Help
        </p>
      </div>
    )
  }
}


export default Index