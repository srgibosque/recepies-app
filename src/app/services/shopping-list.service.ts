import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingridient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanges = new Subject<Ingridient[]>();

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
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingridient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
