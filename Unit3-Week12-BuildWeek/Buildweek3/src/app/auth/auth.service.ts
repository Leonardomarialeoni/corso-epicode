import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interface/auth.interface';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Register } from '../interface/register.interface';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    apiUrl = environment.apiURL;
    jwtHelper = new JwtHelperService();

    private authSub = new BehaviorSubject<Auth | null | SocialUser>(null);
    user$ = this.authSub.asObservable();

    constructor(private http: HttpClient, private router: Router ,private authService: SocialAuthService) {
        this.authService.authState.subscribe((user) => {
            this.authSub.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/']);
        });
    }


    login(data: { email: string; password: string }) {
        return this.http.post<Auth>(`${this.apiUrl}login`, data).pipe(
            tap((data) => {
                console.log('Auth:', data);
            }),
            tap((data) => {
                this.authSub.next(data);
                localStorage.setItem('user', JSON.stringify(data));
            }),
            catchError(this.errors)
        );
    }

    signup(data: Register) {
        return this.http
            .post(`${this.apiUrl}register`, data)
            .pipe(catchError(this.errors));
    }

    logout() {
        this.authSub.next(null);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    restore() {
        const userJson = localStorage.getItem('user');
        if (!userJson) {
            return;
        }
        const user: Auth = JSON.parse(userJson);
        this.authSub.next(user);
    }

    getCurrentUserId(): number | null {
        const user = this.authSub.getValue();
    
        console.log('Current user:', user); // Debugging log to check the current user object
    
        // Type guard to check if the user object has a 'user' property
        if (!user || !('user' in user)) {
            console.error('No user is currently logged in or user object is not structured as expected.');
            return null; 
        }
    
        // Now TypeScript knows that 'user' is of a type that has a 'user' property
        // Correctly access the id from the user object
        const userId = user.user.id;
        console.log('User ID found:', userId); // Debugging log for the user ID
        return userId;
    }

    private errors(err: any) {
        console.error(this.errors);
        switch (err.error) {
            case 'Email already exists':
                return throwError('utente già presente');
                break;

            case 'Incorrect password':
                return throwError('password errata');
                break;

            case 'Cannot find user':
                return throwError('Utente non trovato');
                break;

            default:
                return throwError('Errore nella chiamata');
                break;
        }
    }
}
