import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit{
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
      if (element.completed === true){
        this.filteredTask.push(element)
      }
    });
  }
}
