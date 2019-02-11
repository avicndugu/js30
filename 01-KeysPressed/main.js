let toType;
let typed;
let generatedText="This is a trial text. The user is supposed to type it as it is";
let n=0;
let typedText=[];
let allToType=[];
let toTypeText=[];
let t;
// let	currentChar;
console.log(generatedText);
// let textView=document.querySelector('#text-view');
let textView2=document.querySelector('#text-view2');
let textView3=document.querySelector('#text-view3');
// textView.innerText=generatedText;
// Obtain the character to be typed by the user. It can be highlighted in green.
// console.log(generatedText.charAt(0));
allToType=generatedText.slice(n);
textView3.innerText=allToType;
function currentChar(){
	toType=generatedText.slice(n,n+1);
	allToType=generatedText.slice(n+1);
	textView3.innerText=allToType;
	console.log(toType);
	return toType;
}
// If toType===typed then n+1
// typed=;
function userPress(e){
	currentChar();
	typed=e.key;
	if (typed!=='Backspace'){
		if (typed!=='Alt'){
			if (typed!=='Tab'){
				if (typed!=='Control'){
					if (typed!=='Shift'){
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
			// alert(1);
		}
	}
// Readding the correct to be typed letters when delete button is pressed.

	var k =typedText.join("");
	textView3.innerText=allToType;
	textView2.innerText=k;
	console.log(k);

	testCorrect();

	if(t===k){
		textView2.style.color='green';
		console.log(3);
	} else {
		textView2.style.color='red';
		console.log(4);
	}

	// textView2.innerText=k+allToType;
	// return k;
}
// Compares the generated letter and the typed letter 
// and proceeds to the next one only if the current one is typed correctly correct

function testCorrect(){
	// // console.log(toType);
	// // console.log(typed);
	if (typedText[n]===toType){
	// 	textView2.style.color='green';
	// 	console.log(textView.innerText[n]);
	toTypeText.push(toType);
	n=n+1;
	console.log(allToType);


	// 	console.log(1);
	}
	else{
		n=n;
	// 	textView2.style.color='red';
	// 	console.log(2);
	}
	t=toTypeText.join("");
	console.log(t);
	textView3.innerText=allToType;


}

window.addEventListener('keydown', userPress);

	// console.log(typed);
	// console.log(typeof(typed));
// })
// console.log(toType);