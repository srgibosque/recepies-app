import { Component, Input } from '@angular/core';

import { Recepie } from '../../../../models/recepie.model';
import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrl: './recepie-item.component.css'
})
export class RecepieItemComponent {
  @Input() recipe!: Recepie;

  constructor(private recipeService: RecipeService){}
  
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
