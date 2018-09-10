import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { BasketService } from '../../services/basket.service';

import { Book } from '../../models/Book';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  books: Book[] = [];
  basketItems = [];

  constructor(
    public bookService: BooksService,
    public basketService: BasketService
  ) { }

  ngOnInit() {
    // Get basket items
    this.basketService.getBasketItem().subscribe( items => {
      if (items.length) {
        this.basketItems = items;
      }
    });
    // Get all books
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      // checking basket for an existing elements
      if (this.basketItems.length) {
        this.basketItems.forEach( item => {
          this.books.forEach( book => {
            if (book.id === item.id) {
              book.isAddBasket = true;
            }
          });
        });
      }
    });
    // Subscribe on clear
    this.basketService.clearAllItemsEvent.subscribe( status => {
      if (status) {
        this.books.forEach(book => {
          book.isAddBasket = false;
        });
      }
    });
     // Subscribe on delete a book from basket
    this.basketService.deleteItemsEvent.subscribe( id => {
      if (id) {
        this.books.forEach(book => {
          if (book.id === id) {
            book.isAddBasket = false;
          }
        });
      }
    });
  }

  // Add book
  addBook(book) {
    const newBasketItem = {
      id: book.id,
      price: book.price,
      name: book.name,
      sum: book.price,
      count: 1
    };

    this.basketService.addItem(newBasketItem).subscribe( () => {
      // show message
      console.log('book added', book);
    });
  }


  deleteFromBasket(id) {
    this.basketService.deleteItem(id);
  }

}
