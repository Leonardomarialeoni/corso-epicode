import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { UtilsService } from '../services/utils.service';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList!: User[]
  todoList!: Todo[]
constructor (private utilsService: UtilsService) {}
ngOnInit(): void {
  this.usersList = this.utilsService.getUsers()
  this.todoList = this.utilsService.getTodos()
}
}