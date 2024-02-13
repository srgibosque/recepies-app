import { Component, EventEmitter, Input } from '@angular/core';
import { Recepie } from '../../../models/recepie.model';
import { Ingridient } from '../../../models/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrl: './recepie-detail.component.css'
})
export class RecepieDetailComponent {
 @Input() recipe!: Recepie;

 constructor(private recipeService: RecipeService){}

 onAddToShoppingList(){
  this.recipeService.AddToShoppingList(this.recipe.ingredients);
 }
}
