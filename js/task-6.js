const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("input", handleInputValue);
inputRef.addEventListener("blur", handleValidity);

function handleInputValue(event){
  inputRef.value = event.target.value.trim();
}

function handleValidity(event) {
 if (event.currentTarget.value.length === 0) {
  inputRef.classList.remove("invalid");
  inputRef.classList.remove("valid");
 } else if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
  inputRef.classList.add("valid");
  inputRef.classList.remove("invalid");
 } else {
  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
 }
};