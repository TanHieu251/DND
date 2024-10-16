import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c-cart',
  templateUrl: './c-cart.component.html',
  styleUrl: './c-cart.component.scss'
})
export class CCartComponent {
  
  @Input() item: any;
  @Output() itemRemoved = new EventEmitter<any>();

  increaseQuantity() {
    this.item.quantity += 1;
  }

  decreaseQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity -= 1;
    }
  }

  removeItem() {
    this.itemRemoved.emit(this.item);
  }
}
