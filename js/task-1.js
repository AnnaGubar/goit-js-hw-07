const categoryRef = document.querySelector('#categories');
const titleCategoryRef = document.querySelectorAll('.item');

console.log(`В списке ${categoryRef.children.length} категории.`);

titleCategoryRef.forEach(el => console.log
(`Категория: ${el.firstElementChild.innerHTML}
Количество элементов: ${el.lastElementChild.children.length}`));
