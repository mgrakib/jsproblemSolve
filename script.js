/** @format */

// /** @format */
// // reversed funcation
// const reversed = () => {
// 	const inputValue = document.getElementById("reversedInput").value;

//     const spliteWord = inputValue.split("");

// 	const reversedArray = []
// 	for (let i = spliteWord.length - 1; i > -1; i--){
// 	    reversedArray.push(spliteWord[i])
// 	}
// 	const reversText = reversedArray.join("");
// 	document.getElementById("mainText").innerText = inputValue;
// 	document.getElementById("reversedText").innerText = reversText;
// };
// document.getElementById("reversedBTN").addEventListener("click", reversed);

// // sum of positive number
// const secondArray = [2,10, -5, 10, -3, 7];
// const sumOfPositiveNumber = () => {
//     let sum = 0;
//     for (let i = 0; i < secondArray.length; i++){
//         if (secondArray[i] >= 0) {
//          sum = sum + secondArray[i]
//         }
//     }
//     console.log(sum)
// }
// sumOfPositiveNumber()

// const frequentlyArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

// function findFrequentlyNumber() {
// 	const frequentlyObj = {};
// 	for (const item of frequentlyArray) {
// 		frequentlyObj[item] = (frequentlyObj[item] || 0) + 1;
// 	}

// 	let max = 0;
// 	console.log(frequentlyObj);
// 	for (const key in frequentlyObj) {
// 		if (max < frequentlyObj[key]) {
// 			max = key;
// 		}
// 	}

// 	console.log(max);
// }
// findFrequentlyNumber();





// calculator 


const calculator = () => {
	const firstNumber = parseFloat(
		document.getElementById("firstNumber").value
	);
	const secondNumber = parseFloat(
		document.getElementById("secondNumber").value
	);
	const operator = document.getElementById("operator").value;
	const formate = `${firstNumber} ${operator} ${secondNumber}`
	
	let value = 0;
	if (operator === "+") {
		console.log('first')
		value = firstNumber + secondNumber;
	} else if (operator === "-") {
		value = firstNumber - secondNumber;
	} else if (operator === "*") {
		value = firstNumber * secondNumber;
	} else if (operator === "/") {
		value = firstNumber / secondNumber;
	}

	document.getElementById("firstNumber").value = ''
	document.getElementById("secondNumber").value = "";
	document.getElementById("operator").value = "";
	
	document.getElementById("displayCalculator").innerText = formate;
	document.getElementById("displayResult").innerText = value;
}
document.getElementById("calculatorBtn").addEventListener("click", calculator);