import { Component } from '@angular/core';

import { Recepie } from '../../models/recepie.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent {
  public selectedRecipe!: Recepie;

  constructor(private recipeService: RecipeService){}


}
