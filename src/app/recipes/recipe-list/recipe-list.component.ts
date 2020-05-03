import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Omg', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Hey there cutie', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Marvelous', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
