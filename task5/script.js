const INPUT_DATA = document.querySelector('input');
const DUBL_FIELD = document.querySelector('#duplicateField');
const CLEAR_BUTTON = document.querySelector('button');

INPUT_DATA.addEventListener('keyup', function(event){
    DUBL_FIELD.textContent = INPUT_DATA.value;
});

CLEAR_BUTTON.addEventListener('click', function(event){
    console.log(INPUT_DATA.value);
    INPUT_DATA.value= '';
    DUBL_FIELD.textContent = '';
});
