import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index.jsx';

class App extends React.Component {
  render(){
    return(<div>
      <Index />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('super-top-nav-bar'))