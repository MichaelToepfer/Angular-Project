import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Ingredient } from '../recipe/recipe-list/ingredient.model';


import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient!: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  onSubmit(form: NgForm) {

    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (!this.isAdd) {
      console.log("edditing");
      // Bearbeiten
      this.sls.editIngredient(this.selectedIngredient, newIngredient);
      this.isAdd = true;
    } else {
      // Neu
      this.sls.addIngredient(newIngredient);
      this.isAdd = true;
      console.log("new");
    }
    this.onClear(form);
  }

  onClear(form: NgForm) {
    this.cleared.emit();
    form.resetForm();
    console.log("clear");
  }

  onDelete(form: NgForm) {
    this.sls.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
    console.log("delete");
  }

  ngOnChanges(changes: any) {
    if (changes.selectedIngredient.currentValue == null) {
      console.log("change 1");
      this.selectedIngredient = {name: null, amount: null};
      this.isAdd = true;
    } else {
      console.log("change 2");
      this.isAdd = false;

    }
  }

  ngOnInit() {
  }

}
