//logics

let player1 = "X";
let scoreX = "X";
let score1 = 0;
let score2 = 0;
let boardArray = ["box0", "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"];

let matchBoxes = function() {

  if (boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) {
    // $('#0,#1,#2').addClass('zoomOut');
    winAnimation(0, 1, 2)
    return true;
  } else if (boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) {
    winAnimation(3, 4, 5)
    return true;
  } else if (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]) {
    winAnimation(6, 7, 8)
    return true;
  } else if (boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) {
    winAnimation(0, 3, 6)
    return true;
  } else if (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) {
    winAnimation(1, 4, 7)
    return true;
  } else if (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) {
    winAnimation(2, 5, 8)
    return true;
  } else if (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) {
    winAnimation(0, 4, 8)
    return true;
  } else if (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6]) {
    winAnimation(2, 4, 6)
    return true;
  } else {
    return false;
  }


};

const winAnimation = function(a, b, c) {
  $(`#${a}, #${b}, #${c}`)

} // I have two one way like this and another is add this
// $('#0,#1,#2').addClass('zoomOut');
//bfore return for all of my match boxes function.




//its count score and
const countScore = function() {
  if (player1 === 'X') {
    $('#score1').text(`${++score1}`);

  } else {

      $('#score2').text(`${++score2}`);
  }
}



//rest the game from the start to continue playing
const resetgame = function() {
    console.log('reset the page');
    $('.box').text("");
    boardArray = ["box0", "box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8"];//back to the first steop empty boardArray
  }




 // when the sound i stop is tell you who is the winner.
  $('#sound1')[0].addEventListener("ended", function(){
   $('#sound1')[0].currentTime = 0;
   console.log("ended");
   if (score1 > score2 ){
     $('.scoreX').text(`X is the winner`).addClass('bounceInLeft');

   }else if (score1 === score2) {
     alert('No winner, try again!')

  } else {
     $('.scoreO').text(`O is the winner`).addClass('bounceInLeft');;


   }
});


//UI/ DOM
$(document).ready(function() {

  $('.box').on('click', function() {
    let position = $(this).context.id // this refer actual element we click on in this case is whichever box. and get the id form 0-8.         // console.log(position);
    if (boardArray[position] === 'X' || boardArray[position] === 'O') {
      return; // exit. we change one to on an add this part to continue playing.
    }
    boardArray[position] = player1; //player1 is "X";
    let audio = $('#sound1')[0].play();




    $(this).context.innerHTML = player1; //player1 is"X";
    // $(this).context.innerHTML = palyer2;

    if (matchBoxes() === true) {
      resetgame();
      countScore()
    }



    if (player1 === "X") {
      player1 = "O";
    } else {
      player1 = "X";
    }

  })

  $('.restart').one('click', function() {
    window.location.reload(true);

  });

});
