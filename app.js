function submitName() {
    // Get the value from the input field
    var enteredName = document.getElementById("nameInput").value;

    // Display a message using an h1 element
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "<h1>Thanks, " + enteredName + "!</h1>";
}
var age = 50

if (age>18){
    console.log("You can Drive")
    

}
else{
    console.log("You Can Not Drive")
        
    
}