import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class Header {
  links: Array<T> = [
    {
      name: 'link'
    },
    {
      name: 'link'
    },
    {
      name: 'link'
    },
  ];

  constructor() {
    console.log(this.links);
  }
}
