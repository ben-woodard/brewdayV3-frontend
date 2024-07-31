import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../interfaces/Ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  @Output() selectedIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  ingredientToEmit: Ingredient | null = null;

  ngOnInit(): void {

  }

  setSelectedIngredient(ingredientId: number | null) {
    if (ingredientId) {
      const index = this.ingredients.findIndex(ingredient => ingredient.ingredientId === ingredientId);
      if (index) {
        this.ingredientToEmit = this.ingredients[index]
        console.log(this.ingredientToEmit.ingredientName)
        this.selectedIngredient.emit(this.ingredientToEmit)
      }
    } else {
      console.log("There is no ingredient being passed to update")
    }
  }


}
