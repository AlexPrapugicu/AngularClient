import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
    ) {}


  storeRecipe(index: number) {
    const recipe = this.recipeService.getRecipe(index);
    return this.http.post('http://localhost:8080/api/recipes/create', recipe)
      .subscribe(response => {
        console.log(response);
      });
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    const resp = JSON.parse(JSON.stringify(recipes));
    return this.http
      .post(
        'http://localhost:8080/api/recipes/create',
        resp
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'http://localhost:8080/api/recipes'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
