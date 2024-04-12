import { SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/interface/auth.interface';
import { NotificationsService } from 'src/app/services/notifications.service';
import { Notification } from 'src/app/interface/notification.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user!: Auth;
  notifications: Notification[] = [];
  notifications$!: Observable<Notification[] | null>;
  unreadNotifications!: Notification[];
  badgeNumber!: number;
  currentUserId!: number;

  constructor(private authsrv: AuthService, private notifSrv: NotificationsService) {}

  ngOnInit(): void {
    this.authsrv.user$.subscribe((data) => {
      if (data) {
        this.user = data as Auth;
        if (this.checkTypeOfAuthData(data)) {
          this.currentUserId = data.user.id;
        } else if (this.checkTypeOfSocialUser(data)) {
          return
        }

        this.notifications$ = this.notifSrv.notifications$;

        this.notifications$.subscribe(
          (notifications: Notification[] | null) => {
            if (notifications) {
              this.notifications = notifications;
              console.log('Notifications navbar:', this.notifications);
              this.unreadNotifications = this.notifications.filter((notification) => notification.userId === this.currentUserId && !notification.read);
              this.badgeNumber = this.unreadNotifications.length + 1;
              console.log('navbar useful: ', this.unreadNotifications);
            }
          },
          (error) => {
            console.error('Error getting notifications:', error);
          }
        );

        this.notifSrv.getNotifications();
      } else {
        return
      }
    });
  }

  updateNotifications(): void {
    if (this.user && this.notifications) {
      this.unreadNotifications = this.notifications.filter(
        (notification) => notification.userId === this.currentUserId && !notification.read
      );
      this.badgeNumber = this.unreadNotifications.length;
      console.log('navbar useful: ', this.unreadNotifications);
    }
  }

  logout() {
    this.authsrv.logout();
  }

  checkTypeOfAuthData(object: any): object is Auth {
    return 'user' in object;
  }

  checkTypeOfSocialUser(object: any): object is SocialUser {
    return 'id' in object;
  }
}
