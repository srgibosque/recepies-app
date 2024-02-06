import { Component, OnInit } from '@angular/core';

import { Recepie } from '../../../models/recepie.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit {
  public recipes: Recepie[] = [];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

}
