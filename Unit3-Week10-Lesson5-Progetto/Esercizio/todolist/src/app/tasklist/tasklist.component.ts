import { Component, Input } from '@angular/core';
import { Todo } from '../interfaces/todo.interfaces';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
@Input() todolist!: Todo[] ;

}
