const buttons = document.querySelectorAll('.butts');
const clear = document.getElementsByClassName('clear');
const sol = document.querySelector('.sol'); // Select the first element with class 'sol'
const problem_screen = document.getElementById('prob');
const problem_content = document.getElementById('problem_content');

// Function to perform addition
const performAddition = () => {
    const expression = problem_screen.innerText;
    const operands = expression.split('+');
    
    if (operands.length === 2) {
        const operand1 = parseFloat(operands[0]);
        const operand2 = parseFloat(operands[1]);
        
        if (!isNaN(operand1) && !isNaN(operand2)) {
            const result = operand1 + operand2;
            console.log(`Addition result: ${result}`);
            setTimeout(() => {
                sol.innerText = result;
                problem_screen.innerText = result; // Update problem_screen with the result
            }, 0);
        } else {
            sol.innerText = 'Invalid Input';
            console.error('Invalid operands for addition');
        }
    } else {
        sol.innerText = 'Invalid Input';
        console.error('Invalid input for addition');
    }
};

// Function to perform subtraction (similar modification as addition)
const performSubtraction = () => {
    const expression = problem_screen.innerText;
    const operands = expression.split('-');
    
    if (operands.length === 2) {
        const operand1 = parseFloat(operands[0]);
        const operand2 = parseFloat(operands[1]);
        
        if (!isNaN(operand1) && !isNaN(operand2)) {
            const result = operand1 - operand2;
            console.log(`Subtraction result: ${result}`);
            setTimeout(() => {
                sol.innerText = result;
                problem_screen.innerText = result; // Update problem_screen with the result
            }, 0);
        } else {
            sol.innerText = 'Invalid Input';
            console.error('Invalid operands for subtraction');
        }
    } else {
        sol.innerText = 'Invalid Input';
        console.error('Invalid input for subtraction');
    }
};

// Function to perform multiplication (similar modification as addition)
const performMultiplication = () => {
    const expression = problem_screen.innerText;
    const operands = expression.split('×'); // Use '×' for multiplication
    
    if (operands.length === 2) {
        const operand1 = parseFloat(operands[0]);
        const operand2 = parseFloat(operands[1]);
        
        if (!isNaN(operand1) && !isNaN(operand2)) {
            const result = operand1 * operand2;
            console.log(`Multiplication result: ${result}`);
            setTimeout(() => {
                sol.innerText = result;
                problem_screen.innerText = result; // Update problem_screen with the result
            }, 0);
        } else {
            sol.innerText = 'Invalid Input';
            console.error('Invalid operands for multiplication');
        }
    } else {
        sol.innerText = 'Invalid Input';
        console.error('Invalid input for multiplication');
    }
};

// Function to perform division (similar modification as addition)
const performDivision = () => {
    const expression = problem_screen.innerText;
    const operands = expression.split('/');
    
    if (operands.length === 2) {
        const operand1 = parseFloat(operands[0]);
        const operand2 = parseFloat(operands[1]);
        
        if (!isNaN(operand1) && !isNaN(operand2) && operand2 !== 0) {
            const result = operand1 / operand2;
            console.log(`Division result: ${result}`);
            setTimeout(() => {
                sol.innerText = result;
                problem_screen.innerText = result; // Update problem_screen with the result
            }, 0);
        } else {
            sol.innerText = 'Invalid Input';
            console.error('Invalid operands for division');
        }
    } else {
        sol.innerText = 'Invalid Input';
        console.error('Invalid input for division');
    }
};


// Function to handle the behavior after a calculation
const handleCalculationResult = () => {
    const result = sol.innerText;
    
    // Check if the last button clicked was '='
    if (lastButtonClicked === '=') {
        problem_screen.innerText = result;
    } else {
        problem_screen.innerText = ''; // Clear the problem screen
    }
    
    sol.innerText = '0'; // Reset sol.innerText to '0'
};

// Modify the main event listener to handle the behavior after calculation
let lastButtonClicked = ''; // Variable to keep track of the last button clicked

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        
        if (buttonValue === '=') {
            // Determine the operation based on the current screen content
            if (problem_screen.innerText.includes('+')) {
                performAddition();
            } else if (problem_screen.innerText.includes('-')) {
                performSubtraction();
            } else if (problem_screen.innerText.includes('×')) {
                performMultiplication();
            } else if (problem_screen.innerText.includes('/')) {
                performDivision();
            }
            handleCalculationResult(); // Handle the behavior after calculation
            lastButtonClicked = '='; // Set lastButtonClicked to '='
        } else if (buttonValue === 'DEL') {
            problem_screen.innerText = problem_screen.innerText.slice(0, -1);
        } else if (buttonValue === 'CLEAR') {
            clearScreen();
            lastButtonClicked = ''; // Reset the last button clicked
        } else if (['+', '-', '×', '/'].includes(buttonValue)) {
            // Logic operators other than '='
            if (lastButtonClicked === '=') {
                // If '=' was the last button clicked, clear problem screen
                problem_screen.innerText = sol.innerText;
            }
            problem_screen.innerText += buttonValue; // Append the operator
            lastButtonClicked = buttonValue; // Update the last button clicked
        } else {
            problem_screen.innerText += buttonValue;
            lastButtonClicked = buttonValue; // Update the last button clicked
        }
    });
});

const clearScreen = () => {
    problem_screen.innerText = '';
    sol.innerText = ''; // Clear the 'sol' element when clearing the screen
    console.log('Screen cleared and reset value to 0');
};


