// const formIncoming = document.querySelector("#name-input");
const inputIncoming = document.querySelector("#validation-input");

const BlurEvent = (event) => {
  const { dataset, value } = event.target;

  if (dataset.length < value.length || dataset.length > value.length) {
    console.log(value.length == dataset.length);
    inputIncoming.style.border = "thick solid #f44336";
  } else {
    inputIncoming.style.border = "thick solid #4caf50";
  }

  console.log(value.length);
  console.log(dataset.length);
  // console.log(event.target.dataset.length);
  // console.log(length);
};

inputIncoming.addEventListener("blur", BlurEvent);
