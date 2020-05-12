import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';

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
    this.http.get('http://localhost:8080/api/recipes')
      .subscribe(recipes => {
        console.log(recipes);
      });
  }
}
