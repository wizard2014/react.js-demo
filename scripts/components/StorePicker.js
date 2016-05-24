import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';

/*
 * Store picker
 * @component <StorePicker/>
 */
class StorePicker extends React.Component {
	mixins: [History]

	goToStore(e) {
		e.preventDefault();

		// get the data from input
		var storeId = this.refs.storeId.value;		
		// transition from <StorePicker/> to <App/>
		this.history.pushState(null, '/store/' + storeId);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store.</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;