import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../interfaces/Ingredient';
import { InventoryServiceService } from '../../services/inventory-service.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  @Output() selectedIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() deleteIngred: EventEmitter<number> = new EventEmitter<number>();
  ingredientToEmit: Ingredient | null = null;
  errorDeleting: boolean = false;

  constructor(
    private inventoryService: InventoryServiceService,
  ) { }

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

  deleteIngredient(ingredientId: number | null) {
    this.errorDeleting = false;
    if (ingredientId) {
      this.deleteIngred.emit(ingredientId)
    } else {
      this.errorDeleting = true;
      console.log("There was an error trying to delete the ingredient")
    }

  }


}
