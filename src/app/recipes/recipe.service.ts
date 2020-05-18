import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // Kept as dummy if something goes wrong with the server/database this works fine for backup
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Firstone',
  //     'I am tasty',
  //     'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
  //     [
  //       new Ingredient('Chocolate', 2),
  //       new Ingredient('Cream', 2),
  //     ]),
  //   new Recipe(
  //     'Blackberries',
  //     'I am tasty',
  //     'https://www.gimmesomeoven.com/wp-content/uploads/2014/10/The-Best-Chicken-Enchiladas-Recipe-1-1.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Fries', 2),
  //     ]),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
