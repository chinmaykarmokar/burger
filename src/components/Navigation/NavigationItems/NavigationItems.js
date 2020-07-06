import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
	<ul className = "NavigationItems">
		<NavigationItem link = "/">Burger Builder</NavigationItem>
		<NavigationItem link = "/">Checkout</NavigationItem>
	</ul>
)

export default navigationItems;