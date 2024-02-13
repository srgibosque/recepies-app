import { EventEmitter, Injectable } from '@angular/core';

import { Ingridient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanges = new EventEmitter<Ingridient[]>();

  private ingredients: Ingridient[] = [
    new Ingridient('Apple', 5),
    new Ingridient('Tomato', 3),
    new Ingridient('Banana', 2),
  ];
  
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingridient){
    this.ingredients.push(ingredient);
    this.ingredientsChanges.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingridient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.emit(this.ingredients.slice());
  }
}
