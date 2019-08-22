import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [];

	constructor() {
		let rec: Recipe = new Recipe();
		rec.name = 'Shrimp';
		rec.descr = 'Garlic shrimp';
		rec.imgPath = 'https://shewearsmanyhats.com/wp-content/uploads/2015/10/garlic-shrimp-recipe-1b-480x270.jpg';
		this.recipes.push(rec);

		rec = new Recipe();
		rec.name = 'Shrimp';
		rec.descr = 'Garlic shrimp';
		rec.imgPath = 'https://shewearsmanyhats.com/wp-content/uploads/2015/10/garlic-shrimp-recipe-1b-480x270.jpg';
		this.recipes.push(rec);
	}


	ngOnInit() {
	}

}
