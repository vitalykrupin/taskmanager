import Task from './task';
import TaskEdit from './task-edit';
import makeFilter from './make-filter';
import {task} from './data';
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
  const taskComponent = new Task(data);
  const taskEditComponent = new TaskEdit(data);

  taskBoard.appendChild(taskComponent.render());

  taskComponent.onEdit = () => {
    taskEditComponent.render();
    taskBoard.replaceChild(taskEditComponent.element, taskComponent.element);
    taskComponent.unrender();
  };

  taskEditComponent.onSubmit = (newObject) => {
    task.title = newObject.title;
    task.tags = newObject.tags;
    task.color = newObject.color;
    task.repeatingDays = newObject.repeatingDays;
    task.dueDate = newObject.dueDate;

    taskComponent.update(task);
    taskComponent.render();
    taskBoard.replaceChild(taskComponent.element, taskEditComponent.element);
    taskEditComponent.unrender();
  };
};

const addTasks = (count = 1) => {
  taskBoard.innerHTML = ``;
  for (let i = 0; i < count; i++) {
    createTask(task);
  }
};

addFilters();
addTasks();
