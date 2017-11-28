import React from "react";
import ReactDOM from "react-dom";
import  List from './List.js'


// import Example1 from './Example1.js'
// import Example2, { PureFunction } from './Example2.js'
// import pureFunction from './Example2.js'

//
// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>Hello {this.props.name}
//       <Example1 data = "Bhasad"/>
//       <Example1/>
//       <Example2/>
//       <PureFunction arg1 = {10} arg2 = {20}/>
//       </div>
//     )
//   }
// }

class  Cart extends  React.Component {

  render(){
    return(
        <div>
          <List/>
        </div>
    )
  }

}


// const  App = () => {
//
//   <div>
//     <Examp
//   </div>
//
// }


// var mountNode = document.getElementById("app");
// var name = mountNode.getAttribute("name")
// ReactDOM.render(<HelloMessage name={name} />, mountNode);

var mountNode = document.getElementById("app");
ReactDOM.render(<Cart/>, mountNode);
