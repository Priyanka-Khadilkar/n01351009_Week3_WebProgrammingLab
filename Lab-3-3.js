//######## LAB 3-3 EMAIL SIGNUP ########
//alert("hey 3-3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var userChoiceForEmail;
var userEmail;

//==== LOGIC =============

userChoiceForEmail = confirm("Would you like to join my mailing list");


if(userChoiceForEmail === true)
{
	userEmail = prompt("Please Enter your Email", "me@example.com");
		if(userEmail === null || userEmail === false || userEmail === "" || userEmail === "me@example.com")
			{
				alert("Thank you, but your email is not valid.");
			}
		else
			{
				alert("Thank you, our next newsletter will be sent to "+userEmail);
			}
}
else
{
	alert("Thank you, we will not bother you again.");
}


