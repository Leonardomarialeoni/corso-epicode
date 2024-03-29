import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  
  @Input() id!: number;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() email!: string;
  @Input() image!: string;
  @Input() title!: string;
  @Input() todoList!: Todo[];

userTaskList!: Todo[]

  ngOnInit(): void {
   this.userTaskList = this.todoList.filter((todo: Todo) => {
    return this.id === todo.userId
   })
  }
}
