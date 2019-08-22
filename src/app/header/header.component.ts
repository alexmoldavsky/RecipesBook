import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuSelected = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onMenuSelect(menuName: string) {
    this.menuSelected.emit(menuName);
  }

}
