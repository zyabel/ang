import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-checkout',
  templateUrl: './client-checkout.component.html',
  styleUrls: ['./client-checkout.component.css']
})
export class ClientCheckoutComponent implements OnInit {
  checkoutList;
  adressIsVisible = false;
  name = '';
  phone = '';
  email = '';
  totalSum = 0;

  constructor(
    public basketService: BasketService,
    public orderService: OrderService,
    public router: Router
  ) { }

  ngOnInit() {
    // Get all basket items
    this.basketService.getBasketItem().subscribe( items => {
      if (!items.length) {
        this.router.navigate(['/']);
      } else {
        this.checkoutList = items;
        this.totalSum = this.checkoutList.reduce((sum, item) => sum += item.sum, 0);
      }
    });
  }

  onChangeItemCount(item) {
    item.sum = item.price * item.count;
    this.totalSum = this.checkoutList.reduce((sum, item) => sum += item.sum, 0);
  }

  deleteItem(id: string) {
    this.basketService.deleteItem(id);
  }

  onSubmit() {
    const newOrder = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      items: this.checkoutList,
      status: 'processing'
    };

    this.orderService.addNewOrder(newOrder)
      .then(() => {
        this.router.navigate(['/']);
        console.log('order received successfully');
      });
  }

}
