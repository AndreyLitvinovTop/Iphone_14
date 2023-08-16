// Шапка
let header = document.querySelector('.header');

// Загаловок главной страницы
let main_title = document.querySelector('.main-title');

// Кнопка на главной странице
let main_button = document.querySelector('.main-button');

if (window.scrollY >= 0){
   header.classList.add('scroll');
   main_title.classList.add('scroll');
}

// Секция информация

let new_block = document.getElementById('new');
let new_content = document.querySelector('.new_content');
let new_image = document.querySelector('.new-image');

// Цвета 

let colors_block = document.getElementById('colors');
let colors_content = document.querySelector('.colors-content');

window.addEventListener('scroll', function(){ 
    if (window.scrollY >= window.screen.availHeight / 2){
        main_button.classList.add('scroll');
    }
    
    if (window.scrollY >= new_block.getBoundingClientRect().bottom){
        new_content.classList.add('scroll');
        new_image.classList.add('scroll');
    }

    if (window.scrollY >= colors_block.getBoundingClientRect().top){
        colors_content.classList.add('scroll');
    }
});