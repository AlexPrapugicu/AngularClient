import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }


  storeRecipe(index: number) {
    const recipe = this.recipeService.getRecipe(index);
    this.http.post('http://localhost:8080/api/recipes/create', recipe)
      .subscribe(response => {
        console.log(response);
      });
    console.log(recipe);
    console.log(JSON.stringify(recipe));
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.post('http://localhost:8080/api/recipes/create', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('http://localhost:8080/api/recipes')
      .pipe(map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        }));
  }
}
