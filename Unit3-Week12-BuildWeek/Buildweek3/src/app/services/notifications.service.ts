import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Notification } from '../interface/notification.interface';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NotificationsService {
    apiUrl = environment.apiURL;

    private notificationSub = new BehaviorSubject<Notification[] | null>(null);
    notifications$ = this.notificationSub.asObservable();

    constructor(private http: HttpClient) {}

    addNotification(notification: Notification) {
        console.log('addNotification called with:', notification);

        return this.http.post(`${this.apiUrl}notifications`, notification).pipe(
            tap((response) => {
                console.log('Notification added successfully:', response);
            }),
            catchError((error) => {
                console.error('Error adding notification:', error);
                return throwError(
                    'Something went wrong with adding notification.'
                );
            })
        );
    }

    getNotifications() {
        this.http
            .get<Notification[]>(`${this.apiUrl}notifications`)
            .subscribe(
                (data) => {
                    this.notificationSub.next(data);
                },
                (error) => {
                    console.error('Error getting notifications:', error);
                    
                    this.notificationSub.next([]);
                }
            );
    }
}
