import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../interface/user.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Photo } from '../interface/photo.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    getUsersByIds(uniqueUserIds: number[]) {
        throw new Error('Method not implemented.');
    }
    apiUrl = environment.apiURL;
    photosUrl = `${this.apiUrl}photos`;

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(`${this.apiUrl}users`);
    }

    getUser(id: number) {
        return this.http.get<User>(`${this.apiUrl}users/${id}`);
    }

    getUserByUsername(username: string) {
        return this.getUsers().pipe(
            map(
                (users: User[]) =>
                    users.find(
                        (user: { username: string }) =>
                            user.username === username
                    ) || null
            )
        );
    }

    getPhotos() {
        return this.http.get<Photo[]>(this.photosUrl);
    }
}
