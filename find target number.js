const array = [1,1,1,2,3,4,5,6];
const targetNumber = 7;

let z = 0;
let num1 = array[z];
let answer = [];

const findTargetNumber = ((num,arr) =>{	
	for (item of arr) {
		//debugger	
		if (num + item === targetNumber && z !== arr.indexOf(item) && z<arr.length && checkDoubles([num,item])!== 1){
			answer = [num,item];
			console.log (answer);
			z += 1;
			num = arr[z];
			findTargetNumber(num,arr);
		}
	}
		if (z<arr.length) { 
		z+=1;
		num = arr[z];
		findTargetNumber(num,arr);
	}
});

//checking if arrays have the same numbers

const checkDoubles = (arr => {
	if (arr[0]===answer[0] || arr[0]===answer[1]){
		return 1;
	} 
});

findTargetNumber(num1,array);
