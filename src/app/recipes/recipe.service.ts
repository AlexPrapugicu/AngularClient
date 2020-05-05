import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Firstone',
      'I am tasty',
      'https://material.angular.io/assets/img/examples/shiba1.jpg',
      [
        new Ingredient('Chocolate', 2),
        new Ingredient('Cream', 2),
      ]),
    new Recipe(
      'Blackberries',
      'I am tasty',
      'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Fries', 2),
      ]),
    new Recipe(
      'IceCream',
      'I am tasty',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg',
      [
        new Ingredient('Tomatoes', 2),
        new Ingredient('Potato', 2),
      ]),
    new Recipe(
      'Mr Paw',
      'I am tasty',
      'https://www.washingtonpost.com/resizer/uwlkeOwC_3JqSUXeH8ZP81cHx3I=/arc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg',
      [
        new Ingredient('Carrot', 2),
        new Ingredient('Egg', 2),
      ]),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
