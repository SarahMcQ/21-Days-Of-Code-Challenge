//#21
// Instructions
// We need to complete a function called chooseRecipe(), which will receive three parameters:

// An array of ingredients in stock at Bakery A
// An array of ingredients in stock at Bakery B
// An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
// We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

// Our chooseRecipe() function should return the name of the correct recipe.

// Note: In the tests there will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

//Input:

const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [{
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]

//Output:Persian Cheesecake

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    for (let recipe of recipes) {
        let ingredientA = recipe.ingredients[0];
        let ingredientB = recipe.ingredients[1];

        if ((bakeryA.includes(ingredientA) && bakeryB.includes(ingredientB)) ||
            (bakeryA.includes(ingredientB) && bakeryB.includes(ingredientA))) {
            return recipe.name;
        }
    }
}