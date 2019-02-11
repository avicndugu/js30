let toType;
let typed;
let generatedText="This is a trial text. The user is supposed to type it as it is";
let n=0;
let typedText=[];
let allToType=[];
// let toTypeText=[];
// let t;

// This displays the text that should be typed. The n value should be used.
console.log(generatedText.length);
toType=generatedText.slice(n,generatedText.length);
console.log(toType);




// When deleting, the n value should reduce



// Pressed button function
function userPress(e){
	// Adds a character that have been typed
	if (e.key.length<2){
		typedText.push(e.key);
		// When typing the the n value should increase
		n=n+1;
		// console.log(n);
		console.log(typedText);
	}
	else{
		// Delete character from the typed characters
		if (e.key==='Backspace'){
			typedText.pop();
		// Returns the text to be typed until there is no more text to be returned
			if (n>0){
				n=n-1;
			}
			console.log(typedText);
		}
	}
	console.log(n);
	typing();
	dummy();
	return typedText;
}

// Use this for displaying the text typed to view
function typing(){
	typed=typedText.join("");
	// Display text that is being deleted
	console.log(toType.slice(n,generatedText.length));
	console.log(typed);
	return typed;
}



// Check for correctness of the typed text and the text to be typed

function dummy(){
	console.log(toType.slice(0,n));
	console.log(typed);
	if (toType.slice(0,n)===typed){
		console.log(1);
	}
	else{
		console.log(3);
	}
// // allToType.push(to)
}

// event listening to any keydown event
window.addEventListener('keydown', userPress);