import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task;

  constructor(
    public server: JsonplaceholderService,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get all tasks
     this.server.getTasks().subscribe( data => {
       if (data) {
         this.tasks = data;
       }
     }, error => {
       console.log(error);
     });

     // Subscribe on new task event
     this.server.newTask.subscribe((data: Task) => {
      if (data['body']) {
        const newTask = Object.assign( {},  data['body'], { id: data.id } );
        this.tasks.unshift(newTask);
        this.server.updateCount(this.tasks.length);
      }
     });

      // Subscribe on update task
      this.server.updatingTask.subscribe((task: Task) => {
        if (task['body']) {
          this.tasks = this.tasks.map(item => {
            if (item.id === task.id) {
              item.title = task['body'].title;
            }

            return item;
          });
        }
      });
  }

  indentify(index) {
    return index;
  }

  deleteTask(id) {
    this.server.deleteTask(id).subscribe( data => {
      this.tasks = this.tasks.filter( task => task.id !== id );

      // Update count task
      this.server.updateCount(this.tasks.length);

      // Shoe message
      this.flashMessage.show('Delete success', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    }, error => {
        this.flashMessage.show(error.message, {
        cssClass: 'alert-danger',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    });
  }

  editTask(task: Task) {
    this.server.emitEditTask(task);
  }
}
