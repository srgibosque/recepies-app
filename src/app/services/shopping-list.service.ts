import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingridient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanges = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingridient[] = [
    new Ingridient('Apple', 5),
    new Ingridient('Tomato', 3),
    new Ingridient('Banana', 2),
  ];
  
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingridient{
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingridient){
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingridient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingridient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
