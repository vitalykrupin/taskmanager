'use strict';

const filters = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const filtersContainer = document.querySelector(`.main__filter`);
const cardsContainer = document.querySelector(`.board__tasks`);
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const renderFilter = (id, count, isChecked = false, isDisabled = false) => {
  const addDisabled = (value) => value ? `disabled` : ``;
  const addChecked = (value) => value ? `checked` : ``;

  return `
    <input
    type="radio"
    id="filter__${id.toLowerCase().replace(/ /g, `-`)}"
    class="filter__input visually-hidden"
    name="filter"
    ${addChecked(isChecked)}
    ${addDisabled(isDisabled)}
    />
    <label for="filter__${id.toLowerCase().replace(/ /g, `-`)}" class="filter__label">
    ${id.toUpperCase().replace(/ /g, `-`)} <span class="filter__${id.toLowerCase().replace(/ /g, `-`)}-count">${count}</span>
    </label>
  `;
};

// const getFilterId = (arr) => arr.forEach((i) => i);

const addFilters = () => {
  const filtersHandler = ({el}) => {
    const count = filtersContainer.querySelector(`.${el.id}-count`).textContent;
    addCards(count);
  };

  filtersContainer.innerHTML = filters.reduce((acc, curr, i) => {
    acc += renderFilter(curr, getRandomInt(0, 100), i === 2);
    return acc;
  }, ``);

  filtersContainer.addEventListener(`change`, filtersHandler);
};

addFilters();

const renderCard = () => {

};

