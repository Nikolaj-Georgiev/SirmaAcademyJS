document.getElementById('add-button').addEventListener('click', function () {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  const ul = document.getElementById('todo-list');
  ul.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  })
  const li = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  li.textContent = task;
  li.append(removeButton);
  ul.appendChild(li);
  input.value = '';
});