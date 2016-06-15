

const React = require('react');
const ReactDOM = require('react-dom');

class Content extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nowState: 0
		};
	}
	onChange(){
		this.setState({nowState: 1});
	}
	onClick(){
		this.setState({nowState: 2});
	}
	render(){
		return (
			<div>
				<IntroMsg nowState={this.state.nowState}/>
				<canvas id="faceCanvas" width="200" height="200"></canvas>
				<ManipulationComponent nowState={this.state.nowState} onClick={this.onClick.bind(this)} onChange={this.onChange.bind(this)}/>
			</div>
		);
	}
}


class IntroMsg extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let introMsg = '顔写真をとってください';
		switch (this.props.nowState) {
			case 1:
				introMsg = 'この写真でよろしいですか？';
				break;
			case 2:
				introMsg = '回転パワーを貯めろ！';
				break;
			default:
				break;
		}
		return (
			<h3 className="mb25">{introMsg}</h3>
		);
	}
}

class ManipulationComponent extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		switch (this.props.nowState) {
			case 0:
				return (
					<div>
						<input id="fileImg" className="mb25" type="file" accept="image/*;capture=camera" onChange={this.props.onChange}/>
					</div>
				);
			case 1:
				return (
					<div>
						<input id="fileImg" className="mb25" type="file" accept="image/*;capture=camera" onChange={this.props.onChange}/>
						<button id="okBtn" onClick={this.props.onClick}>OK</button>
					</div>
				);
			default:
				return (
					<div>
					</div>
				);
		}
	}
}


ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);


