import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from '../interface/to-do';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<TodoList[]>(`${this.apiUrl}todoList`);
  }
  
}
