import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CurrencyService } from '../../services/currency.service';

import { Book } from '../../models/Book';
import { Currency } from '../../models/Currency';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  books: Book[];
  searchText: string;
  searchingResult: Book[] = [];
  currentCurrency: Currency;

  constructor(
    public bookService: BooksService,
    public currencyService: CurrencyService
  ) { }

  ngOnInit() {
    // Get all books
    this.bookService.getBooks().subscribe(books => this.books = books);

    // Subscribe on currency update
    this.currencyService.selectedCurrency.subscribe( data => {
      this.currentCurrency = Object.create(data.find( obj => obj.isActive));
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(books => this.books = books);
  }

  searchBook() {
    this.searchingResult = this.books.filter( book => {
      return book.name.toLocaleLowerCase().indexOf(this.searchText) !== -1;
    });
  }
}
