// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const refs = {
  loginForm: document.querySelector(".login-form"),
  emailInput: document.querySelector("input[name='email']"),
  pasInput: document.querySelector("input[name='password']"),
  submitButton: document.querySelector("button[type='submit']"),
};

refs.loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (email.value === "" || password.value === "") {
    alert("не все поля заполнены, заполните поля.");
  } else {
    const newObj = {
      [password.name]: password.value,
      [email.name]: email.value,
    };
    console.log(newObj);
  }
}

///////////////////////////////////////////////////////////////////

// .

// .

///////////////////////////////////////////////////////////////////
// const refs = {
//   loginForm: document.querySelector(".login-form"),
//   emailInput: document.querySelector("input[name='email']"),
//   pasInput: document.querySelector("input[name='password']"),
//   submitButton: document.querySelector("button[type='submit']"),
// };

// refs.emailInput.addEventListener("input", inputdataff);
// refs.pasInput.addEventListener("input", inputdataff);
// function inputdataff(event) {
//   console.dir(event);
//   console.log(event.target.value);
// }

// refs.loginForm.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formElement = event.currentTarget.elements;
//   console.log(formElement);
//   const mail = formElement.email.value;
//   const password = formElement.password.value;
//   const f1 = formElement.email;
//   console.log(formElement.email);

//   console.log(mail, password);

//   if (mail === "" || password === "") {
//     alert("не все поля заполнены, заполните поля.");
//   } else {
//     const newObj = {
//       password: password,
//       email: mail,
//     };
//     console.log(newObj);
//   }

// const formData = new FormData(event.currentTarget);

// formData.forEach((value, name) => {
//   dataFromFormArr.push(value);
//   dataFromFormArr.push(name);
// });
// }

// const validationForm = (event) => {
//   event.preventDefault();
//   const formElements = event.curentTarget.elements;
//   console.log(formElements);
// };

// validationForm();

// консолим то что вводим в инпут сразу
// refs.emailInput.addEventListener("input", inputdataff);
// refs.pasInput.addEventListener("input", inputdataff);
// function inputdataff(event) {
//   console.dir(event);
//   console.log(event.target.value);
// }

// refs.loginForm.addEventListener("submit", onFormSubmit);
