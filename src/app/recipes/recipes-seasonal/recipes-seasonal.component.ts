import { Component, OnInit } from '@angular/core';
export interface Tile {
  imagePath: string;
  cols: number;
  rows: number;
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
    {cols: 2, rows: 2, imagePath: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2F1502826406%2F1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg'},
    {cols: 2, rows: 2, imagePath: 'https://cnet3.cbsistatic.com/img/ujFJ0vEG10769JpjL5-zJOtUZiU=/940x0/2019/05/15/6b4688f3-f779-4b21-9b9e-1e27a04d637c/omaha-steaks.jpg'},
    {cols: 2, rows: 2, imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-pasta-1581024990.jpg'},
    {cols: 2, rows: 2, imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/different-types-of-dairy-products-royalty-free-image-1568741374.jpg'},
  ];
  ngOnInit(): void {
  }

}
