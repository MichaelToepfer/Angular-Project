import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [

  new Recipe('Schnitzel', 'Sehr lecker', 'https://www.gutekueche.at/img/rezept/170/wiener-schnitzel.jpg', [new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 10)] ),
  new Recipe('Salad', 'lecker', 'https://www.onceuponachef.com/images/2019/07/Big-Italian-Salad-760x983.jpg', [new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 10)] ),
  ];
  selectedRecipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
this.recipeSelected.emit(recipe);
  }

}
