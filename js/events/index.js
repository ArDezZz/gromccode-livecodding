const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');
const checkbox = document.querySelector('.list__item-checkbox');
const buttonELem = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

//1. add events to elements +++
//2. write handlers

const createBtn = document.querySelector('.create-task-btn');

// input: string, callback
// output: undefined

//callback
//event
//undefined
function createTaskHandler(event) {
  console.log(event);
  console.dir(event.target);
}

createBtn.addEventListener('click', createTaskHandler);
