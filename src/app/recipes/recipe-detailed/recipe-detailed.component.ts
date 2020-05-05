import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detailed',
  templateUrl: './recipe-detailed.component.html',
  styleUrls: ['./recipe-detailed.component.css']
})
export class RecipeDetailedComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Observable
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onShop() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
