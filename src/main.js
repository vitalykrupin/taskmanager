import Task from './task';
import TaskEdit from './task-edit';
import makeFilter from './make-filter';
import getData from './data';
import {getRandomInt} from './utils';

const filters = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];
const filtersContainer = document.querySelector(`.main__filter`);
const taskBoard = document.querySelector(`.board__tasks`);

const addFilters = () => {
  const filtersHandler = (evt) => {
    const count = filtersContainer.querySelector(`.${evt.target.id}-count`).textContent;
    addTasks(count);
  };
  filtersContainer.innerHTML = filters.reduce((acc, item, index) => {
    acc += makeFilter(item, getRandomInt(0, 20), index === 2);
    return acc;
  }, ``);
  filtersContainer.addEventListener(`click`, filtersHandler);
};

const createTask = (data) => {
  const task = new Task(data);
  const taskEdit = new TaskEdit(data);

  taskBoard.appendChild(task.render());

  task.onEdit = () => {
    taskEdit.render();
    taskBoard.replaceChild(taskEdit.element, task.element);
    task.unrender();
  };


  taskEdit.onSubmit = () => {
    task.render();
    taskBoard.replaceChild(task.element, taskEdit.element);
    taskEdit.unrender();
  };
};

const addTasks = (count = 8) => {
  taskBoard.innerHTML = ``;
  for (let i = 0; i < count; i++) {
    createTask(getData());
  }
};

addFilters();
addTasks();
