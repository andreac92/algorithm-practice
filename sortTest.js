var sortingTestCases = function(sortFunc) {
	
	console.log("sort [3, 4, 2, 6] =>" + sortFunc([3, 4, 2, 6]));

	console.log("sort [7,6,5,4,3,2,1] =>" + sortFunc([7,6,5,4,3,2,1]));

	console.log("sort [3, 42, 15, 19, 2, 100, 4, 632, 3] =>" + sortFunc([3, 42, 15, 19, 2, 100, 4, 632, 3]));

	console.log("sort [3,2] =>" + sortFunc([3, 2]));

	console.log("sort [1, 2, 3, 4, 5, 6] =>" + sortFunc([1, 2, 3, 4, 5, 6]));
}

module.exports = sortingTestCases;