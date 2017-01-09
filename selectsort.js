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

console.log("sort [3, 4, 2, 6] =>" + selectSort([3, 4, 2, 6]));

console.log("sort [7,6,5,4,3,2,1] =>" + selectSort([7,6,5,4,3,2,1]));

console.log("sort [3, 42, 15, 19, 2, 100, 4, 632, 3] =>" + selectSort([3, 42, 15, 19, 2, 100, 4, 632, 3]));

console.log("sort [3,2] =>" + selectSort([3, 2]));

console.log("sort [1, 2, 3, 4, 5, 6] =>" + selectSort([1, 2, 3, 4, 5, 6]));