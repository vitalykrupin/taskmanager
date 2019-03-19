export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
