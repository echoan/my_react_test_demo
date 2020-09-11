import React, { Component } from 'react';
import { Button } from 'antd';
class Two extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Button type="primary" block>
					Primary
				</Button>
			</div>
		);
	}
}

export default Two;
