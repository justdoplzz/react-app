import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content";
import Subject from './components/Subject';
import TOC from "./components/TOC";


class App extends Component {
  constructor(props){        // render()보다 먼저 실행되면서 component 값 초기화
    super(props);
    this.state = {          // 내부적으로 사용할 때 state 로 사용
      subject: {title:'WEB', sub:'world wide web!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
