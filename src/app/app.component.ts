import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loadedMenu: String = 'recipes';

  onMenuSelect(menuName: string) {
    this.loadedMenu = menuName;
  }
}
