import { Component } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todolist: Todo[] = [];
  filteredTask: Todo [] = [];

  constructor(
    private utilsService: UtilsService
  ) {}
  
  ngOnInit(): void {
    this.todolist = this.utilsService.getTodos();
    this.getFilteredTask(this.todolist);
  }
  
  getFilteredTask ( todolist: Todo[]) {
    this.filteredTask = [];
    todolist.forEach(element => {
      if (element.completed === false){
        this.filteredTask.push(element)
      }
    });
  }

}
