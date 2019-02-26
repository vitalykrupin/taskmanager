import makeCard from './make-card';
import makeFilter from './make-filter';

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

const getRandomType = () => [` card--repeat`, ` card--deadline`, ``][getRandomInt(0, 2)];
const getRandomColor = () => [`black`, `pink`, `yellow`, `blue`][getRandomInt(0, 3)];
const getText = () => `This is example of new task, you can add picture, set date and time, add tags.`;

const addCards = (count) => {
  let markup = ``;

  for (let i = 0; i < count; i++) {
    markup += makeCard({
      type: getRandomType(),
      color: getRandomColor(),
      text: getText()
    });
  }

  cardsContainer.innerHTML = markup;
};

addCards(5);
