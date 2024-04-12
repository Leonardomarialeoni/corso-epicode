import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/interface/to-do';
import { User } from 'src/app/interface/user.interface';
import { ToDoServiceService } from 'src/app/services/to-do-service.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todos!: TodoList[];
  users!: User[];

  constructor(private todoService: ToDoServiceService, private userSrvc: UsersService) { }

  ngOnInit(): void {

    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    })

    this.userSrvc.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  toggleCompletion(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
  }

}

