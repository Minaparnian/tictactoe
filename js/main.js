//logics

let turn = "X"

let array = ["box0", "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"];


let matchBoxes = function () {
	
		if (array[0] === array[1] && array[2]) {
			return true;
		} else if (array[3] === array[4] && array[4] === array[5]) {
			return true;
		} else if (array[6] === array[7] && array[7] === array[8]) {
			return true;
		} else if (array[0] === array[3] && array[3] === array[6]) {
			return true;
		} else if (array[1] === array[4] && array[4] === array[7]) {
			return true;
		} else if (array[2] === array[5] && array[5] === array[8]) {
			return true;
		} else if (array[0] === array[4] && array[4] === array[8]) {
			return true;
		} else if (array[2] === array[4] && array[4] === array[6]) {
			return true;
		} else {
			return false;
		}


};









	









//UI/ DOM



$(document).ready(function () {

	$('.box').on('click', function (){
    	 
     let position = $(this).context.id // this refer 
     // console.log(position);
     array[position] = turn;
     $(this).context.innerHTML = turn;
     if (matchBoxes() === true) {
     	alert("You win!");
     }
     if (turn === "X") {
     turn = "O";
     } else {
     	turn = "X";
     }

	})

	$('.restart').on('click', function () {
		location.reload();

	});

});