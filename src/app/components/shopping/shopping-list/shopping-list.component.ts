import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingridient[] = [];

  constructor() {}


 ngOnInit(): void {
     this.ingredients = [
      new Ingridient('Apple', 5),
      new Ingridient('Tomato', 3),
      new Ingridient('Banana', 2),
     ];
 }
}
