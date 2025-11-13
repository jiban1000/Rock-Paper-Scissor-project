


  const todoList = ['foods','vegetable', 'biscuit'];

  // render the list into the page
  function renderTodoList() {
    let todoListHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      todoListHtml += `<p>${todoList[i]}</p>`;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
  }

      todoList(); // show initial list

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // get element
    const name = inputElement.value.trim(); // get value safely

    if (name === '') return; // ignore empty input

    todoList.push(name);
    console.log(todoList);

    todoList();          // update visible list
    inputElement.value = ''; // clear input
  }

