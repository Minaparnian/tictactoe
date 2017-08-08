//logics

let palyer1 = "X";
// let player2 = "O";

let array = ["box0", "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"];


let matchBoxes = function () {
	
		if (array[0] === array[1] && array[1] === array[2]) {
			// $('#0,#1,#2').addClass('zoomOut');
			winAnimation(0, 1, 2)
			return true;
		} else if (array[3] === array[4] && array[4] === array[5]) {
			winAnimation(3, 4, 5)
			return true;
		} else if (array[6] === array[7] && array[7] === array[8]) {
			winAnimation(6, 7, 8)
			return true;
		} else if (array[0] === array[3] && array[3] === array[6]) {
			winAnimation(0, 3, 6)
			return true;
		} else if (array[1] === array[4] && array[4] === array[7]) {
			winAnimation(1, 4, 7)
			return true;
		} else if (array[2] === array[5] && array[5] === array[8]) {
			winAnimation(2, 5, 8)
			return true;
		} else if (array[0] === array[4] && array[4] === array[8]) {
			winAnimation(0, 4, 8)
			return true;
		} else if (array[2] === array[4] && array[4] === array[6]) {
			winAnimation(2, 4, 6)
			return true;
		} else {
			return false;
		}


};

const winAnimation = function(a, b, c) {
	$(`#${a}, #${b}, #${c}`).addClass('zoomOut').addClass('red');
			
} // I have two one way like this and another is add this 
		// $('#0,#1,#2').addClass('zoomOut');
		//bfore return for all of my match boxes function.




//UI/ DOM



$(document).ready(function () {

	$('.box').one('click', function (){
    	 
     let position = $(this).context.id // this refer actual element we click on in this case is whichever box. and get the id form 0-8.         // console.log(position);
     array[position] = palyer1; //palyer1 is "X";
     $(this).context.innerHTML = palyer1;//palyer1 is"X";
     // $(this).context.innerHTML = palyer2;

     if (matchBoxes() === true) {
     	
         // alert("You win!");
     }
     if (palyer1 === "X") {
     palyer1 = "O";	
     } else {
     	palyer1 = "X";	
     }

	})

	$('.restart').one('click', function () {
		location.reload();

	});

});