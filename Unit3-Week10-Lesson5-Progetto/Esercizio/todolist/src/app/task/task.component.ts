import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() id!: number;
  @Input() todo!: string;
  @Input() completed!: boolean;
  @Input() userId!: number;

  usersList: User[] = [];
  todolist: any;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.todolist = this.utilsService.getTodos();
    this.usersList = this.utilsService.getUsers();
  }

  getUserById(userId: number) {
    const target = this.usersList.find((user: User) => {
      return userId === user.id;
    });
    return target?.firstName + ' ' + target?.lastName;
  }

  checkBoxValue() {
    this.completed = !this.completed;
  }
}
