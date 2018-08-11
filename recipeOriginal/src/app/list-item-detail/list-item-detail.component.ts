import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css']
})
export class ListItemDetailComponent implements OnInit {

  recipe: Recipe;
  iconClicked = '';

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params.recipe);
    });
  }

  onNewAmount(i) {
    const ingredientPosition = this.recipe.directions[i].ingredientPosition;
    const directionsAmount = this.amountToNumber(this.recipe.directions[i].ingredientAmount);
    const clicked = this.recipe.directions[i].clicked;

    if (!clicked) {
      let ingredientsAmount = this.amountToNumber(this.recipe.ingredients[ingredientPosition].amount);
      ingredientsAmount -= directionsAmount;
      this.recipe.ingredients[ingredientPosition].amount = this.amountToString(ingredientsAmount);
      this.recipe.directions[i].clicked = true;
      this.recipe.directions[i].icon += '-2';
    } else {
      let ingredientsAmount = this.amountToNumber(this.recipe.ingredients[ingredientPosition].amount);
      ingredientsAmount += directionsAmount;
      this.recipe.ingredients[ingredientPosition].amount = this.amountToString(ingredientsAmount);
      this.recipe.directions[i].clicked = false;
      this.recipe.directions[i].icon = this.recipe.directions[i].icon.replace('-2', '');
    }
  }

  amountToNumber(amount) {
    if (amount.indexOf(' ') !== -1) {
      const split = amount.split(' ', 2);
      const wholeNumber = +split[0];
      const splitFraction = split[1].split('/', 2);
      const finishedNumber = wholeNumber + ((+splitFraction[0]) / (+splitFraction[1]));
      return finishedNumber;
    } else if (amount.indexOf('/') !== -1) {
      const splitFraction = amount.split('/', 2);
      const finishedNumber = (+splitFraction[0]) / (+splitFraction[1]);
      return finishedNumber;
    } else {
      return +amount;
    }
  }

  amountToString(amount) {
    amount = amount.toString();
    if (amount.indexOf('.') !== -1) {
      const splitDecimal = amount.split('.', 2);
      const decimalToSend = +('0.' + splitDecimal[1]);
      if (splitDecimal[0] !== '0') {
        return splitDecimal[0] + ' ' + this.fractionalConversion(decimalToSend);
      } else {
        return this.fractionalConversion(decimalToSend);
      }
    } else {
      return amount.toString();
    }
  }

  fractionalConversion(decimalAmount) {
    const fraction = decimalAmount;
    const len = fraction.toString().length - 2;

    let denominator = Math.pow(10, len);
    let numerator = fraction * denominator;

    const divisor = this.gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    return Math.floor(numerator) + '/' + Math.floor(denominator);
  }

  gcd(a, b) {
    if (b < 0.0000001) {
      return a;
    }
    return this.gcd(b, Math.floor(a % b));
  }

}
