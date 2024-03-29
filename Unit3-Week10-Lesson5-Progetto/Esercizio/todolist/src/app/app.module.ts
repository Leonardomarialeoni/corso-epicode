import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompletedComponent } from './completed/completed.component';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UtilsService } from './services/utils.service';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletedComponent,
    UsersComponent,
    TodoComponent,
    TaskComponent,
    TasklistComponent,
    ButtonContainerComponent,
    UserContainerComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
