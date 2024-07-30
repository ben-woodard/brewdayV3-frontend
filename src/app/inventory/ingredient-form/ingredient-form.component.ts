import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/Ingredient';
import { OverlayServiceService } from '../../services/overlay-service.service';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent implements OnInit{
  ingredientForm: FormGroup = new FormGroup({});
  @Input() ingredient : Ingredient | null =  null;
  @Input() formVisible : Boolean = false;

  constructor(
    private fb: FormBuilder,
    private overlayService : OverlayServiceService
  ) {}

  ngOnInit(): void {

    this.ingredientForm = this.fb.group({
      ingredientName: ['', [Validators.required, Validators.minLength(1)]],
      amountInStock: [0],
      orderingThreshold: [0],
      // ingredientType: ['', Validators.required],
      // unitOfMeasurement: ['', Validators.required]
    })

    this.overlayService.overlayVisibility$.subscribe(isVisible => {
      this.formVisible = isVisible;
    });
  }

  onSubmit() {

  }

  closeOverlay() {
    this.formVisible = false;
  }

}
