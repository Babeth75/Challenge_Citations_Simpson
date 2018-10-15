import React, { Component } from 'react';
import GenerateCitations from './GenerateCitations';
import DisplayCitations from './DisplayCitations';
import './App.css';

class App extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      citations : []
    }
  }

  getCitations(){
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => this.setState({citations: data}))
  }
  

  componentDidMount(){
    this.getCitations();
  }

  

  render() {
    if(this.state.citations === []){
      return "loading"
    }

      return  (
        <div className="generateCharacter">

          <GenerateCitations  selectCitations={() =>  this.getCitations()}  />
          <DisplayCitations  citations={this.state.citations}  />

        </div>
      )
  }
}

export default App;
