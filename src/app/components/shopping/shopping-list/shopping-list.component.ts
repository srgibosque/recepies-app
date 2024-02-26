import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingridient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingridient[];
  private igChanged!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChanged= this.shoppingListService.ingredientsChanges
      .subscribe((ingredients: Ingridient[]) => {
        this.ingredients = ingredients;
      })
 }

 onEditItem(index: number){
  this.shoppingListService.startedEditing.next(index);
 }

 ngOnDestroy(): void {
     this.igChanged.unsubscribe();
 }

}
