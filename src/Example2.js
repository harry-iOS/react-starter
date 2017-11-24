import React from 'react'

export default class Example2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            pwd: ''
        }
    }

     onSubmitCalled = () => {
        console.log(this.state);
    }

    render(){
        return (
        <div>
            <div>
                <input type = {this.state.email} onChange = {(e)=>{this.setState(
                    {email: e.target.value} 
                )}} />
            </div>
            <div>
            <input type = {this.state.pwd} onChange = {(e)=>{this.setState(
                {pwd: e.target.value} 
            )}} />
            </div>
            <button value= "submit" onClick = { () => this.onSubmitCalled() }> submit </button>
        </div>
        )
    }
}

export const PureFunction = (props) => {
    return <div> {props.arg1 + props.arg2} </div>
}

