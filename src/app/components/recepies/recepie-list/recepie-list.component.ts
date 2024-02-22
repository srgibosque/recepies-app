import { Component, OnInit } from '@angular/core';

import { Recepie } from '../../../models/recepie.model';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css'
})
export class RecepieListComponent implements OnInit {
  public recipes: Recepie[] = [];

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
