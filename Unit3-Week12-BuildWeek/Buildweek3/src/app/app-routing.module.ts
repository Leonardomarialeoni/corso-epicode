import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowseComponent } from './components/browse/browse.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth/auth.guard';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'browse',
                component: BrowseComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'browse',
        component: BrowseComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'todolist',
        component: ToDoListComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
