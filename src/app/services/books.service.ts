import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/operators;
import { IdService } from './id.service';
import { of } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [
    {
      id: '71e9a7bc-fbe8-4384-842f-65a17aed5e0e',
      name: 'Javascript',
      author: 'Marijn Haverbeke',
      description: 'description of book',
      link: [
        {
          type: 'epub',
          link: 'link'
        },
        {
          type: 'pdf',
          link: 'link'
        }
      ]
    },
    {
      id: '71e9a7bc-fbe8-4384-842f-65a17aed5e0d',
      name: 'Angular',
      author: 'Google',
      description: 'description of book',
      link: [
        {
          type: 'epub',
          link: 'link'
        },
        {
          type: 'pdf',
          link: 'link'
        }
      ]
    },
    {
      id: '71e9a7bc-fbe8-4384-842f-65a17aed5e0d',
      name: 'React',
      author: 'Facebook',
      description: 'description of book',
      link: [
        {
          type: 'epub',
          link: 'link'
        },
        {
          type: 'pdf',
          link: 'link'
        }
      ]
    }
  ];

  constructor(
    // private http: HttpClient
  ) { }

  getBooks() {
    return of(this.books);
  }

  getBookById(id: string) {
    const book = this.books.find( book => book.id === id);
    return of(book);
  }

  addBook(book: Book) {

  }

  editBook(book: Book) {
    this.books = this.books.map( item => {
      if (item.id === book.id) {
        item = book;
      }
      return item;
    });
    return of(book);
  }

  deleteBook(id: string) {

  }
}
