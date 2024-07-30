import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../../interfaces/Ingredient';
import { OverlayServiceService } from '../../services/overlay-service.service';
import { InventoryServiceService } from '../../services/inventory-service.service';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/User';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent implements OnInit{
  user : User | null = null;
  ingredientForm: FormGroup = new FormGroup({});
  formVisible : Boolean = false;
  @Input() ingredient : Ingredient | null =  null;


  constructor(
    private fb: FormBuilder,
    private overlayService : OverlayServiceService,
    private inventoryService: InventoryServiceService,
    private userService : UserServiceService
  ) {}

  ngOnInit(): void {

    this.userService.userObservable.subscribe(user => this.user = user);

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
    const formValues = this.ingredientForm.value;

    const ingredientDto = {
      ingredientId: 0,
      ingredientName: formValues.ingredientName,
      amountInStock: formValues.amountInStock,
      orderingThreshold: formValues.orderingThreshold,
      ingredientType: "MALT",
      unitOfMeasurement: "lBS"
    }

    this.inventoryService.createIngredient(this.user?.id, ingredientDto).subscribe(
      response => {
        console.log(response)
        this.formVisible = false;
      },
      error => {
        console.log(error)
      }
    )

  }

  closeOverlay() {
    this.formVisible = false;
  }

}

