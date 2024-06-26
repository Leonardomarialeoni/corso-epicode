import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoviecontainerComponent } from './moviecontainer/moviecontainer.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { UtentiComponent } from './utenti/utenti.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    MoviecontainerComponent,
    MoviecardComponent,
    UtentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
