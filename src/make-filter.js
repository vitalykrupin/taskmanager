export default (id, count, isChecked = false, isDisabled = false) => {
  return `
    <input
      type="radio"
      id="filter__${id.toLowerCase().replace(/ /g, `-`)}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${isDisabled ? `disabled` : ``}
    />
    <label for="filter__${id.toLowerCase().replace(/ /g, `-`)}" class="filter__label">
      ${id.toUpperCase().replace(/ /g, `-`)} <span class="filter__${id.toLowerCase().replace(/ /g, `-`)}-count">${count}</span>
    </label>
  `;
};
