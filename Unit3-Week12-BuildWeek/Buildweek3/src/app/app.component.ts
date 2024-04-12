import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interface/user.interface';
import { AuthService } from './auth/auth.service';
import { SocialUser } from '@abacritt/angularx-social-login';
import { Auth } from './interface/auth.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'post-app-buildweek03';
  users!: Auth | null | SocialUser;
  user!: User;

  constructor(private authSrv: AuthService) { 
    this.authSrv.user$.subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {
    this.authSrv.restore()
  }

}
