// jQuery

let element = $('.my-class');

// easy to address a class
let inputs =$('input');
inputs.addClass('my-class');

// non - jQuery code
let inputs = document.querySelectorAll('input');
inputs.forEach(function (input){
    input.classList.add('.my-class');
});

// Dom elements using jQuery

let input = $('input');
input.parent(); //Get the parent element
input.children(); //Get all children
input.closest('.container'); //Go up the hierarchy of parents untill the selector matches
input.siblings(); //Get all siblings

//example 4.1: run multiple commands in a row on the same element
$('notificiation').addClass('bright-red').delay(300).removeClass('bright-red')

// example 4.2
$('notification')
.addClass('bright-red')
.delay(300)
.removeClass('bright-red')

// example 5 new DOM element
let newElement =$('<div class="new-class">Content is here! /<div>');
$('body').append(newElement);

// equivalent to the example 5, non-Query code 
let newElement = document.createElement('div');
newElement.classList.add('new-class');
newElement.innerText = 'Content is here!';
document.querySelector('body').appendChild(newElement);

//forEach in jQuery
$('input').each(function (i){
    let inputValue = $(this).val();
    let inputName = $(this).attr('name');
    if(inputValue().length <1){
        console.log('Please fill out the' + inputName + 'field')
    }
});
