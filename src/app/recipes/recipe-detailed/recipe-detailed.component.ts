import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detailed',
  templateUrl: './recipe-detailed.component.html',
  styleUrls: ['./recipe-detailed.component.css']
})
export class RecipeDetailedComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onShop() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
