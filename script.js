/** @format */

const reversed = () => {
	const inputValue = document.getElementById("reversedInput").value;

    const spliteWord = inputValue.split("");
    console.log(spliteWord)


    const blankArray = [];
	for (let i = spliteWord.length - 1; i > -1; i--) {
		blankArray.push(spliteWord[i]);
	}

    console.log(blankArray);

    const reversedArray = blankArray.reverse();



console.log(reversedArray);
    



	// const reversedArray = []
	// for (let i = spliteWord.length - 1; i > -1; i--){
	//     reversedArray.push(spliteWord[i])
	// }

	// const reversText = reversedArray.join("");

	// document.getElementById("mainText").innerText = inputValue;
	// document.getElementById("reversedText").innerText = reversText;
};
document.getElementById("reversedBTN").addEventListener("click", reversed);

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
