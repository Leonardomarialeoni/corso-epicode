import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movies';
  loggedUser!: string | null;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
 this.loggedUser = localStorage.getItem('loggedUser')
  }
  
  logOut() {
    localStorage.removeItem('loggedUser')
    /*this.router.navigate(['/login'])*/
  }

  get isLogged() {
    console.log(this.loggedUser && this.loggedUser.length>0)
    if(this.loggedUser && this.loggedUser.length>0) {
      return true
    }
    return false
  }

}
