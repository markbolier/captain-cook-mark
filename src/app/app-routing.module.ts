import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannerComponent } from './planner/planner/planner.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  {path: '', component: PlannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
