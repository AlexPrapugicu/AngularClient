import {Component, OnInit} from '@angular/core';

export interface Tile {
  imagePath: string;
  cols: number;
  rows: number;
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
    {cols: 2, rows: 3, imagePath: 'https://i.insider.com/5c0192d1de34c43da26049d4?width=1100&format=jpeg&auto=webp'},
    {cols: 2, rows: 3, imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg'},
    {cols: 1, rows: 2, imagePath: 'https://images.food52.com/ReS3McDmd1aOHDJJdpWjABFvixw=/1200x1200/d4a10002-0bd0-441a-a0fd-9e2143748e0b--2019-0405_caramelized-cream-eggs-genius-recipes_3x2_ty-mecham_001.jpg'},
    {cols: 1, rows: 2, imagePath: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fmrtrending0475.jpg%3Fitok%3DULkGk3Pn%261521838046'},
    {cols: 2, rows: 2, imagePath: 'https://thumbor.thedailymeal.com/9InmzAX6KKgpaTAX-7TsXOBNCX8=//https://www.thedailymeal.com/sites/default/files/2019/05/03/0.jpg'},
    {cols: 2, rows: 2, imagePath: 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg'},
    {cols: 1, rows: 2, imagePath: 'https://gimmedelicious.com/wp-content/uploads/2019/02/Creamy-Broccoli-Keto-3.jpg'},
    {cols: 1, rows: 2, imagePath: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1333&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2011%2F01%2F07%2FGettyImages-1053445748-1.jpg'},
  ];

  ngOnInit(): void {
  }

}
