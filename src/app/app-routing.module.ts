import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepiesComponent } from './components/recepies/recepies.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepiesComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
