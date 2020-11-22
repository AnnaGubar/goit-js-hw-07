const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', addName);

function addName(event){
 inputNameRef.value = event.target.value;
 outputNameRef.textContent =
 event.target.value === "" ? "незнайомець" : event.target.value.trim();
}