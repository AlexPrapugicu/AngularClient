import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailedComponent} from './recipes/recipe-detailed/recipe-detailed.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {HomeComponent} from './home/home.component';
import {RecipesSeasonalComponent} from './recipes/recipes-seasonal/recipes-seasonal.component';
import {RecipesResolverService} from './recipes/recipes-resolver.service';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipesSeasonalComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailedComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth' , component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
