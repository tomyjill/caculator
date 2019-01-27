let num1 = '';
let num2 = '';
let numbers = [];
let operator = '';
let action = '';
let total = '';
let decimalNum = num1 + '.' + num2;

const operators = ['x','/','%','-','+','='];

$(document).ready(function() {
	$('#calResultInput').hide();
	
	var yes = true;
	$('.on').on('click', function(show) {
		
		if(yes){				
			$('#calResultInput').show();
			$('#onOff').html('OFF');
			yes = false;
		} else {
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
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
	numbers.push(num)
    displayButton(numbers.join(''));
}

function handleOperator(oper) {
		console.log('hey i am a operator');

    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }
}

function handleAction(action) {
			console.log('hey i am a action');

	switch (action) {
		
		case '&lt;':
		    numbers.pop();
			displayButton(parseInt(numbers.join('')));
			break;
		case '.':
			displayButton(decimalNum);
			break;
		case 'c':	
			emptyDisplay();
			break;
	}
}
	

function handleTotal() {
    switch (operator) {
		
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case 'x':
            total = +num1 * +num2;
            displayButton(total);
            break;
		case '%':
			total = (num1 * ''/100).toFixed(3);
			displayButton(total);
			break;
		
    console.log('hey i am a operator');	
	}
    updateVariables();
}

function displayButton(value) {
    $('#calResultInput').text(value);
}

function updateVariables() {
    num1 = total;
    num2 = '';
}

function emptyDisplay(){ 
	$('#calResultInput').empty();
}
	