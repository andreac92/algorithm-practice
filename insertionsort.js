var insertionSort = function(arr) {
	var j;
	for (var i = 1; i < arr.length; i++) {
		j = i - 1;
		while (j >= 0) {
			if (arr[j] > arr[i]){
				var tmp = arr[j];
				arr[j] = arr[i];
				arr[i] = tmp;
				i = j;
			} else if (arr[j] < arr[i]) {
				j = -1;
			}
			j--;
		}
	}
	return arr;
}

var test = require('./sortTest.js');
test(insertionSort);