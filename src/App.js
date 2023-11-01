import React, { Component } from 'react';
import './App.css';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import TOC from './components/TOC';


class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'world wide Web!'},
      welcome:{title:'welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // 1. original 데이터를 바꾸는 것
        /* this.state.contents.push(                    // push : 원본에 새로운 데이터 추가
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:this.state.contents
        }); */
        // 2. original 데이터는 바꾸지 않고 추가하는 방법
        var _contents = this.state.contents.concat(     // concat : 복제본에 새로운데이터를 추가
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
    return(
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>

        <TOC
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}>
        </TOC>

        <Control onChangeMode={function(_mode){
            this.setState({
              mode:_mode
            });
          }.bind(this)}>
        </Control>
        
        {_article}
        
      </div>
    )
  }
}

export default App;
