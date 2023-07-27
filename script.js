/** @format */

// /** @format */
// // reversed funcation :: 1
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

// // sum of positive number :: 2
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

//  frequently number :: 3
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

// calculator :: 4
// const calculator = () => {
// 	const firstNumber = parseFloat(
// 		document.getElementById("firstNumber").value
// 	);
// 	const secondNumber = parseFloat(
// 		document.getElementById("secondNumber").value
// 	);
// 	const operator = document.getElementById("operator").value;
// 	const formate = `${firstNumber} ${operator} ${secondNumber}`

// 	let value = 0;
// 	if (operator === "+") {
// 		console.log('first')
// 		value = firstNumber + secondNumber;
// 	} else if (operator === "-") {
// 		value = firstNumber - secondNumber;
// 	} else if (operator === "*") {
// 		value = firstNumber * secondNumber;
// 	} else if (operator === "/") {
// 		value = firstNumber / secondNumber;
// 	}

// 	document.getElementById("firstNumber").value = ''
// 	document.getElementById("secondNumber").value = "";
// 	document.getElementById("operator").value = "";

// 	document.getElementById("displayCalculator").innerText = formate;
// 	document.getElementById("displayResult").innerText = value;
// }
// document.getElementById("calculatorBtn").addEventListener("click", calculator);

// second smallest number :: 5
// const secondSmallestArray = [1, 2,3, 6, 8, 11, 15];

// const secondSmallestNumber = () => {
// 	secondSmallestArray.sort((a, b) => a -b)
// 	const secondSmallestNumber = secondSmallestArray[1];
// 	console.log(secondSmallestNumber);
// }

// secondSmallestNumber();

// roman number to number :: 6
// const romanNumberToNumber = () => {
// 	const romanNumber = document.getElementById("romanNumberInput").value;
// 	const romanValues = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};

// 	let result = 0;
// 	let previousValue = 0;

// 	for (let i = romanNumber.length - 1; i >= 0; i--) {
// 		const currentValue = romanValues[romanNumber[i]];

// 		console.log(currentValue)
// 		if (currentValue >= previousValue) {
// 			result += currentValue;
// 		} else {
// 			result -= currentValue;
// 		}

// 		previousValue = currentValue;
// 	}

// 	document.getElementById("romanText").innerText = romanNumber;
// 	document.getElementById("romanToNumber").innerText = result;
// };

// document
// 	.getElementById("romanToNumberConvertor")
// 	.addEventListener("click", romanNumberToNumber);


//generat password:: 7
// const generatPassword = () => {
// 	const length = document.getElementById("lengthOfPassword").value;
// 	const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 	const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
// 	const numbers = "0123456789";
// 	const specialCharacters = "!@#$%^&*";

// 	const allCharacters =
// 		uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
// 	let password = "";

// 	for (let i = 0; i < length; i++) {
// 		// Generate a random index to select a character from allCharacters
// 		const randomIndex = Math.floor(Math.random() * allCharacters.length);

// 		// Append the randomly selected character to the password
// 		password += allCharacters[randomIndex];
// 	}

// 	document.getElementById("lengthOfPassword").value = '';
// 	document.getElementById("showPassword").innerText = password;
// };

// document
// 	.getElementById("passwordGeneratro")
// 	.addEventListener("click", generatPassword);


// target value 

function findTwoNumbers(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		const sum = array[left] + array[right];

		if (sum === target) {
			return [left, right];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoNumbers(sortedArray, targetValue);
console.log(indices)