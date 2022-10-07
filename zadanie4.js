const valueRef = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

const startDecrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
  return;
};

const startIncrement = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
  return;
};

decrementButton.addEventListener("click", startDecrement);
incrementButton.addEventListener("click", startIncrement);
