export default (id, count, isChecked = false, isDisabled = false) => {
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
