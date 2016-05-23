import React from 'react';
import { History } from 'react-router';
import h from '../helpers';

/*
 * Store picker
 * @component <StorePicker/>
 */
var StorePicker = React.createClass({

	mixins: [History],

	goToStore: function(e) {
		e.preventDefault();

		// get the data from input
		var storeId = this.refs.storeId.value;		
		// transition from <StorePicker/> to <App/>
		this.history.pushState(null, '/store/' + storeId);
	},

	render: function() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store.</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="submit" value="Submit" />
			</form>
		);
	}
});

export default StorePicker;