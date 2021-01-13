import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('Dummy', 'Dummy', 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg' );

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
this.recipeSelected.emit(recipe);
  }

}
