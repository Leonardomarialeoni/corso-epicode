import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private router: Router, private authSrv: AuthService) {}
    login(form: NgForm) {
        console.log(form.value);
        try {
            this.authSrv.login(form.value).subscribe(() => {
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 300);
            });
        } catch (error) {
            console.error(error);
        }
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        try {
            this.authSrv.signup(form.value).subscribe();
            this.router.navigate(['/login']);
        } catch (error) {
            console.error(error);
        }
    }

    @ViewChild('container') container!: ElementRef;

    signIn() {
        this.container.nativeElement.classList.remove('right-panel-active');
    }

    signUp() {
        this.container.nativeElement.classList.add('right-panel-active');
    }

    authSubscription!: Subscription;

    googleSignin(googleWrapper: any) {
        googleWrapper.click();
    }
}
