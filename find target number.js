const array = [1,2,3,4,5,6];
const targetNumber = 7;

let z = 0;
let num1 = array[z];
let checkArray = [];

const findTargetNumber = ((num,arr) =>{	
	for (item of arr) {
		//debugger	
		if (num + item === targetNumber && z !== arr.indexOf(item) && z<arr.length && checkDoubles([num,item])!== 1){
			console.log ([num,item]);
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
	for (i=0; i<checkArray.length; i++) { 
		if (checkArray[i] === arr[0]){	
			return 1;
		} 
	}
	checkArray = checkArray.concat(arr);
});

findTargetNumber(num1,array);
