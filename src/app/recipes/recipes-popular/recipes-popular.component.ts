import {Component, OnInit} from '@angular/core';

export interface Tile {
  imagePath: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-recipes-popular',
  templateUrl: './recipes-popular.component.html',
  styleUrls: ['./recipes-popular.component.css']
})
export class RecipesPopularComponent implements OnInit {

  constructor() {
  }

  tiles: Tile[] = [
    // tslint:disable:max-line-length
    {text: 'One', cols: 2, rows: 3, color: 'lightblue', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Two', cols: 2, rows: 3, color: 'lightgreen', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Five', cols: 2, rows: 2, color: 'lightblue', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Six', cols: 2, rows: 2, color: 'lightpink', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Seven', cols: 1, rows: 2, color: 'lightblue', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
    {text: 'Eight', cols: 1, rows: 2, color: '#DDBDF1', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg'},
  ];

  ngOnInit(): void {
  }

}
