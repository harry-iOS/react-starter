import  React, {Component} from 'react'


const productStyle = {

}

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            quantity: props.quantity,
            price: props.price,
            updateProduct: () => {}
        };
    }

    render(){
        console.log("Product log")
        return(
            <div style = {productStyle}>
                <h4>{this.state.name}</h4>
                <h4>{this.state.quantity}</h4>
                <button onClick={() => { this.setState({ quantity: this.state.quantity + 1 }); this.setState({ price: this.state.quantity * this.state.price }) }}> + </button>
                <button onClick={() => { if (this.state.quantity > 1) {this.setState({ quantity: this.state.quantity - 1 }); this.setState({ price: this.state.quantity * this.state.price })}}}> - </button>
                <h4>{this.state.price}</h4>
            </div>
        )
    }
}

export default Product
