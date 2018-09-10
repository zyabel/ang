import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  purchaseList: Book[] = [];
  private clearSource = new BehaviorSubject(false);
  clearAllItemsEvent = this.clearSource.asObservable();

  private deleteSource = new BehaviorSubject('');
  deleteItemsEvent = this.deleteSource.asObservable();

  constructor() { }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book) {
    this.purchaseList.push(book);
    return of(book);
  }

  deleteItem(id: string) {
    for (let i = 0; i < this.purchaseList.length; i++) {
      if ( this.purchaseList[i].id === id) {
        this.purchaseList.splice(i, 1);
        break;
      }
    }
    // emit all components about deleting a book
    this.deleteSource.next(id);
  }

  cleanBasket() {
    this.purchaseList.splice(0, this.purchaseList.length);
    this.clearSource.next(true);
  }
}
