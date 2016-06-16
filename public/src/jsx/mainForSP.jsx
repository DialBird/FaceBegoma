
const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

class Content extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nowState: 2,
			power: 0
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
				<canvas id="faceCanvas" className="m0auto mb25" width="200" height="200"></canvas>
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
		let introMsg = '顔写真を撮ろう';
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
						<input id="fileImg" className="m0auto mb25" type="file" accept="image/*;capture=camera" onChange={this.props.onChange}/>
					</div>
				);
			case 1:
				return (
					<div>
						<input id="fileImg" className="m0auto mb25" type="file" accept="image/*;capture=camera" onChange={this.props.onChange}/>
						<button id="okBtn" className="m0auto" onClick={this.props.onClick}>OK</button>
					</div>
				);
			case 2:
				return (
					<div>
						<SwipeZone/>
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

class SwipeZone extends React.Component {
	constructor(props){
		super(props);
		this.state = {power: 0, prevX:0, currX:0};
		this.loop();
	}
	loop(){
		setTimeout(()=>{
			let nowPower = this.state.power - 1;
			nowPower = (nowPower >= 0)?nowPower:0;
			this.setState({power:nowPower});
			this.loop();
		},10);
	}
	onTouchStart(e){
		$('#number').text(e.offsetX);
		this.setState({prevX:e.changedTouches[0].pageX});
	}
	onTouchMove(e){
		const currX_ = e.changedTouches[0].pageX;
		const prevX_ = this.state.prevX;
		const addPower_ = currX_ - prevX_;
		const currPower_ = this.state.power + addPower_;
		this.setState({power: currPower_, prevX: currX_});
	}
	onTouchEnd(e){
	}
	render(){
		return (
			<div id="swipeZone" className="m0auto" onTouchStart={this.onTouchStart.bind(this)} onTouchMove={this.onTouchMove.bind(this)} onTouchEnd={this.onTouchEnd.bind(this)}>{this.state.power}</div>
		);	
	}
}


ReactDOM.render(
	<Content/>,
	document.getElementById('content')
);


