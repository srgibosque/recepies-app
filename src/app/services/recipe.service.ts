import { EventEmitter, Injectable } from '@angular/core';

import { Recepie } from '../models/recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor() { }

  recipeSelected = new EventEmitter<Recepie>();

  private recipes: Recepie[] = [
    new Recepie('Recepie 1', 'This is the description', '../../../../assets/img/defaultImg.jpg'),
    new Recepie('Recepie 2', 'This is the description', '../../../../assets/img/defaultImg.jpg'),
    new Recepie('Recepie 3', 'This is the description', '../../../../assets/img/defaultImg.jpg'),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
