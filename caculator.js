let num1 = '';
let num2 = '';
let numbers = [];
let operator = '';
let action = '';
let total = '';

const operators = ['x','/','%','-','+'];

$(document).ready(function() {
	$('#calResultInput').hide();
    $('.on').on('click', function(show) {
		$('#calResultInput').show();
		onOff();
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

function onOff(){
  dataAction = document.getElementById('onOff').action;
  if(dataAction == "off"){
    document.getElementById("onOff").action='ON';
  }else{
    document.getElementById("onOff").action="OFF";
  }
}

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
			displayButton(numbers.join(''));
			break;
		case '.':
			return (num1 + '.' + num2);
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
			total = +num1 * ''/100;
			displayButton(total);
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

function emptyDisplay(numbers){ 
	$('#calResultInput').empty(numbers);
}
	