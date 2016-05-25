import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';

/*
 * Fish
 * @component <Fish/>
 */
 @autobind
 class Fish extends React.Component {
 	onButtonClick() {
 		var key = this.props.index;
 		this.props.addToOrder(key);
 	}

 	render() {
 		var details = this.props.details;
 		var isAvailable = (details.status === 'available' ? true : false);
 		var buttonTaxt  = (isAvailable ? 'Add to order' : 'Sold out!');

 		return (
 			<li className="menu-fish">
 				<img src={details.image} alt={details.name} />
 				<h3 className="fish-name">
 					{details.name}
 					<span className="price">{h.formatPrice(details.price)}</span>
 				</h3>
 				<p>{details.desc}</p>
 				<button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonTaxt}</button>
 			</li>
		);
 	}
 }

 export default Fish;