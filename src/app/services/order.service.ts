import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ordersCollection: AngularFirestoreCollection<Order>;
  orderDoc: AngularFirestoreDocument<Order>;
  orders: Observable<Order[]>;
  order: Observable<Order>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.ordersCollection = this.afs.collection('orders');
  }

  addNewOrder(order) {
    return this.ordersCollection.add(order);
  }
}
