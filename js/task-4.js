const bntDecrementRef = document.querySelector('[data-action="decrement"]');
const bntIncrementRef = document.querySelector('[data-action="increment"]');
const bntValueRef = document.querySelector('#value');

let counterValue = 0;
bntDecrementRef.addEventListener('click', valueMinus);
bntIncrementRef.addEventListener('click', valuePlus);


function valueMinus(){
 counterValue -= 1;
  return bntValueRef.textContent = counterValue;
}

function valuePlus(){
 counterValue += 1;
  return bntValueRef.textContent = counterValue;
 }