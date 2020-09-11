console.log('这个实例是用来尝试react相关内容的各种demo');
import './less/index.less';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import ReactDom from 'react-dom';
import One from './components/One/index';
const MyReactDom = React.createElement('div', { id: 'Box' }, '定位中的粘性定位的实验');
ReactDom.render(
	<div>
		{MyReactDom}
		<One />
	</div>,
	document.getElementById('app')
);
