

# Tic Tac Toe
###### By Mina Parnian

## Introduction

This is a Tic Tac Toe game that I made for my Project Zero, as part of my Web Development Immersive 23 with General Assembly.


## Features

The game is played on a grid that has 3 squares by 3 squares. The choice is between player one "X" and second player "O". Players take turns putting their marks in empty squares. The audio is run during the game and it takes for i.e.. 2min. The first player to get more scores till the audio finished is the winner. The marks for one score is 3 marks i.e.. "X" same in a row (up, down, across, or diagonally).


## How to Play

[Play the game!](http://Minaparnian.github.io/tictactoe)



## Approach

The game is structured keeping in mind the analogy , Html(Bones) and css(skin) and JavaScript(brain) :

Steps for making the brain and connecting it to bones and skin :

#### Html
1. using table to make the base structure of the game.
2. learning how to link audio in html.
3. link JavaScript, jQuery, CSS
4. use button tag to make a restart button to restart the game
5. discover great typography to make the game more beutiful using google font learn how to link to the html file and use them in css to style the font.

#### CSS

1. style the page by getting element, classes and id's from html file.
2. use hover selector to select element when your mouse over them in this case table and restart button.
3. Used @media rule to define different style rules for different media types/devices. but still need more on it.
4. used rgba color for transparency and hex color to have different type of color.
5. using animation method "FadeInLeft".


#### JavaScript $ jQuery


1. make click event listener to restart the page and position the "X" and "O".
2. make an array for pushing the value of the click from player1 and player2.
3. make function to machboxes to get the value of the box from array and match them if there is 3 "X" or "O".

4. Use countScore function to count player score. and then use jquery to show the score in the game.

5. use resetgame function to reset the game to continue playing till the audio finished to find the winner.

6. use the function to say when the sound finished if the score of each players was greather we use bounceInLeft animation to say player "X" or "O" is winner otherwise there is a alert method which say ('No winner, try again!').

7.  use $( document ).ready() in the first step of writing jQuery
as the page can't be manipulated safely until the document is "ready so jQuery detects this state of readiness.





## Technologies Used

* HTML
* CSS
* Javascript
* jQuery
* Iterm
* Atom



## User stories

As a user, I can:

* Create Game
* Click the cell to make the mark
* Restart game
* Play with another person
* Win the game
* Lose the game
* Try to win the game till the audio finished.


## Helpful Resources

* [wikipedia(tic-tac-toe)](https://en.wikipedia.org/wiki/Tic-tac-toe)

* [RGBA color space](https://en.wikipedia.org/wiki/RGBA_color_space)

* [Web color](https://en.wikipedia.org/wiki/Web_colors)

* [@media rules](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

* [$(document).ready()](https://learn.jquery.com/using-jquery-core/document-ready/)

* [Animate.css](https://daneden.github.io/animate.css/)

* [link audio](https://www.w3schools.com/tags/att_audio_src.asp)

Thanks for stopping by, and I hope you enjoy the game!
