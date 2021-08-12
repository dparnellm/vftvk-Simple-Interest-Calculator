// Calculate and display the information.
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
	
	validatePrincipal();
	
	document.getElementById("result").innerHTML = "If you deposit <span class='numbers'>" + principal 
	+ "</span>,</br>at an interest rate of <span class='numbers'>" + rate 
	+ "%</span>,</br>You will receive an amount of <span class='numbers'>" + interest 
	+ "</span>,</br>in the year <span class='numbers'>" + year + "</span";
}

// Update the text that indicates what interest rate was selected using the slider.
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

// Alert user if they entered 0 or a negative number and give focus to the field again.
function validatePrincipal() {
	var principalElement = document.getElementById("principal");
	var principalElementValue = principalElement.value;
	if ((principalElementValue == 0) || (principalElementValue < 0)) {
		alert('Show a positive number.');
		principalElement.focus();
	}
}
        