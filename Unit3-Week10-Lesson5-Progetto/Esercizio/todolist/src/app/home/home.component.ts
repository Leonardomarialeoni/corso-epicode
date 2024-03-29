import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';
import { UtilsService } from '../services/utils.service';
import { UsersComponent } from '../users/users.component';
import { User } from '../interfaces/user.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
todolist: Todo[] = []

constructor(
  private utilsService: UtilsService
) {}

ngOnInit(): void {
  this.todolist = this.utilsService.getTodos();
}

}


