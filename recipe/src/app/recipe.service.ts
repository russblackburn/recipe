import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  recipes = [
    {
      id: 1,
      mealTime: 'dessert',
      title: 'Recipe 4',
      image: 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg',
      ingredients: [
        {
          amount: '5 1/4',
          measurement: 'Cups',
          ingredient: 'Sugar'
        },
        {
          amount: '1',
          measurement: 'Cup',
          ingredient: 'Vanilla Extract'
        },
        {
          amount: '2',
          measurement: 'Cups',
          ingredient: 'Chocolate Chips'
        }
      ],
      directions: [
        {
          icon: 'mix',
          direction: 'Mix in 1/4 cup of sugar',
          ingredientPosition: 0,
          ingredientAmount: '1/4',
          clicked: false
        },
        {
          icon: 'stir',
          direction: 'Stir in 5 cups of sugar',
          ingredientPosition: 0,
          ingredientAmount: '5',
          clicked: false
        },
        {
          icon: 'bake',
          direction: 'Bake for 30 minutes',
          ingredientPosition: 0,
          ingredientAmount: '0',
          clicked: false
        }
      ],
      nutritionalInfo: {
        calories: 500,
        protien: 'string?',
        carbs: 'string?',
        fat: 'string?',
        sugar: 'string?',
        sodium: 'string?',
        fiber: 'string?'
      }
    }
  ];

  constructor() { }

  getRecipes(chosenList) {
    if (chosenList === 'all') {
      return this.recipes.slice();
    }
    return this.recipes.filter((recipe) => {
      return recipe.mealTime === chosenList;
    });
  }

  getRecipe(recipeID) {
    return this.recipes.find(x => x.id === recipeID);
  }

}
