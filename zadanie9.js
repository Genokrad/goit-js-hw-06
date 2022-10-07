// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor

const bodySelector = document.querySelector("body");
const parBcgColorShower = document.querySelector(".color");
const buttonBcgColorChanger = document.querySelector(".change-color");
console.dir(bodySelector);

const bcgColorChangersF = (event) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const resultRandomColor = getRandomHexColor();
  bodySelector.style.backgroundColor = resultRandomColor;
  parBcgColorShower.textContent = `${resultRandomColor}`;
};

buttonBcgColorChanger.addEventListener("click", bcgColorChangersF);
