const formIncoming = document.querySelector("#name-input");
const formOutcoming = document.querySelector("#name-output");

const resultOfForm = (event) => {
  formOutcoming.textContent = event.target.value;
  if (event.target.value === "") {
    formOutcoming.textContent = "Anonymus";
  }
  console.dir(event);
  return;
};

formIncoming.addEventListener("input", resultOfForm);
