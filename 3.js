/*
Create an HTML page with javascript that listens for a keypress.
	When the user presses that key, the text of the h1 should show the value of the key they have pressed.
	Example: If the user presses "J", the text inside the h1 should be "J".
*/

document.addEventListener('keypress', function(e){
	console.log(e);
	document.getElementById('box').innerText = "You pressed: " + e.key;
});