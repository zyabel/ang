import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems = [];

  constructor(
    public basketService: BasketService
  ) { }

  ngOnInit() {
    // Get all basket items
    this.basketService.getBasketItem().subscribe( items => {
      this.basketItems = items;
    });
  }

  clearBasket() {
    this.basketService.cleanBasket();
  }

  deleteBadketItem(id) {
    this.basketService.deleteItem(id);
  }

}
