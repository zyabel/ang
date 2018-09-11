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

  getOrders() {
    return this.orders = this.ordersCollection.snapshotChanges().map( collection => {
      return collection.map(document => {
        const data = document.payload.doc.data() as Order;
        data.id = document.payload.doc.id;

        return data;
      });
    });
  }

  addNewOrder(order) {
    return this.ordersCollection.add(order);
  }
}
