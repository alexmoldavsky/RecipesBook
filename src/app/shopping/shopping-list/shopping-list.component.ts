import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../../shared/ingridient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

    ingridients: Ingridient[] = [
        new Ingridient('shrinks', 200),
        new Ingridient('garlic sauce', 1000)
    ];

    constructor() { }

    ngOnInit() {
    }

}
