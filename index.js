function fetchBooks() {
 fetch("https://anapioficeandfire.com/api/books")
 .then(resp => resp.json())
 .then(renderBooks(jsonObject));
}

function renderBooks(jsonObject) {
  const main = document.querySelector('main')
  jsonObject.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
