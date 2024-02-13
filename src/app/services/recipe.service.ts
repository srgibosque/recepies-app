import { EventEmitter, Injectable } from '@angular/core';

import { Recepie } from '../models/recepie.model';
import { Ingridient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private shoppingListService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recepie>();
  // toShoppingList = new EventEmitter<Ingridient[]>();

  private recipes: Recepie[] = [
    new Recepie('Recepie 1', 
      'This is the description', 
      '../../../../assets/img/defaultImg.jpg',
      [new Ingridient('Meat', 1), new Ingridient('Salt', 2)]),
    new Recepie('Recepie 2', 
      'This is the description', 
      '../../../../assets/img/defaultImg.jpg',
      [new Ingridient('Sugar', 1), new Ingridient('Banana', 2)]),
    new Recepie('Recepie 3', 
      'This is the description', 
      '../../../../assets/img/defaultImg.jpg',
      [new Ingridient('Tea', 3), new Ingridient('Cofee', 2)]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  AddToShoppingList(ingredients: Ingridient[]){
    this.shoppingListService.addIngredients(ingredients);
   }
}
