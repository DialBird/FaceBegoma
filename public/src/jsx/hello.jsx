
const React = require('react');
const ReactDOM = require('react-dom');

class Hello extends React.Component {
	render() {
		return (
			<div>Hello {this.props.name}</div>
		);
	}
}

ReactDOM.render(
	<Hello name="react" />,
	document.getElementById('content')
);
