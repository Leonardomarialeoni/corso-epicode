import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent {
  @Input() usersList!: User[];
  @Input() todoList!: Todo[];
}
