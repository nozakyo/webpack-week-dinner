import RakutenRecipeAPI from "./modules/_RakutenRecipeAPI.js";

const recipeAPI = new RakutenRecipeAPI({
    imageClassName: 'js-recipe_image',
    timeClassName: 'js-recipe_time',
    priceClassName: 'js-recipe_price',
    titleClassName: 'js-recipe_title',
});

recipeAPI.init();