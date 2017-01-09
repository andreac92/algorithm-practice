var selectSort = function(arr) {
	var min_pos;
	var min;
	var tmp;
	for (var i = 0; i < arr.length; i++) {
		min = arr[i];
		min_pos = i;
		for (var j = i+1; j < arr.length; j++) {
			if (arr[j] <= min) {
				min = arr[j];
				min_pos = j;
			}
		}
		arr[min_pos] = arr[i];
		arr[i] = min;
	}
	return arr;
}

var test = require('./sortTest.js');
test(selectSort);