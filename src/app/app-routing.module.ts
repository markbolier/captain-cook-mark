import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlannerComponent } from './planner/planner/planner.component';
import { RecipesComponent } from './recipes/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: PlannerComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
