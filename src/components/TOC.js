import React, { Component } from "react";

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){      // props, state가 변경되었을 때의 값을 인자로 받음
        console.log("===> TOC render shouldComponentUpdate"
            ,newProps.data      // 바뀐 값
            ,this.props.data    // 기존 값
        );
        if(this.props.data === newProps.data){
            return false;       // false 인 경우 render() 함수 미호출
        }
        return true;            // true 인 경우 render() 함수 호출
                            
    }
    render(){
        console.log("===>TOC render");
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
                // 1. 인자를 이용한 방식
                /*<li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                       onClick={function(id, e){
                           e.preventDefault();
                           this.props.onChangePage(id);
                       }.bind(this, data[i].id)}>
                        {data[i].title}
                    </a>
                </li> */
                //  2. 속성을 이용한 방식
                <li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                        data-id={data[i].id}
                       onClick={function(e){
                           e.preventDefault();
                           this.props.onChangePage(e.target.dataset.id);
                       }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>
            );
            i = i + 1;
        }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

  
export default TOC;