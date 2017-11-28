
import  React, { Component } from 'react'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            productInfo: ''
        }
    }

    addNewProduct = () => {

    }


    render(){
        return(
            <div>
                <h1>My Cart</h1>
                <input type: {this.state.productInfo} onChange = { (e)=> setState({productInfo: e.target.value()}) }/>
                <button onclick={this.addNewProduct()}> Add new product </button>
            </div>
        )
    }
}

