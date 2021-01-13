import { EventEmitter } from "@angular/core";
import { Ingredient } from "./recipe-list/ingredient.model";
import { Recipe } from "./recipe.model";

// import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [

    new Recipe('Schnitzel', 'Sehr lecker', 'https://www.gutekueche.at/img/rezept/170/wiener-schnitzel.jpg', [new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 10)] ),
    new Recipe('Salad', 'lecker', 'https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-760x983.jpg', [new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 10)] ),
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(){
      return this.recipes;
    }

}
