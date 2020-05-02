import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
    new Recipe('Firstone', 'I am tasty', 'https://material.angular.io/assets/img/examples/shiba1.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
