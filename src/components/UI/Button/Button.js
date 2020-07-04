import React from 'react'
import classes from './Button.css'

const button = (props) => (
	<button
		className = "Success Button" 
		onClick = {props.clicked}
	>
	{props.children}
	</button>
)

export default button;