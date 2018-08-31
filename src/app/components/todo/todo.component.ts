import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  todo: Todo = {
    id: '',
    title: '',
    text: '',
    complete: false
  };

  @ViewChild('form') form;

  constructor() { }
    
  ngOnInit() {
    // Get todos
    this.todos = [
      {
        id: '1',
        title: 'Task 1',
        text: 'Task text',
        complete: false
      },
      {
        id: '2',
        title: 'Task 2',
        text: 'Task text 2',
        complete: true
      }
      ,
      {
        id: '3',
        title: 'Task 3',
        text: 'Task text 3',
        complete: true
      }
    ];
  }

  // Delete task 
  deleteTask(id:string) {
    this.todos = this.todos.filter(task => task.id !== id);
  }

  // TrackBy
  identify(index) {
    return index;
  }

  // Add task
  addTodo() {
    const newTask = {
      id: String(this.todos.length + 1),
      title: this.todo.title,
      text: this.todo.text,
      complete: false
    };

    this.todos.push(newTask);

    this.form.reset();
  }
}
