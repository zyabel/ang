import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { IdService } from '../../services/id.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  newId: string;
  newBook: Book;

  constructor(
    public bookServices: BooksService,
    public idService: IdService,
    public router: Router
  ) { }

  ngOnInit() {
    this.newId = this.idService.generate();
  }

  addBook(name: string, description: string, author: string, link1: string, link2: string) {
    this.newBook = {
      id: this.newId,
      name: name,
      description: description,
      author: author,
      link: [
        {
          type: 'epub',
          link: link1
        },
        {
          type: 'pdf',
          link: link2
        }
      ]
    };

    this.bookServices.addBook(this.newBook);

    if (name && description && author !== undefined) {
      this.router.navigate(['/panel']);
    }
  }
}
