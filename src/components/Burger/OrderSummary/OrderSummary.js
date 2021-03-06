import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'
import classes from '../../UI/Button/Button.css'

class OrderSummary extends React.Component{

	render(){
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(igKey => {
				return <li key = {igKey}><span style = {{textTransform : "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
			});

		return(
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price: {this.props.price}</strong></p>
				<p>Continue to checkout?</p>
				<Button className = "Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
				<Button className = "Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
			</Aux>
		)
	}
}

export default OrderSummary;