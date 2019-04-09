import React from 'react';
import Buy from './Buy.jsx';
import Rent from './Rent.jsx';
import Sell from './Sell.jsx';
import HomeLoans from './HomeLoans.jsx';
import AgentFinder from './AgentFinder.jsx';
import Logo from './Logo.jsx';
import RightSide from './RightSide.jsx';

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
      <div>
        <Buy handleHover={this.handleHover} view={this.state.view}/>
        <Rent handleHover={this.handleHover} view={this.state.view}/>
        <Sell handleHover={this.handleHover} view={this.state.view}/>
        <HomeLoans handleHover={this.handleHover} view={this.state.view}/>
        <AgentFinder handleHover={this.handleHover} view={this.state.view}/>
        <Logo />
        <RightSide />
      </div>
    )
  }
}

export default Index