//######## LAB 3-2 FILE DELTE CONFIRMATION ########
//alert("hey 3.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var yesMessage = "been successfully deleted.";
var noMessage = "has not been altered.";
var messageOut;

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE
userChoice = confirm("Are you sure to delete this file?");

//2. IF USER CLICKS OKAY SET MESSAGE TO YES
if(userChoice === true)
{
	messageOut = yesMessage;
}
else
{
	messageOut = noMessage;
}
//3. IF USER CLICKS ANYTHING BUT OKAY, SET MESSAGE TO NO
alert("Thank you, your file has " + messageOut);

//4. SEND FINAL MESSAGE TO USER