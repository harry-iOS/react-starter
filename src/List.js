import  React, { Component } from "react"
import  Product from './ListItem.js'

class List extends Component {
    constructor(){
        super()
        this.state = {
            productInfo: [],
            newProduct: ''
        }
    }


    submitClicked = () => {
        console.log("submit clicked");
        if (this.state.newProduct.length > 0 ) {
            let splitedArray = this.state.newProduct.split('-')
            let name = splitedArray[0]
            let price = splitedArray[1]
            let pro = [name, 1, price * 1]
            this.state.productInfo.push(pro)
            this.setState({productInfo:this.state.productInfo})
        }
    }

    updateProduct = (quantity, index) => {
        let pro = this.state.productInfo[index]
        this.state.productInfo[index] = [pro.name, quantity, pro.price * quantity]
    }

     getProduct = (item) => {
         console.log("getProduct");
         console.log("item ===========>", item);

         return <Product name = {item.name} quantity = {item.quantity} price = {item.price} updateProduct = {this.updateProduct} />

    }

    render(){
        return(
            <div>
                <input type = {this.state.newProduct} onChange = {(e)=>{this.setState(
                    {newProduct: e.target.value}
                )}} />
                <button value= "submit" onClick= {this.submitClicked}> Submit </button>

                {
                    this.state.productInfo.map( element =>
                        <Product name = {element[0]} quantity = {element[1]} price = {element[2] * element[1]} updateProduct = {this.updateProduct} />
                    )
                }

            </div>
        )
    }


}

export default  List


// {   console.log("after click") }
// { this.state.productInfo.forEach(this.getProduct) }
// { console.log("after get product") }