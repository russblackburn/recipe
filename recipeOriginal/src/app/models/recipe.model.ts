import { Ingredients } from './ingredients.model';
import { Directions } from './directions.model';
import { NutritionalInfo } from './nutritional-info.model';

export class Recipe {
  constructor(
    public id: number,
    public mealTime: string,
    public title: string,
    public image: string,
    public ingredients: Ingredients[],
    public directions: Directions[],
    public nutritionalInfo: NutritionalInfo
  ) {}
}
