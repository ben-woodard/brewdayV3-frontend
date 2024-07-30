import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/Ingredient';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent implements OnInit{
  ingredientForm: FormGroup = new FormGroup({});
  @Input() ingredient : Ingredient | null =  null;
  formVisible : Boolean = false;

  constructor(
    private fb: FormBuilder,
  ) {}
  
  ngOnInit(): void {

    this.ingredientForm = this.fb.group({
      ingredientName: ['', [Validators.required, Validators.minLength(1)]],
      amountInStock: [0, Validators.required],
      orderingThreshold: [0, Validators.required],
      ingredientType: ['', Validators.required],
      unitOfMeasurement: ['', Validators.required]
    })
  }

}
