//######## LAB 3-1 LOGIN ########
//alert("hey");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//====VARIABLES===============
var username = "monkey";
var password = "banana";
var usernameInput ;
var passwordInput;
//====LOGIC===================

//3. CREATE POPUP BOX FOR USERNAME
usernameInput = prompt("Please Enter your username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Your username is: "+ usernameInput);

//5. CREATE POPUP BOX FOR PASSWORD
passwordInput = prompt("Please Enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Your password is: "+ passwordInput);


//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(usernameInput === username && password === passwordInput)
{
	//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
		alert("Welcome back "+ username); 
		console.log("Login sucessful");
}
else
{    
	//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
		alert("Invalid username/password"); 
		console.log("Login failed");
	
}












