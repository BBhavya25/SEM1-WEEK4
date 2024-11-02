const display = document.getElementById('display');
  let currentInput = '';
  let previousInput = '';
  let operator = null;

  const updateDisplay = (value) => {
    display.innerText = value;
  };

  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
      currentInput += button.dataset.number;
      updateDisplay(currentInput);
    });
  });

  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
      if (currentInput === '') return;
      if (previousInput !== '') calculate();
      operator = button.dataset.operator;
      previousInput = currentInput;
      currentInput = '';
    });
  });

  document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay(0);
  });

  document.getElementById('equals').addEventListener('click', () => {
    if (currentInput === '' || previousInput === '' || !operator) return;
    calculate();
  });

  const calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = null;
    updateDisplay(currentInput);
  };

