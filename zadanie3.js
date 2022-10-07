const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallaryList = document.querySelector("ul");

const galaryData = (images) => {
  const galaryArray = images.map((image) => {
    const listItem = document.createElement("li");
    const listImg = document.createElement("img");
    listImg.src = image.url;
    listImg.alt = image.alt;
    listItem.append(listImg);

    return listItem;
  });
  console.log(galaryArray);
  gallaryList.append(...galaryArray);
};

galaryData(images);
