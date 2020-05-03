import { Component, OnInit } from '@angular/core';
export interface Tile {
  imagePath: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-recipes-seasonal',
  templateUrl: './recipes-seasonal.component.html',
  styleUrls: ['./recipes-seasonal.component.css']
})
export class RecipesSeasonalComponent implements OnInit {

  constructor() { }
  tiles: Tile[] = [
    // tslint:disable:max-line-length
    {text: 'One', cols: 2, rows: 4, color: 'lightblue', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Two', cols: 2, rows: 4, color: 'lightgreen', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Three', cols: 2, rows: 4, color: 'lightpink', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Four', cols: 2, rows: 4, color: '#DDBDF1', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
  ];
  ngOnInit(): void {
  }

}
