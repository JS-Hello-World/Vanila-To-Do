function insertTodoItem(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const value = formData.get('item');

  const section = document.querySelector('section');

  if (section) {
    const article = document.createElement('article');
    article.innerText = value;

    section.appendChild(article);
  }
};

document.getElementById('form').addEventListener('submit', insertTodoItem);
