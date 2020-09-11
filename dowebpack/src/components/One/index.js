import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import './index.less';
class One extends Component {
	constructor(props) {
		super(props);
		this.state = {
			TitleObj: [
				{ name: 'Title 1', arrTest: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] },
				{ name: 'Title 2', arrTest: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] },
				{ name: 'Title 3', arrTest: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
			]
		};
	}
	onChange = (key) => {
		console.log(key);
	};
	render() {
		let { TitleObj } = this.state;
		return (
			<div style={{ marginTop: 10, marginBottom: 10 }} id="OneBox">
				<div id="Box">定位中的粘性定位的实验</div>
				<Accordion className="my-accordion" onChange={this.onChange}>
					{TitleObj.map((item, index) => {
						return (
							<Accordion.Panel header={item.name} key={index} className="pad">
								<List className="my-list">
									{item.arrTest.map((i, index) => {
										return <List.Item key={index}>{i}</List.Item>;
									})}
								</List>
							</Accordion.Panel>
						);
					})}
				</Accordion>
			</div>
		);
	}
}

export default One;
