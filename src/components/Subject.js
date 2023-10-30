import React, { Component } from 'react';

class Subject extends Component {
    render(){
      return (
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();             // App.js의 onChangePage 함수 호출
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;