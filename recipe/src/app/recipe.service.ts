import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  recipes = [
    {
      id: 1,
      mealTime: 'breakfast',
      title: 'Recipe 1',
      image: 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg',
      ingredients: [
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        }
      ],
      directions: [
        {
          icon: 'mix',
          direction: 'Mix in the sugar'
        },
        {
          icon: 'stir',
          direction: 'stir in the sugar'
        }
      ]
    },
    {
      id: 2,
      mealTime: 'lunch',
      title: 'Recipe 2',
      image: 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg',
      ingredients: [
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        }
      ],
      directions: [
        {
          icon: 'mix',
          direction: 'Mix in the sugar'
        },
        {
          icon: 'stir',
          direction: 'stir in the sugar'
        }
      ]
    },
    {
      id: 3,
      mealTime: 'dinner',
      title: 'Recipe 3',
      image: 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg',
      ingredients: [
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        }
      ],
      directions: [
        {
          icon: 'mix',
          direction: 'Mix in the sugar'
        },
        {
          icon: 'stir',
          direction: 'stir in the sugar'
        }
      ]
    },
    {
      id: 4,
      mealTime: 'dessert',
      title: 'Recipe 4',
      image: 'https://static.pexels.com/photos/76093/pexels-photo-76093.jpeg',
      ingredients: [
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        },
        {
          amount: 2,
          measurement: 'Cup',
          ingredient: 'Sugar'
        }
      ],
      directions: [
        {
          icon: 'mix',
          direction: 'Mix in the sugar'
        },
        {
          icon: 'stir',
          direction: 'stir in the sugar'
        }
      ]
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

}
