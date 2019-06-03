import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes
  }

  // onToggle
  onToggle(todo) {
    //Toffle in UI
    console.log("toggle")
    todo.completed = !todo.compled;
    //Toggle on servere
    this.todoService.toggleCompleted(todo).subscribe(todo => { console.log(todo) })
  }

  // onDelete
  onDelete(todo) {
    console.log("delete");
    this.deleteTodo.emit(todo);
  }


}
