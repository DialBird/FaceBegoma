

const $ = require('jquery');

const mainForSP = require('../jsx/mainForSP');


const canvas = $('#faceCanvas')[0];
$(window).on('load', ()=>{
	if (checkFileApi && checkCanvas(canvas)) {
		const fileImg = $('#fileImg');
		fileImg.on('change', selectReadfile);
	}
});


function checkCanvas(canvas){
	if (canvas && canvas.getContext) {
		return true;
	}
	alert('Not Supported Canvas');
	return false;
}

function checkFileApi(){
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		return true;	
	}
	alert('fileApiに対応しているブラウザを使ってください');
	return false;
}

function selectReadfile(e){
	const file = e.target.files;
	const reader = new FileReader();
	reader.readAsDataURL(file[0]);
	reader.onload = function(){
		readDrawImg(reader, canvas, 0, 0);	
	};
}

function readDrawImg(reader, canvas, x, y){
	const resultDataUrl = reader.result;
	const img = new Image();
	img.src = resultDataUrl;
	img.onload = function(){
		const imgRatio = img.width / img.height;
		const w = 200;
		const h = 200 * imgRatio;
		drawImageOnCanvas(canvas, img, x, y, w, h);
	};
} 

function drawImageOnCanvas(canvas, img, x, y, w, h){
	const ctx = canvas.getContext('2d');
	canvas.width = w;
	canvas.height = h;
	ctx.drawImage(img, x, y, w, h);
}


