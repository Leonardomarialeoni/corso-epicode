import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(private authSrv: AuthService, private router: Router) {
        this.authSrv.user$.subscribe((data) => {
            if (data == null) {
                this.router.navigate(['/login']);
            }
        });
    }
}
