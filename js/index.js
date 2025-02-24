'use strict'

// const ulParentElement = document.querySelector('.task-menu');
// const textBtn = document.querySelector('.text-btn');

// ulParentElement.onclick = (event) => {
//   if (event.target.classList.contains('task-btn')) {
//       event.target.parentElement.remove();
//   }
// }

// textBtn.addEventListener('click', () => {
//   const inputTextVal = document.querySelector('.input-text').value;
//   if (inputTextVal.trim() !== '') {
//     const appendIt = document.createElement('li');
//     appendIt.innerHTML = inputTextVal + ' <button class="task-btn">Видалити</button>';
//     ulParentElement.append(appendIt);  
//   } 
// });

const ulParentElement = $('.task-menu');
const taskList = ulParentElement.find('.task-list');
const removeBtn = $('.task-btn');
const addBtn = $('.text-btn');

ulParentElement.on('click', '.task-btn', function() {
  $(this).parent().remove();  
});

addBtn.on('click', function() {
  const inputTextVal = $('.input-text').val();
  if (inputTextVal.trim() !== '') {
    const appendIt = $('<li></li>');
    const appendLink = $('<a></a>');
    appendLink.attr('href', '#');
    appendLink.attr('data-bs-toggle', 'modal');
    appendLink.attr('data-bs-target', '#exampleModal'); 
    
    appendLink.text(inputTextVal);
    appendLink.css({
      'font-size': '25px',
      'text-decoration': 'none',
      'color': '#325232',
    })
    appendIt.append(appendLink);
    appendIt.append(' <button class="task-btn">Видалити</button>');
    ulParentElement.append(appendIt);  
  } 
  $('.input-text').val("");
});
  

    

