import React, { Component } from 'react';
import './App.css';
import Content from "./components/Content";
import Subject from './components/Subject';
import TOC from "./components/TOC";


class App extends Component {
  constructor(props){        // render()보다 먼저 실행되면서 component 값 초기화
    super(props);
    this.state = {          // 내부적으로 사용할 때 state 로 사용
      mode: 'read',
      subject: {title:'WEB', sub:'world wide web!'},
      welcome: {title:'Welcome', desc: 'Hello, React!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    console.log("App render");
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            //this.state.mode = 'welcome';   // 이것만 쓰면 this 를 찾을 수 없기 때문에 오류남 -> 뒤에 .bind(this)를 적어줘야함
                                             //이처럼 값을 바꾼다면 react 입장에서는 몰래바꾸는 식임 -> 화면은 바뀔지언정 렌더링할때 적용 안됨
            this.setState({                  // setState로 변경하는 값은 객체 형태로 setState해줘야함.
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
