let input = [];
let operator = '';
let action = '';
let total = '';
let result = '';

const operators = ['x','/','%','-','+'];

$(document).ready(function() {
	$('#calResultInput').hide();
	
	var yes = true;
	$('.on').on('click', function(show) {
		
		if(yes){				
			$('#calResultInput').show();
			$('#onOff').html('OFF');
			yes = false;
		} else {
			$('#calResultInput').empty();
			$('#calResultInput').hide();
			$('#onOff').html('ON');
			yes = true;
		}
	});
	
	
	$('.calBtn').on('click', function(e) {	
		
        let pressedButtonValue = e.target.innerHTML;
        if (pressedButtonValue >= '0' && pressedButtonValue <= '9') {
            handleNumber(pressedButtonValue);
        } else if (operators.includes(pressedButtonValue)) {
            handleOperator(pressedButtonValue);	
        } else {
			handleAction(pressedButtonValue);
		}
    });
});
			

function handleNumber(num) {
	console.log('hey i am a number');
	input.push(num)
    displayButton(input.join(''));
}

function handleOperator(oper) {
		console.log('hey i am a operator');

	input.push(oper)
    displayButton(input.join(''));
}

function handleAction(action) {
			console.log('hey i am a action');

	switch (action) {
		case '=':
			handleTotal();
			break;
		case '&lt;':
		    input.pop();
			displayButton(parseInt(input.join('')));
			break;
		case '.':
			input.push('.')
			displayButton(input.join(''));
			break;
		case 'c':	
			emptyDisplay();
			break;
	}
}
	
function handleTotal() {
	let formattedInput = formatInput();
	caculateTotal(formattedInput);
}

 function formatInput(){
	return input.reduce((formattedInput, currentValue, index) => {
		if (isNaN(currentValue) && currentValue !== '.') {
			formattedInput.push(currentValue)
			return formattedInput;
		}
		if (!isNaN(input[index - 1]) || 
			currentValue === '.' ||
			input[index -1] === '.'
		 ) {
			let lastNumber = formattedInput.pop();
			formattedInput.push(lastNumber + currentValue);
		} else {
			formattedInput.push(currentValue);
		}
		return formattedInput;
	}, []);	
}

function caculateTotal(formattedInput){	   
	let result = 0;
	let indexToSkip = null;
	formattedInput.forEach(function (element, index){
		if (element == 'x') {
			result = result * parseNumber(formattedInput[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '+') {
			result = result + parseNumber(formattedInput[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '-') {
			result = result - parseNumber(formattedInput[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '/') {
			result = result / parseNumber(formattedInput[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '%') {
			result = result / 100;
			return;
		}
		if (indexToSkip == index) {
			indexToSkip = null;
			return;
		} 	
		result = parseNumber(element);
	});
	emptyDisplay();
	displayButton(result);
	console.log(result);
}

function parseNumber(stringNumber){
	if (stringNumber.includes('.')){
		return parseFloat(stringNumber);
	}
	return parseInt(stringNumber);
}

function displayButton(value) {
    $('#calResultInput').text(value);
}	

function emptyDisplay(){ 
	input = [];
	$('#calResultInput').empty();
}

	