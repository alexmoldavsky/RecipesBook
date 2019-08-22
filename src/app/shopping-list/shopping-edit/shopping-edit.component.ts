import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingridient } from './../../shared/ingridient.model'; 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) ingridientNameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) ingridientAmountRef: ElementRef;
  @Output() onIngridientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.onIngridientAdded.emit(new Ingridient(this.ingridientNameRef.nativeElement.value, 
                                                this.ingridientAmountRef.nativeElement.value));
  }

}
