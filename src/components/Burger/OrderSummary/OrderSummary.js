import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'
import classes from '../../UI/Button/Button.css'

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return <li key = {igKey}><span style = {{textTransform : "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
		});

	return(
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: {props.price}</strong></p>
			<p>Continue to checkout?</p>
			<Button className = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
			<Button className = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
		</Aux>
	)
}

export default orderSummary;