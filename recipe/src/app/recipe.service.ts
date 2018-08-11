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
          icon: 'pancakes'
        },
        {
          // ingredient position 7
          amount: '1',
          measurement: 'tsp',
          ingredient: 'Cinnamon',
          icon: 'pancakes-2'
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
          measurement: '',
          ingredient: 'Ripe Banana',
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
          direction: 'Combine 1 egg, 1 cup of milk, and 1 tsp of vanilla in mixing bowl',
          ingredientPosition: [0, 1, 2], // match ingredient position above for each ingredient
          ingredientAmount: ['1', '1', '1'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Add 1/2 cup of wheat flour, 1/4 cup white flour, 1/4 cup buckwheat flour, 1/2 tsp baking powder, and 1 tsp cinnamon and stir to combine',
          ingredientPosition: [3, 4, 5, 6, 7], // match ingredient position above
          ingredientAmount: ['1/2', '1/4', '1/4', '1/2', '1'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Add honey and stir to combine',
          ingredientPosition: [8], // match ingredient position above
          ingredientAmount: ['1'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Heat skillet at medium to medium-high heat',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'knife',
          direction: 'Thinly slice banana',
          ingredientPosition: [9], // match ingredient position above
          ingredientAmount: ['1'],
          clicked: false
        },
        {
          icon: 'measuring-cup',
          direction: 'Add a portion of canola oil and pour mix onto skillet to desired size, quickly add 3-5 slices of banana to each pancake',
          ingredientPosition: [10], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Flip when bubbling and golden brown on underside',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Add desired toppings',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Possible toppings include crushed pecans, strawberries, blueberries, blackberries, raspberries, peaches, and maple syrup.',
      nutritionalInfo: {
        servingSize: '3 Pancakes',
        calories: '338',
        protien: '9.1 g',
        carbs: '49.5 g',
        fat: '13.5 g',
        sugar: '14.3 g',
        sodium: '71.6 mg',
        fiber: '9.6 g'
      }
    },
    // end recipe 0 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 1 --------------------
    {
      id: 1,
      mealTime: 'dinner',
      title: 'Pizza',
      image: 'assets/recipeImages/1.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '3',
          measurement: 'Cups',
          ingredient: 'Bread Flour',
          icon: 'flour'
        },
        {
          // ingredient position 1
          amount: '2',
          measurement: 'tsp',
          ingredient: 'Salt',
          icon: 'salt'
        },
        {
          // ingredient position 2
          amount: '1',
          measurement: 'Tbsp',
          ingredient: 'Sugar',
          icon: 'teaspoon'
        },
        {
          // ingredient position 3
          amount: '1',
          measurement: 'Package',
          ingredient: 'Yeast',
          icon: 'pizza'
        },
        {
          // ingredient position 4
          amount: '1 1/3',
          measurement: 'Cup',
          ingredient: 'Water',
          icon: 'water'
        },
        {
          // ingredient position 5
          amount: '3',
          measurement: 'Tbsp',
          ingredient: 'Oil',
          icon: 'oil'
        },
        {
          // ingredient position 6
          amount: '1',
          measurement: 'Jar',
          ingredient: 'Pizza Sauce',
          icon: 'pizza-5'
        },
        {
          // ingredient position 7
          amount: '1',
          measurement: 'Cup',
          ingredient: 'Mozzarella Cheese',
          icon: 'cheese'
        },
        {
          // ingredient position 8
          amount: '4',
          measurement: 'Fresh',
          ingredient: 'Basil Leaves',
          icon: 'salad-2'
        },
        {
          // ingredient position 9
          amount: '1/4',
          measurement: 'Can',
          ingredient: 'Pineapple Tidbits',
          icon: 'pineapple'
        },
        {
          // ingredient position 10
          amount: '1',
          measurement: 'Jar',
          ingredient: 'Artichokes',
          icon: 'none'
        },
        {
          // ingredient position 11
          amount: '1',
          measurement: 'Can',
          ingredient: 'Olives',
          icon: 'olives'
        },
        {
          // ingredient position 12
          amount: '1',
          measurement: 'Container',
          ingredient: 'Grape Tomatoes',
          icon: 'tomato'
        },
        {
          // ingredient position 13
          amount: '1',
          measurement: 'Cup',
          ingredient: 'Spinach',
          icon: 'salad-2'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'cookbook',
          direction: 'In mixing bowl, combine 3 cups of bread flour, 2 tsp of salt, 1 Tbsp of sugar, 1 package of yeast, 1 1/3 cups of water, and 2 Tbsp of oil',
          ingredientPosition: [0, 1, 2, 3, 4, 5], // match ingredient position above for each ingredient
          ingredientAmount: ['3', '2', '1', '1', '1 1/3', '2'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Cover bowl with towel or plastic wrap and let dough rise at leas 3-4 hours or overnight',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'rolling-pin',
          direction: 'Knead dough, use flour as needed to keep from sticking',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'plate',
          direction: 'Spread dough on 2 pans and cover with 1 Tbsp oil',
          ingredientPosition: [5], // match ingredient position above
          ingredientAmount: ['1'],
          clicked: false
        },
        {
          icon: 'oven',
          direction: 'Add toppings in desired amounts and preheat oven to 375 F',
          ingredientPosition: [6, 7, 8, 9, 10, 11, 12, 13], // match ingredient position above
          ingredientAmount: ['1', '1', '4', '1/4', '1', '1', '1', '1'],
          clicked: false
        },
        {
          icon: 'pizza-cutter',
          direction: 'Bake for 20-25 minutes',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Make sure to follow package directions for yeast before combining in bowl. Makes 2 whole pizzas or 4-7 individual pizzas. This recipe is extremely versatile when it comes to toppings; feel free to put whatever you want on top.',
      nutritionalInfo: {
        servingSize: '3 Slices',
        calories: '486',
        protien: '15.8 g',
        carbs: '68.3 g',
        fat: '16.1 g',
        sugar: '6.5 g',
        sodium: '1,392 mg',
        fiber: '2.8 g'
      }
    },
    // end recipe 1 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 2 --------------------
    {
      id: 2,
      mealTime: 'lunch',
      title: 'Wafflini Sandwich',
      image: 'assets/recipeImages/2.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '2',
          measurement: 'Tbsp',
          ingredient: 'Extra Virgin Olive Oil',
          icon: 'oil'
        },
        {
          // ingredient position 1
          amount: '4',
          measurement: 'Slices',
          ingredient: 'Italian bread',
          icon: 'baguette'
        },
        {
          // ingredient position 2
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'shredded Mozzarella Cheese',
          icon: 'cheese'
        },
        {
          // ingredient position 3
          amount: '2',
          measurement: 'sliced',
          ingredient: 'Plum Tomatoes',
          icon: 'tomato'
        },
        {
          // ingredient position 4
          amount: '4',
          measurement: 'fresh',
          ingredient: 'Basil Leaves',
          icon: 'water'
        },
        {
          // ingredient position 5
          amount: '8',
          measurement: 'pitted',
          ingredient: 'Kalamata Olives, cut in half',
          icon: 'olives'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'chef-hat',
          direction: 'Preheat waffle maker',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Brush bread slices with oil, top 2 slices of bread each with 1/4 cup mozzarella cheese, 1 sliced plum tomato, 2 fresh basil leaves, 4 halfed kalamata olives, and 2 other slices of bread',
          ingredientPosition: [0, 1, 2, 3, 4, 5], // match ingredient position above
          ingredientAmount: ['2', '4', '1/2', '2', '4', '8'],
          clicked: false
        },
        {
          icon: 'cutlery',
          direction: 'Place sandwich in waffle maker gently pressing down, cook for 2 minutes ',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Try adding chicken or a favorite dressing like mayonnaise.',
      nutritionalInfo: {
        servingSize: '1 Sandwich',
        calories: '442',
        protien: '16.2 g',
        carbs: '38.3 g',
        fat: '26.8 g',
        sugar: '4.5 g',
        sodium: '752.9 mg',
        fiber: '5 g'
      }
    },
    // end recipe 2 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 3 --------------------
    {
      id: 3,
      mealTime: 'dinner',
      title: 'Shell Lasagna',
      image: 'assets/recipeImages/3.jpeg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '20',
          measurement: 'Jumbo',
          ingredient: 'Pasta Shells',
          icon: 'none'
        },
        {
          // ingredient position 1
          amount: '2',
          measurement: 'Chopped',
          ingredient: 'Onions',
          icon: 'onion'
        },
        {
          // ingredient position 2
          amount: '2',
          measurement: 'lbs',
          ingredient: 'Fresh Spinach',
          icon: 'salad-2'
        },
        {
          // ingredient position 3
          amount: '1 1/2',
          measurement: 'tsp',
          ingredient: 'Olive Oil',
          icon: 'oil'
        },
        {
          // ingredient position 4
          amount: '2',
          measurement: 'Cups',
          ingredient: 'Cottage Cheese',
          icon: 'none'
        },
        {
          // ingredient position 5
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'Ground Nutmeg',
          icon: 'spices'
        },
        {
          // ingredient position 6
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'grated Parmesan Cheese',
          icon: 'cheese-2'
        },
        {
          // ingredient position 7
          amount: '1/8',
          measurement: 'tsp',
          ingredient: 'Salt',
          icon: 'salt'
        },
        {
          // ingredient position 8
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'Ground Pepper',
          icon: 'pepper-2'
        },
        {
          // ingredient position 9
          amount: '1',
          measurement: 'large',
          ingredient: 'Egg White, lightly beaten',
          icon: 'egg'
        },
        {
          // ingredient position 10
          amount: '3',
          measurement: 'Cups',
          ingredient: 'prepared Marinara Sauce',
          icon: 'none'
        },
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'pot-large',
          direction: 'Cook 20 jumbo shells according to package directions, drain, rinse with cold water',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['20'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Heat 1 1/2 tsp olive oil in large skillet over medium-high heat ,cook 2 onions until softened - about 3 minutes, slowly add 2 lbs of spinach and mix until wilted',
          ingredientPosition: [1, 2, 3], // match ingredient position above
          ingredientAmount: ['2', '2', '1 1/2'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Drain, press out extra moisture with back of spoon ',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'measuring-cup',
          direction: 'In bowl, combine 2 cups cottage cheese, 1/4 tsp ground nutmeg, 1/4 cup parmesan cheese ',
          ingredientPosition: [4, 5, 6], // match ingredient position above
          ingredientAmount: ['2', '1/4', '1/4'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Add the spinach and onion mixture along with 1/8 tsp salt, 1/4 tsp ground pepper, and 1 egg white ',
          ingredientPosition: [7, 8, 9], // match ingredient position above
          ingredientAmount: ['1/8', '1/4', '1'],
          clicked: false
        },
        {
          icon: 'chef-hat',
          direction: 'Spread 1 cup marinara sauce in 9 x 13 in. baking dish and place pasta shells inside after stuffing each one with 2 Tbsp of cheese and spinach mixture ',
          ingredientPosition: [10], // match ingredient position above
          ingredientAmount: ['1'],
          clicked: false
        },
        {
          icon: 'oven',
          direction: 'Preheat oven to 375 F ',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'gloves',
          direction: 'Top with 2 cups of marinara sauce and 1/4 cup parmesan cheese, baking 20-30 min. until top is golden and shells are heated through, let cool for 10 min.',
          ingredientPosition: [10, 6], // match ingredient position above
          ingredientAmount: ['2', '1/4'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Cottage cheese can be replaced with ricotta cheese.',
      nutritionalInfo: {
        servingSize: '4 Shells',
        calories: '483',
        protien: '39.5 g',
        carbs: '49.8 g',
        fat: '16.1 g',
        sugar: '6.7 g',
        sodium: '2,194 mg',
        fiber: '7.5 g'
      }
    },
    // end recipe 3 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 4 --------------------
    {
      id: 4,
      mealTime: 'dinner',
      title: 'Zucchini & Gnocchi Pasta ',
      image: 'assets/recipeImages/4.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '1',
          measurement: 'lb.',
          ingredient: 'Gnocchi',
          icon: 'none'
        },
        {
          // ingredient position 1
          amount: '2',
          measurement: 'tbsp',
          ingredient: 'Butter',
          icon: 'none'
        },
        {
          // ingredient position 2
          amount: '2',
          measurement: 'medium',
          ingredient: 'Shallots, chopped',
          icon: 'onion-2'
        },
        {
          // ingredient position 3
          amount: '4',
          measurement: 'small',
          ingredient: 'Zucchini',
          icon: 'cucumber'
        },
        {
          // ingredient position 4
          amount: '1',
          measurement: 'pint',
          ingredient: 'Cherry Tomatoes, halved',
          icon: 'tomato'
        },
        {
          // ingredient position 5
          amount: '1/2',
          measurement: 'tsp',
          ingredient: 'Salt',
          icon: 'salt'
        },
        {
          // ingredient position 6
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'grated Nutmeg',
          icon: 'spices'
        },
        {
          // ingredient position 7
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'Ground Pepper',
          icon: 'pepper-2'
        },
        {
          // ingredient position 8
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'grated Parmesan Cheese',
          icon: 'cheese'
        },
        {
          // ingredient position 9
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'chopped fresh Parsley',
          icon: 'spices'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'pot-large',
          direction: 'Cook 1 lb gnocchi 3-5 min. in large saucepan of boiling water until they float, drain',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['1'],
          clicked: false
        },
        {
          icon: 'knife',
          direction: 'Thinly slice 4 small zucchini lengthwise with a veggie peeler',
          ingredientPosition: [3], // match ingredient position above
          ingredientAmount: ['4'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Melt 2 tbsp butter in large skillet over medium-high heat 2 min, add 2 medium shallots and zucchini, cook 2-3 min until soft',
          ingredientPosition: [1, 2], // match ingredient position above
          ingredientAmount: ['2', '2'],
          clicked: false
        },
        {
          icon: 'chef-hat',
          direction: 'Add 1 pint cherry tomatoes, 1/2 tsp salt, 1/4 tsp nutmeg, and 1/4 tsp pepper, cooking 1-2 min until tomatoes are softened ',
          ingredientPosition: [4, 5, 6, 7], // match ingredient position above
          ingredientAmount: ['1', '1/2', '1/4', '1/4'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Stir in 1/2 cup parmesan cheese and 1/2 cup fresh parsley, add gnocchi and toss to coat',
          ingredientPosition: [8, 9], // match ingredient position above
          ingredientAmount: ['1/2', '1/2'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: ' If you don\'t have fresh herbs or spices, feel free to use dried ones which often have conversions on the bottle.',
      nutritionalInfo: {
        servingSize: '1 1/2 Cups',
        calories: '426',
        protien: '17 g',
        carbs: '66 g',
        fat: '11 g',
        sugar: '7 g',
        sodium: '752 mg',
        fiber: '4 g'
      }
    },
    // end recipe 4 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 5 --------------------
    {
      id: 5,
      mealTime: 'dinner',
      title: 'Shrimp & Cauliflowers ',
      image: 'assets/recipeImages/5.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '4',
          measurement: 'Cups small',
          ingredient: 'Cauliflower Florets',
          icon: 'cauliflower'
        },
        {
          // ingredient position 1
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'Onion, chopped',
          icon: 'onion'
        },
        {
          // ingredient position 2
          amount: '2',
          measurement: 'Tbsp',
          ingredient: 'Olive Oil',
          icon: 'oil'
        },
        {
          // ingredient position 3
          amount: '1/2',
          measurement: 'tsp',
          ingredient: 'Crushed Red Pepper',
          icon: 'pepper'
        },
        {
          // ingredient position 4
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'Salt',
          icon: 'salt'
        },
        {
          // ingredient position 5
          amount: '1',
          measurement: 'lb',
          ingredient: 'peeled and deveined medium Shrimp',
          icon: 'shrimp'
        },
        {
          // ingredient position 6
          amount: '2',
          measurement: '14.5 oz cans',
          ingredient: 'Diced Tomatoes, drained',
          icon: 'tomato'
        },
        {
          // ingredient position 7
          amount: '2',
          measurement: 'cloves',
          ingredient: 'Garlic, minced',
          icon: 'garlic'
        },
        {
          // ingredient position 8
          amount: '1',
          measurement: 'tsp',
          ingredient: 'Lemon Zest',
          icon: 'lemon'
        },
        {
          // ingredient position 9
          amount: '1/2',
          measurement: 'Cup',
          ingredient: 'crumbled reduced-fat Feta Cheese',
          icon: 'cheese-2'
        },
        {
          // ingredient position 10
          amount: '1',
          measurement: 'Tbsp',
          ingredient: 'fresh Dill',
          icon: 'spices'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'oven',
          direction: 'Preheat oven to 425 F',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Combine 4 cups small cauliflower florets, 1/2 cup chopped onion, 2 Tbsp olive oil, 1/2 tsp crushed red pepper, and 1/4 tsp salt in a large bowl',
          ingredientPosition: [0, 1, 2, 3, 4], // match ingredient position above
          ingredientAmount: ['4', '1/2', '2', '1/2', '1/4'],
          clicked: false
        },
        {
          icon: 'gloves',
          direction: 'Spread cauliflower mixture in shallow metal pan and bake until califlower is tender, about 22 min',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'strainer',
          direction: 'Rinse 1 lb shrimp and pat dry',
          ingredientPosition: [5], // match ingredient position above
          ingredientAmount: ['1'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Combine shrimp, 2 cans diced tomatoes, 2 cloves garlic, and 1 tsp lemon zest in medium bowl',
          ingredientPosition: [6, 7, 8], // match ingredient position above
          ingredientAmount: ['2', '2', '1'],
          clicked: false
        },
        {
          icon: 'oven',
          direction: 'Pour shrimp mixture over cauliflower mixture and bake until shrimp are opaque, about 15 more min',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Combine 1/2 cup feta cheese and 1 Tbsp fresh dill, sprinkle over baked mixture',
          ingredientPosition: [9, 10], // match ingredient position above
          ingredientAmount: ['1/2', '1'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Serve with lemon wedges if desired. Also, 1 clove of garlic is not the whole thing; 1 clove is just 1 section of the garlic.',
      nutritionalInfo: {
        servingSize: '1 3/4 Cups',
        calories: '269',
        protien: '29 g',
        carbs: '18 g',
        fat: '11 g',
        sugar: '10 g',
        sodium: '561 mg',
        fiber: '6 g'
      }
    },
    // end recipe 5 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 6 --------------------
    {
      id: 6,
      mealTime: 'lunch',
      title: 'Spinach & Artichoke Grilled Cheese ',
      image: 'assets/recipeImages/6.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '4',
          measurement: 'tsp',
          ingredient: 'Olive Oil',
          icon: 'oil'
        },
        {
          // ingredient position 1
          amount: '3',
          measurement: 'Cups',
          ingredient: 'fresh Baby Spinach',
          icon: 'salad-2'
        },
        {
          // ingredient position 2
          amount: '1',
          measurement: 'small',
          ingredient: 'Shallot, minced',
          icon: 'onion-2'
        },
        {
          // ingredient position 3
          amount: '1',
          measurement: '6 oz. jar',
          ingredient: 'marinated Artichoke Hearts, chopped',
          icon: 'none'
        },
        {
          // ingredient position 4
          amount: '1/2',
          measurement: 'cup',
          ingredient: 'Mozzarella Cheese, shredded',
          icon: 'cheese'
        },
        {
          // ingredient position 5
          amount: '1/2',
          measurement: 'cup',
          ingredient: 'Parmesan Cheese, shredded',
          icon: 'cheese-2'
        },
        {
          // ingredient position 6
          amount: '2',
          measurement: 'oz',
          ingredient: 'Cream Cheese, room temperature',
          icon: 'none'
        },
        {
          // ingredient position 7
          amount: '4',
          measurement: 'slices',
          ingredient: 'crusty Bread (see notes)',
          icon: 'bread'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'apron',
          direction: 'Heat medium skillet over medium heat',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Add 1 tsp olive oil and 3 cups of baby spinach to skillet',
          ingredientPosition: [0, 1], // match ingredient position above
          ingredientAmount: ['1', '3'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Cook, stirring occasionally until spinach is wilted',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'plate',
          direction: 'Transfer spinach onto paper towel lined plate to soak up some of the moisture',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Add 1 tsp olive oil and 1 shallot to skillet, cook about 3 min until soft',
          ingredientPosition: [0, 2], // match ingredient position above
          ingredientAmount: ['1', '1'],
          clicked: false
        },
        {
          icon: 'mixer',
          direction: 'To medium bowl, add cooked spinach and shallots, 1 jar of chopped artichoke hearts, 1/2 cup shredded mozzarella cheese, 1/2 cup parmesan cheese, and 2 oz cream cheese',
          ingredientPosition: [3, 4, 5, 6], // match ingredient position above
          ingredientAmount: ['1', '1/2', '1/2', '2'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Mix until blended',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Brush remaining olive oil onto each slice of bread',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Add spinach mixture to slices of bread, leaving oiled sides on the outside, and cook in skillet until golden and melted through',
          ingredientPosition: [7], // match ingredient position above
          ingredientAmount: ['4'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Some breads you can try are como, ciabatta, sourdough, or croissants.',
      nutritionalInfo: {
        servingSize: '1 sandwich',
        calories: '616',
        protien: '26.3 g',
        carbs: '45.9 g',
        fat: '37.5 g',
        sugar: '4 g',
        sodium: '880 mg',
        fiber: '3.3 g'
      }
    },
    // end recipe 6 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 7 --------------------
    {
      id: 7,
      mealTime: 'lunch',
      title: 'Macaroni & Cheese ',
      image: 'assets/recipeImages/7.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '4',
          measurement: 'Tbsp',
          ingredient: 'Butter',
          icon: 'butter'
        },
        {
          // ingredient position 1
          amount: '4',
          measurement: 'Tbsp',
          ingredient: 'Flour',
          icon: 'flour'
        },
        {
          // ingredient position 2
          amount: '1/2',
          measurement: 'tsp',
          ingredient: 'Salt',
          icon: 'salt'
        },
        {
          // ingredient position 3
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'Pepper',
          icon: 'pepper-2'
        },
        {
          // ingredient position 4
          amount: '2',
          measurement: 'cups',
          ingredient: 'Milk',
          icon: 'milk'
        },
        {
          // ingredient position 5
          amount: '2',
          measurement: 'cups',
          ingredient: 'grated Cheddar Cheese',
          icon: 'cheese'
        },
        {
          // ingredient position 6
          amount: '3',
          measurement: 'cups',
          ingredient: 'Macaroni Noodles',
          icon: 'none'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'pot',
          direction: 'Cook 3 cups macaroni noodles',
          ingredientPosition: [6], // match ingredient position above for each ingredient
          ingredientAmount: ['3'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Heat 4 Tbsp butter until melted',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['4'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Add 4 Tbsp flour and stir until melted',
          ingredientPosition: [1], // match ingredient position above
          ingredientAmount: ['4'],
          clicked: false
        },
        {
          icon: 'salt',
          direction: 'Add 1/2 tsp salt and 1/4 tsp pepper',
          ingredientPosition: [2, 3], // match ingredient position above
          ingredientAmount: ['1/2', '1/4'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Slowly stir in 2 cups milk and continue to heat until thickened',
          ingredientPosition: [4], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Add 2 cups cheddar cheese and mix',
          ingredientPosition: [5], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Mix sauce and noodles together',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'Try adding peas',
      nutritionalInfo: {
        servingSize: '1/2 cup noodles',
        calories: '544',
        protien: '20.8 g',
        carbs: '55.2 g',
        fat: '26.4 g',
        sugar: '11.6 g',
        sodium: '3,695.7 mg',
        fiber: '2.7 g'
      }
    },
    // end recipe 7 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 8 --------------------
    {
      id: 8,
      mealTime: 'dinner',
      title: 'Cheesy Potatoes ',
      image: 'assets/recipeImages/8.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '6',
          measurement: 'large',
          ingredient: 'Potatoes',
          icon: 'potatoes'
        },
        {
          // ingredient position 1
          amount: '1',
          measurement: 'can',
          ingredient: 'Cream of Chicken Soup',
          icon: 'can'
        },
        {
          // ingredient position 2
          amount: '1',
          measurement: 'cup',
          ingredient: 'Sour Cream',
          icon: 'none'
        },
        {
          // ingredient position 3
          amount: '1/2',
          measurement: 'cup',
          ingredient: 'green Onion, chopped',
          icon: 'onion'
        },
        {
          // ingredient position 4
          amount: '1 1/2',
          measurement: 'cups',
          ingredient: 'Cheddar Cheese, shredded',
          icon: 'cheese'
        },
        {
          // ingredient position 5
          amount: '1/4',
          measurement: 'tsp',
          ingredient: 'Ground Pepper',
          icon: 'pepper-2'
        },
        {
          // ingredient position 6
          amount: '1 1/3',
          measurement: 'cups',
          ingredient: 'Corn Flakes, crushed',
          icon: 'cereals'
        },
        {
          // ingredient position 7
          amount: '2',
          measurement: 'Tbsp',
          ingredient: 'Butter, melted',
          icon: 'butter'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'oven',
          direction: 'Preheat oven to 350 F',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Cook 6 large Potatoes in salted water until tender',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['6'],
          clicked: false
        },
        {
          icon: 'knife',
          direction: 'Shred Potatoes or cut into small chunks',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Pour Potatoes into large bowl',
          ingredientPosition: [0], // match ingredient position above for each ingredient
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Combine with 1 cup Sour Cream, 1 can of Cream of Chicken Soup, 1/2 cup green Onions, 1 1/2 cup shredded Cheddar Cheese, 1/4 tsp Ground Pepper',
          ingredientPosition: [2, 1, 3, 4, 5 ], // match ingredient position above
          ingredientAmount: ['1', '1', '1/2', '1 1/2', '1/4'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Smooth out the top and spread 1 1/3 cups Corn Flakes',
          ingredientPosition: [6], // match ingredient position above
          ingredientAmount: ['1 1/3'],
          clicked: false
        },
        {
          icon: 'butter-knife',
          direction: 'Pour 2 Tbsp melted butter across the top',
          ingredientPosition: [7], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'oven',
          direction: 'Bake at 350 F for 40 minutes, covering with tin foil and take off during last 10 min',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'If desired, potatoes can be replaced with 1 bag of shredded hash browns, thawed.',
      nutritionalInfo: {
        servingSize: '1 cup',
        calories: '325',
        protien: '10.7 g',
        carbs: '29.2 g',
        fat: '19.6 g',
        sugar: '2 g',
        sodium: '396.3 mg',
        fiber: '2 g'
      }
    },
    // end recipe 8 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
    // begin recipe 9 --------------------
    {
      id: 9,
      mealTime: 'dessert',
      title: 'French Beignets ',
      image: 'assets/recipeImages/9.jpg', // change to match id and image format also rename image to match
      ingredients: [
        // if you can't find an icon use 'none'
        {
          // ingredient position 0
          amount: '2 1/4',
          measurement: 'tsp',
          ingredient: 'active Dry Yeast',
          icon: 'none'
        },
        {
          // ingredient position 1
          amount: '3/4',
          measurement: 'cup',
          ingredient: 'Milk, warmed',
          icon: 'milk'
        },
        {
          // ingredient position 2
          amount: '1',
          measurement: 'whole',
          ingredient: 'Egg',
          icon: 'eggs'
        },
        {
          // ingredient position 3
          amount: '1',
          measurement: '',
          ingredient: 'Egg yolk',
          icon: 'egg'
        },
        {
          // ingredient position 4
          amount: '3/4',
          measurement: 'cups',
          ingredient: 'Sugar',
          icon: 'none'
        },
        {
          // ingredient position 5
          amount: '2',
          measurement: 'Tbsp',
          ingredient: 'unsalted Butter, softened',
          icon: 'butter'
        },
        {
          // ingredient position 6
          amount: '1 1/2',
          measurement: 'tsp',
          ingredient: 'Vanilla Extract',
          icon: 'none'
        },
        {
          // ingredient position 7
          amount: '1/2',
          measurement: 'tsp',
          ingredient: 'Kosher Salt',
          icon: 'salt'
        },
        {
          // ingredient position 8
          amount: '3',
          measurement: 'cups',
          ingredient: 'Flour',
          icon: 'flour'
        },
        {
          // ingredient position 9
          amount: '2',
          measurement: 'cups',
          ingredient: 'Canola Oil',
          icon: 'oil'
        },
        {
          // ingredient position 10
          amount: '2',
          measurement: 'Tbsp',
          ingredient: 'Powdered Sugar',
          icon: 'none'
        }
      ],
      directions: [
        // if no ingredient is to be changed mark ingredientPostion 0 and ingredientAmount 0
        // must always use an icon
        {
          icon: 'stove',
          direction: 'Add 2 1/4 tsp active dry yeast and 3/4 cup warm milk into small bowl, stir, and let rest for 10 min',
          ingredientPosition: [0, 1], // match ingredient position above for each ingredient
          ingredientAmount: ['2 1/4', '3/4'],
          clicked: false
        },
        {
          icon: 'pot',
          direction: 'Mix 2 Tbsp butter and 3/4 cup sugar for 2 min, until fluffy',
          ingredientPosition: [4, 5], // match ingredient position above for each ingredient
          ingredientAmount: ['3/4', '2'],
          clicked: false
        },
        {
          icon: 'stove',
          direction: 'Add yeast mixture, 1 whole egg, 1 egg yolk, 1/2 tsp kosher salt, and 1 1/2 tsp vanilla extract, and mix',
          ingredientPosition: [2, 3, 7, 6], // match ingredient position above for each ingredient
          ingredientAmount: ['1', '1', '1/2', '1 1/2' ],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Slowly add 3 cups flour and mix until it reaches a dough consistency',
          ingredientPosition: [8], // match ingredient position above
          ingredientAmount: ['3'],
          clicked: false
        },
        {
          icon: 'salt',
          direction: 'Shape dough into 1 round ball, place in greased bowl, cover with plastic wrap, let rise for 1 hour',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'spoon',
          direction: 'Place dough on floured surface, and roll it out to 1/4 in thick dough',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'chef',
          direction: 'Cut our 3 in round pieces of dough, place on baking sheet with parchment paper, cover with plastic wrap, let rest for 30 min ',
          ingredientPosition: [0], // match ingredient position above
          ingredientAmount: ['0'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Heat oil in skillet until a scrap of dough dropped in pan immediately starts to bubble',
          ingredientPosition: [9], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'Add dough 2-3 rounds at a time, fry each side until golden brown',
          ingredientPosition: [9], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        },
        {
          icon: 'apron',
          direction: 'When rounds are warm and no longer hot, dust with powdered sugar if desired',
          ingredientPosition: [10], // match ingredient position above
          ingredientAmount: ['2'],
          clicked: false
        }
      ],
      // additional notes will only allow one paragraph, if there are no notes leave blank ( '' )
      additionalNotes: 'It takes a total of 1 1/2 hr for the dough to rise, so make sure you have enough time to prepare it.',
      nutritionalInfo: {
        servingSize: '1 round',
        calories: '98',
        protien: '1.5 g',
        carbs: '15.6 g',
        fat: '5.6 g',
        sugar: '13.5 g',
        sodium: '156.2 mg',
        fiber: '0.1 g'
      }
    }
    // end recipe 9 -------------------- (to start a new recipe add a comma above (  },  ) and start below this line)
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
