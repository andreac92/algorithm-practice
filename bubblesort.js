var bubbleSort = function(arr) {
	var last = arr.length - 1;
	while (last > 0) {
		var tmp;
		for (var i = 0; i < last; i++) {
			if (arr[i+1] < arr[i]) {
				tmp = arr[i]; 
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
			}
		}
		last--;
	}
	return arr;
}

var test = require('./sortTest.js');
test(bubbleSort);