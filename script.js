//your JS code here. If required.
function myclick() {
	let firstname = document.getElementById('Name').value;
	let lastname = document.getElementById('Last').value;
	let phonenum = document.getElementById('phone').value;
	let emailid = document.getElementById('email').value;

	let result = "First Name: "+firstname+"\n"
	             +"Last Name: "+lastname+"\n"
	             +"Phone Number: "+phonenum+"\n"
	             +"Email ID: "+emailid;

	alert(result);
	
}