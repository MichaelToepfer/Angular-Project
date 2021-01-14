import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    recipeId!: number;

  constructor(private recipeService: RecipeService, private sls: ShoppingListService, private activatedRoute: ActivatedRoute, private router: Router) { }


  onEdit(){
    this.router.navigate([ '/rezepte', this.recipeId, 'bearbeiten']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.recipeId = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']);

      }
    );
  }

  onAddToList(){
    this.sls.addIngredients(this.selectedRecipe.ingredients);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate([ '/rezepte']);
  }

}
