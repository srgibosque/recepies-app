import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingridient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService){}

  onAddItem(){
    const newIngredient = new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);

    this.shoppingListService.addIngredient(newIngredient);
  }
}
