/*
Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" 
should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
*/

var declaration = document.getElementsByTagName('p')[0];

document.getElementById('button1').addEventListener('click', function(e){
	e.preventDefault();
	declaration.innerHTML = "I'm right!";
});

document.getElementById('button2').addEventListener('click', function(e){
	e.preventDefault();
	declaration.innerHTML = "No, I'm right!";
});