import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  todoLength: number;
  lastMessage: string;

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
    // Subscribe on update task length
    this.server.taskCount.subscribe( length => this.todoLength = length);
    // Subscribe on add new task
    this.server.newTask.subscribe( data => {
      if(data['body']) {
        this.lastMessage = data['body'].title;
      }
    });
  }

}
