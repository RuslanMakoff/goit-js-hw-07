const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('.item');

console.log('Кількість категорій:', categoriesItems.length);

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;

    const categoryItemsCount = item.querySelectorAll('li').length;

    console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${categoryItemsCount}`);
});