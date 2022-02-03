
function bubbleSort(arrNumbers){

	for(let i = 0; i < arrNumbers.length; i++) {
		for(let j = 0; j < arrNumbers.length; j++) {

			if(arrNumbers[j] > arrNumbers[j + 1]) {

				/** Inicio logica inversao **/
				let temp = arrNumbers[ j ];
				arrNumbers[ j ] = arrNumbers[j + 1];
				arrNumbers[ j + 1] = temp;

				/** Final logica inversao **/

			}

		}
	}
	console.log(arrNumbers);
}

bubbleSort([10, 5, 3, 2, 6, 7, 9, 1, 4, 8])
