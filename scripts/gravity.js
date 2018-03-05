(function () {
    
	function calculateGravity (weight, acceleration) {
        weight = parseFloat(weight);
        acceleration = 3.711;
		return (weight * acceleration);
	}

	var calcGravity = document.getElementById("calcGravity");
	if (calcGravity) {
		calcGravity.onsubmit = function () {
			this.gravity.value = calculateGravity(this.weight.value);
			return false;
		};
	}
}());