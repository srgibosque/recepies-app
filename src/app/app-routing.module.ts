import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepiesComponent } from './components/recepies/recepies.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './components/recepies/recipe-start/recipe-start.component';
import { RecepieDetailComponent } from './components/recepies/recepie-detail/recepie-detail.component';
import { RecipeEditComponent } from './components/recepies/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepiesComponent, children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecepieDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
