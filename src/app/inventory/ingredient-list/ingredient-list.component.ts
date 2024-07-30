import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../interfaces/Ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.css'
})
export class IngredientListComponent implements OnInit{
  @Input() ingredients : Ingredient[] = [];

  ngOnInit(): void {

  }

}
