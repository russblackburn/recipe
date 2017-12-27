import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css']
})
export class ListItemDetailComponent implements OnInit {

  recipe: {};

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params.recipe);
    });
  }

  onNewAmount(i) {
    const ingredientPosition = this.recipe.directions[i].ingredientPosition;
    const ingredientAmount = this.recipe.directions[i].ingredientAmount;
    const clicked = this.recipe.directions[i].clicked;

    if (!clicked) {
      this.recipe.ingredients[ingredientPosition].amount = this.recipe.ingredients[ingredientPosition].amount - ingredientAmount;
      this.recipe.directions[i].clicked = true;
    } else {
      this.recipe.ingredients[ingredientPosition].amount = this.recipe.ingredients[ingredientPosition].amount + ingredientAmount;
      this.recipe.directions[i].clicked = false;
    }
  }

}
