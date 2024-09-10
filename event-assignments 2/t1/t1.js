const todoList = [
  {id: 1, task: 'Learn HTML', completed: true},
  {id: 2, task: 'Learn CSS', completed: true},
  {id: 3, task: 'Learn JS', completed: false},
  {id: 4, task: 'Learn TypeScript', completed: false},
  {id: 5, task: 'Learn React', completed: false},
];

// Luo "Add Todo Item" nappi
const addButton = document.createElement('button');
addButton.classList.add('add-btn');
addButton.textContent = 'Add Todo Item';

// Luo dialogi
const dialog = document.createElement('dialog');
dialog.id = 'add-todo-dialog';

// Luo lomake
const form = document.createElement('form');
form.id = 'add-todo-form';

// Luo tekstikenttä
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add todo item here';

// Luo "Save" nappi
const save = document.createElement('button');
save.type = 'submit';
save.textContent = 'Add';

// Lisää elementit lomakkeeseen
form.appendChild(input);
form.appendChild(save);

// Lisää lomake dialogiin
dialog.appendChild(form);

// Lisää nappi ja dialogi dokumenttiin
document.body.appendChild(addButton);
document.body.appendChild(dialog);

// Lisää tapahtumankuuntelija napille, joka avaa dialogin
addButton.addEventListener('click', function () {
  dialog.showModal();
});

// Luo lista
const todoLista = document.getElementById('todo-list');

// Funktio TODO-listan renderöimiseksi
function renderTodoList() {
  todoLista.innerHTML = ''; // Tyhjennä lista
  todoList.forEach(function (task, index) {
    const item = document.createElement('li');
    const box = document.createElement('input');
    const btn = document.createElement('button');

    box.type = 'checkbox';
    box.checked = task.completed;
    btn.textContent = 'Poista';

    item.appendChild(box);
    item.appendChild(document.createTextNode(task.task));
    item.appendChild(btn);

    // Päivitä tehtävän tila valintaruudun muutoksessa
    box.addEventListener('change', function () {
      task.completed = box.checked;
      console.log(todoList); // Tarkista taulukko konsolissa
    });

    // Poista tehtävä napin klikkauksella
    btn.addEventListener('click', function () {
      todoList.splice(index, 1); // Korjattu: poista oikea tehtävä taulukosta
      renderTodoList(); // Päivitä lista
      console.log(todoList); // Tarkista taulukko konsolissa
    });

    todoLista.appendChild(item);
  });
}

renderTodoList();
