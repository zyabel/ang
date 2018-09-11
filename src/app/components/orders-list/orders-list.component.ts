import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: Order[];

  constructor(
    public orderService: OrderService,
  ) { }

  ngOnInit() {
    // Get all orders
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

}
