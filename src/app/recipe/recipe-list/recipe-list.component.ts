import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

	@Output() onItemSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [];

	constructor() {
		let rec: Recipe = new Recipe();
		rec.name = 'Shrimp';
		rec.descr = 'Garlic shrimp';
		rec.imgPath = 'https://shewearsmanyhats.com/wp-content/uploads/2015/10/garlic-shrimp-recipe-1b-480x270.jpg';
		rec.ingridients = ['Garlic', 'Shrimp', 'Spices'];
		this.recipes.push(rec);

		rec = new Recipe();
		rec.name = 'Chicken';
		rec.descr = 'Tangy Skillet Chicken';
		rec.imgPath = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/tangy_skillet_chicken_recipe/650x350_tangy_skillet_chicken_recipe.jpg';
		this.recipes.push(rec);

		rec = new Recipe();
		rec.name = 'Turkey';
		rec.descr = 'Turkey meatballs';
		rec.imgPath = 'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg';
		this.recipes.push(rec);

		
	}


	ngOnInit() {
		/* if (this.recipes.length > 0) {
			this.onItemSelected.emit(this.recipes[0]);
		} */
	}

	onItemClick(clickedItem: Recipe) {
		this.onItemSelected.emit(clickedItem);
	}

	

}
