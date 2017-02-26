function askQuestions(){

	var firstName = prompt('What\'s your first name?');
	var lastName = prompt('What\'s your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt ('How old are you');
	age = parseInt (age);

	//if the condition is true do what's defined between {}
	if (age >= 18) {
			console.log("user is an adult!");

	} else if (age >=13) {
			console.log("user is a teenager");
	} else {
			console.log("user is a child");
	}

	if (firstName.toLowerCase().trim() === "general" && lastName.toLowerCase().trim() !== "assembly") {
		console.log ("Greetings General");
	} else if (firstName.toLowerCase().trim() !== "general" && lastName.toLowerCase().trim() !== "assembly") {
		console.log ("Greetings" + " " + firstName);
	}
		else {
		console.log ("School")
	}

}


//when the page has loaded
$(function(){

	$('img').on('click', askQuestions);

	//when the user clicks an h3
	$('h3').on('click', function(){

		//hide the next element
		//$(this).next().hide();
		//'this' refers to the element you place it against
		$(this).next().slideToggle(1500);
		//hide and unhide on each click - toggle

	});

});