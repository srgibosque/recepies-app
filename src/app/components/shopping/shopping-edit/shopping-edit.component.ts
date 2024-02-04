import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Ingridient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingridient>();

  constructor(){}

  onAddItem(){
    const newIngredient = new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);

    this.ingridientAdded.emit(newIngredient);
  }
}
