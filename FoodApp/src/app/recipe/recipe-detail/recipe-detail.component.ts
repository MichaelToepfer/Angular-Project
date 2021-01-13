import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [
  ]
})
export class RecipeDetailComponent implements OnInit {

   selectedRecipe!: Recipe;


  constructor(private recipeService: RecipeService, private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

}
