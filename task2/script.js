const CONSOLE_LOG = document.querySelector('#consoleLog');
const ALERT = document.querySelector('#alert'); 
const PROMPT = document.querySelector('#prompt'); 

CONSOLE_LOG.addEventListener('click',
    (event) => {
        alert('Method to output message to console.');
    })

ALERT.addEventListener('click',
    (event) => {
        alert('Alert method output message');
    })

PROMPT.addEventListener('click',
    (event) => {
        prompt('Method to output message...', '... prompt');
    })