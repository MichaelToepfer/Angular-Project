import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [
  ],

})
export class RecipeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
