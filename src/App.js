import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Subject from './components/Subject';
import TOC from './components/TOC';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyterText Markup Language."></Content>
      </div>
    )
  }
}

export default App;
