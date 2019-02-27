import makeCard from './make-card';
import makeFilter from './make-filter';
import getData from './data';

const filters = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const filtersContainer = document.querySelector(`.main__filter`);
const cardsContainer = document.querySelector(`.board__tasks`);
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const addFilters = () => {
  const filtersHandler = (evt) => {
    const count = filtersContainer.querySelector(`.${evt.target.id}-count`).textContent;
    addCards(count);
  };
  filtersContainer.innerHTML = filters.reduce((acc, item, index) => {
    acc += makeFilter(item, getRandomInt(0, 20), index === 2);
    return acc;
  }, ``);
  filtersContainer.addEventListener(`click`, filtersHandler);
};

addFilters();

const addCards = (dest, count = 0) => {
  const cards = new Array(count)
    .fill(``)
    .map(() => makeCard(getData()))
    .join(``);
  dest.insertAdjacentHTML(`beforeend`, cards);
};

addCards(cardsContainer, 7);
