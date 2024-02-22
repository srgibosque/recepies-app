import { Component, EventEmitter, Input } from '@angular/core';
import { Ingridient } from '../../../models/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recepie } from '../../../models/recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrl: './recepie-detail.component.css'
})
export class RecepieDetailComponent {
  recipe!: Recepie;
  id!: number;

 constructor(private recipeService: RecipeService, 
            private route: ActivatedRoute,
            private router: Router){}

 ngOnInit(): void{
  this.route.params
  .subscribe((params: Params) => {
    this.id = +params['id'];
    this.recipe = this.recipeService.getRecipe(this.id);
  })
 }

 onAddToShoppingList(){
  this.recipeService.AddToShoppingList(this.recipe.ingredients);
 }

 onEditRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.route});
 }
}
