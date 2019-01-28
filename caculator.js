let input = [];
let operator = '';
let action = '';
let total = '';

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
			displayButton(ConvertDecimalNum());
			break;
		case 'c':	
			emptyDisplay();
			break;
	}
}
	

function handleTotal() {
	console.log(input);
	let result = 0;
	let indexToSkip = null;
	input.forEach(function (element, index){
		if (element == 'x') {
			result = result * parseInt(input[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '+') {
			result = result + parseInt(input[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '-') {
			result = result - parseInt(input[index + 1]);
			indexToSkip = index + 1;
			return;
		}
		if (element == '/') {
			result = result / parseInt(input[index + 1]);
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
		result = parseInt(element);
	});
	
	console.log(result);
}

function displayButton(value) {
    $('#calResultInput').text(value);
}

function updateVariables() {
    num1 = total;
    num2 = '';
}

function emptyDisplay(){ 
	input = [];
	$('#calResultInput').empty();
}

	