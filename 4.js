/*
Create an HTML page with a form. The form should include inputs for a username, password, an h1 tag as well 
as a button. In a Javascript file, write code that does the following things when the button is pressed:
	checks that the password is 12345678
	checks that the username is less than 14 characters in length
	if the info in the form is correct, have Javascript change the text in the h1 to say "Congrats on knowing 
		your username and password!"
	if anything is wrong, send an alert message saying "Incorrect username or password"
*/


document.querySelector('#submit').addEventListener('click', function(e) {
	e.preventDefault();
	let username = document.querySelector('#username').value;
	let password = document.querySelector('#password').value;

	if ( username.length < 14 && password == 12345678){
		document.getElementsByTagName('h1')[0].innerText = "Congrats on knowing your username and password!";
	} else {
		alert("Incorrect username or password");
	};
});