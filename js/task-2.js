const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

const addItems = ingredients.map((el) => {
 const itemIngredients = document.createElement('li');
 itemIngredients.textContent = el;
 return itemIngredients;
})

ingredientsRef.append(...addItems);