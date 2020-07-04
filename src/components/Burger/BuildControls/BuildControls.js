import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
	{label:'Salad',type:'salad'},
	{label:'Bacon',type:'bacon'},
	{label:'Meat',type:'meat'},
	{label:'Cheese',type:'cheese'},
]

const buildControls = (props) => (
	<div>
		<div className = "BuildControls">
			<p>Current Price: <strong>{props.price}</strong></p>
			{controls.map(ctrl => (
				<BuildControl 
					key = {ctrl.label} 
					label = {ctrl.label} 
					added = {() => props.ingredientAdded(ctrl.type)}
					removed = {() => props.ingredientRemoved(ctrl.type)}
				/>
			))}
			<button disabled = {!props.purchasable} className = "OrderButton" onClick = {props.ordered}>ORDER NOW!</button>
		</div>
	</div>
)

export default buildControls; 