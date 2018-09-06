import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../models/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookId: string;
  book: Book;

  constructor(
    public bookServices: BooksService,
    public activateRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.bookId = this.activateRoute.snapshot.params['id'];
    this.bookServices.getBookById(this.bookId).subscribe((book: Book) => {
      this.book = book;
    });
  }

  editBook() {
    const updateBook = Object.assign( {}, this.book);
    this.bookServices.editBook(updateBook).subscribe((book: Book) => {
      console.log('edit', book, updateBook);
      if (book) {
        this.router.navigate(['/panel']);
      }
    });
  }
}
