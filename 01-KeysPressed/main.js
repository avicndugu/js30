let toType;
let typed;
let generatedText="This is a trial text. The user is supposed to type it as it is";
let n=0;
let typedText=[];
// let	currentChar;
console.log(generatedText);
let textView=document.querySelector('#text-view');
let textView2=document.querySelector('#text-view2');
textView.innerText=generatedText;
// Obtain the character to be typed by the user. It can be highlighted in green.
function currentChar(){
	toType=generatedText.slice(n,n+1);
// console.log(toType);
	return toType;
}
// If toType===typed then n+1
// typed=;
function userPress(e){
	typed=e.key;
	if (typed!=='Shift'){
		if (typed!=='Alt'){
			if (typed!=='Tab'){
				if (typed!=='Control'){
					if (typed!=='Backspace'){
						// console.log(typed);
						// console.log(typeof(typed));
						typedText.push(typed);
						console.log(typedText);
					}
				}
			}
		}
	}

	// // Delete one character from the typed characters
	if (typed==='Backspace'){
		typedText.pop();
		console.log(typedText);
		console.log(typedText.length);
		if (typedText.length<=n){
			textView2.style.color='green';
			alert(1);
		}
	}
	var k =typedText.join("");
	textView2.innerText=k;
	currentChar();
	testCorrect();
	// return typed;
}
// Compares the generated letter and the typed letter 
// and proceeds to the next one only if the current one is typed correctly correct

function testCorrect(){
	// console.log(toType);
	// console.log(typed);
	if (typedText[n]===toType){
		textView2.style.color='green';
		console.log(textView.innerText[n]);
		n=n+1;
		
		console.log(1);
	}
	else{
		textView2.style.color='red';
		console.log(2);
	}
}

window.addEventListener('keydown', userPress);

	// console.log(typed);
	// console.log(typeof(typed));
// })
// console.log(toType);