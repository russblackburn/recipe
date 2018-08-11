import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  recipes = [
    // if there is an apostrophe needed escape it with a backslash (  It\'s  )

    // begin recipe 0 --------------------
    {
      id: 0,
      mealTime: 'breakfast',
      title: 'Multigrain Pancakes',
      image: 'assets/recipeImages/0.jpeg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '1',
          measurement: '',
          ingredient: 'Egg',
          icon: 'egg'
        },
        {
          // ingredient position 1
          amount: '1',
          measurement: 'Cup',
          ingredient: 'Milk',
          icon: 'milk'
        },
        {
          // ingredient position 2
          amount: '1',
          measurement: 'tsp',
          ingredient: 'Vanilla',
          icon: 'teaspoon'
        },
        {
          // ingredient position 3
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'Wheat Flour',
          icon: 'flour'
        },
        {
          // ingredient position 4
          amount: '1/4',
          measurement: 'Cup',
          ingredient: 'White Flour',
          icon: 'flour-2'
        },
        {
          // ingredient position 5
          amount: '1/4',
          measurement: 'Cup',
          ingredient: 'Buckwheat Flour',
          icon: 'flour'
        },
        {
          // ingredient position 6
          amount: '1/2',
          measurement: 'tsp',
          ingredient: 'Baking Powder',
          icon: 'teaspoon'
        },
        {
          // ingredient position 7
          amount: '1',
          measurement: 'tsp',
          ingredient: 'Cinnamon',
          icon: 'teaspoon'
        },
        {
          // ingredient position 8
          amount: '1',
          measurement: 'Tbsp',
          ingredient: 'Honey',
          icon: 'honey'
        },
        {
          // ingredient position 9
          amount: '1',
          measurement: 'Ripe',
          ingredient: 'Banana',
          icon: 'banana'
        },
        {
          // ingredient position 10
          amount: '2',
          measurement: 'Tbsp',
          ingredient: 'Canola Oil',
          icon: 'oil'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'cookbook',
          direction: 'Add 1 egg to mixing bowl',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '1',
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Add 1 cup milk',
          ingredientPosition: 1, // match ingredient position above
          ingredientAmount: '1',
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Add 1 tsp vanilla',
          ingredientPosition: 2, // match ingredient position above
          ingredientAmount: '1',
          clicked: false
        },
        {
          icon: 'mixer',
          direction: 'Mix egg, milk, and vanilla',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        },
        {
          icon: 'mixer',
          direction: 'Add 1/2 cup wheat flour',
          ingredientPosition: 3, // match ingredient position above
          ingredientAmount: '1/2',
          clicked: false
        },
        {
          icon: 'cookbook',
          direction: 'Add 1/4 cup white flour',
          ingredientPosition: 4, // match ingredient position above
          ingredientAmount: '1/4',
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Add 1/4 cup buckwheat flour',
          ingredientPosition: 5, // match ingredient position above
          ingredientAmount: '1/4',
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Add baking powder',
          ingredientPosition: 6, // match ingredient position above
          ingredientAmount: '1/2',
          clicked: false
        },
        {
          icon: 'mixer',
          direction: 'Add cinnamon',
          ingredientPosition: 7, // match ingredient position above
          ingredientAmount: '1',
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Stir to combine',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Add honey and stir to combine',
          ingredientPosition: 8, // match ingredient position above
          ingredientAmount: '1',
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Heat skillet at medium to medium-high heat',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        },
        {
          icon: 'knife',
          direction: 'Thinly slice banana',
          ingredientPosition: 9, // match ingredient position above
          ingredientAmount: '1',
          clicked: false
        },
        {
          icon: 'sauce',
          direction: 'Add a portion of canola oil to heated skilet',
          ingredientPosition: 10, // match ingredient position above
          ingredientAmount: '2',
          clicked: false
        },
        {
          icon: 'measuring-cup',
          direction: 'Pour pancake mix onto skillet to desired size and quickly add 3-5 slices of banana ',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        },
        {
          icon: 'fork',
          direction: 'Flip pancakes when bubbling and underside is golden brown',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        },
        {
          icon: 'sauce',
          direction: 'Repeat until all of the batter is used, adding canola oil to skillet as needed',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        },
        {
          icon: 'plate',
          direction: 'Add desired toppings',
          ingredientPosition: 0, // match ingredient position above
          ingredientAmount: '0',
          clicked: false
        }
      ],
      nutritionalInfo: {
        calories: '338',
        protien: '9.1 g',
        carbs: '49.5 g',
        fat: '13.5 g',
        sugar: '14.3 g',
        sodium: '71.6 mg',
        fiber: '9.6 g'
      }
    }
    // end recipe 0 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
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
