import React from 'react';
import Buy from './Buy.jsx';
import Rent from './Rent.jsx';
import Sell from './Sell.jsx';
import HomeLoans from './HomeLoans.jsx';
import AgentFinder from './AgentFinder.jsx';
import style from './style.css';

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
    })
  }

  render(){
    return(
      <div className={style.superNavContainer}>
        <Buy 
          view={this.state.view}/>
          <p id={style.superNavTextBuy} 
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Buy
          </p>
        <Rent 
          view={this.state.view}/>
          <p id={style.superNavTextRent}
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Rent
          </p>
        <Sell
          view={this.state.view}/>
          <p id={style.superNavTextSell}
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Sell
          </p>
        <HomeLoans
          view={this.state.view}/>
          <p id={style.superNavTextLoans}
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Home Loans
          </p>
        <AgentFinder
          view={this.state.view}/>
          <p id={style.superNavTextAgent}
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Agent Finder
          </p>
          <img src="https://s3-us-west-2.amazonaws.com/agents-zallo/zalloLogo.jpg" 
            id={style.superNavLogo}
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
          </img>
          <p 
            id={style.superNavTextRental}
            onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            List your rental
          </p>
          <p 
          id={style.superNavTextAdvertise}
          onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Advertise
          </p>
          <p 
          id={style.superNavTextSignIn}
          onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Sign in or Join
          </p>
          <p 
          id={style.superNavTextHelp}
          onMouseEnter={(e)=>{this.handleOnMouseEnter(e.target.innerText)}}>
            Help
          </p>
        </div>
    )
  }
}


export default Index