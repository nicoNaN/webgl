function main() {
	let canvas = document.getElementById('webgl');
	let gl = canvas.getContext('webgl');

 	if (!gl) {
 		console.log('Failed to get the rendering context');
		return;
	}

	let vertexShaderSrc = document.getElementById('2d-vertex-shader').text;
	let fragShaderSrc = document.getElementById('2d-fragment-shader').text;
	
	if (!initShaders(gl, vertexShaderSrc, fragShaderSrc)) {
		console.log('Failed to initialize shaders.');
		return;
	}
	
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.POINTS, 0, 1);
}
