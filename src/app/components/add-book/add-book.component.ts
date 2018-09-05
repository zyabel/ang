import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  newBook: Book[];

  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addBook(name, description, author, link1, link2) {
    console.log(name, description, author, link1, link2);
    if (name && description && author) {
      this.router.navigate(['/panel']);
    }
  }

}
