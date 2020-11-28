const inputRef = document.querySelector('[type="number"]');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById("boxes");

btnRenderRef.addEventListener("click", () => createBoxes(inputRef.value));
btnDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)})`;
    newBoxes.push(newBox);
  }
  boxesRef.append(...newBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
