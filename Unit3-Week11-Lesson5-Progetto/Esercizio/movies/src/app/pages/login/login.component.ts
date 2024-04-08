import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users!: User[];
  form!: FormGroup;

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group(
      {
        email: [undefined],
        password: [undefined],
      })
    }

  ngOnInit(): void {
  this.users = this.utilsService.getUsers();
}

logIn() {
  const userFound = this.users.find((user: User) => user.email === this.form.get('email')?.value);
  if (userFound) {
    const pswFound = this.users.find((user: User) => user.password === this.form.get('password')?.value)
  if (userFound && pswFound) {
    localStorage.setItem('loggedUser', JSON.stringify(userFound))
    this.router.navigate(['/home'])
  }
  }
  
}
}
