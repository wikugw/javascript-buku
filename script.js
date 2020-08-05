document.addEventListener('DOMContentLoaded', function() {
  // var lis = document.getElementsByTagName("li");

// Array.from(lis).forEach(function(item){
//     item.style.color = "green";
// })

// memanggil elemen pada salah li
// const wmf = document.querySelector('#book-list li:nth-child(2) .delete');
// // console.log(wmf);

// const books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){

// });

// --lesson 5

// var books = document.querySelectorAll('#book-list ul li .name');

// books.forEach(function(book) {
//   book.textContent += ' (book title)';
// })

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h1>this is changed</h1>';
// bookList.innerHTML += '<h2>this is appended</h2>';

// lesson 7 akses parent

// const bookList = document.querySelector('#book-list');

// console.log(bookList.parentNode.parentNode);
// console.log(bookList.parentElement);

// akses anak
// console.log(bookList.childNodes);  //with linebreak
// console.log(bookList.children);

// console.log('next sibling: ', bookList.nextElementSibling);
// console.log('previous sibling: ', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> added from booklist'  //akses element seeblum mengambil tag p dan menambah kata


// menghapus buku menggunakan foreach addevent listener
// var btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     const li = e.target.parentElement;
//     li.parentElement.removeChild(li);
//   });
// });

// menghapus judul buku
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
  if(e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// ambil value dari inputan
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //  buat elemen
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteButton = document.createElement('span');
  // tambah konten
  bookName.textContent = value;
  deleteButton.textContent = 'delete';
  // tambah class
  bookName.classList.add('name');
  deleteButton.classList.add('delete');
  // tambah ke dokumen
  li.appendChild(bookName);
  li.appendChild(deleteButton);
  list.appendChild(li);
});

// hide books
const hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', function(e) {
  if(hideBook.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter book

const searchbar = document.forms['search-books'].querySelector('input');
// addevent listener searchbar
searchbar.addEventListener('keyup', function(e) {
  term = e.target.value.toLowerCase();
  books = list.querySelectorAll('li');
  books.forEach(function(book) {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block'
    } else {
      book.style.display = 'none'
    }
  });
});

// change active about contact

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function (e) {
  if(e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function(panel) {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});



});