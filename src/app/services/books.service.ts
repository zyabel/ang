import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book[]>;
  book: Observable<Book>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.booksCollection = this.afs.collection('books');
  }

  getBooks() {
    this.books  = this.booksCollection.snapshotChanges().map( collection => {
      return collection.map( document => {
        const data = document.payload.doc.data() as Book;
        data.id = document.payload.doc.id;
        return data;
      });
    });

    return this.books;
  }

  addBook(book) {
    this.books.push(book);
  }

  editBook(book) {
    return of(book);
  }

  deleteBook(id: string) {
    this.books = this.books.filter( book => book.id !== id);
    return of(this.books);
  }
}
