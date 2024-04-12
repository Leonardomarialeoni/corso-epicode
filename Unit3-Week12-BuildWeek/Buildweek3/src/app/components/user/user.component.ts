import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interface/user.interface';
import { Photo } from 'src/app/interface/photo.interface';
import { Post } from 'src/app/interface/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    users!: User[];
    user!: User;
    filteredUsers: User[] = [];
    filteredUserPhotos: Photo[] = [];
    posts: Post[] = [];

    constructor(private userSrvc: UsersService, private postSrvc: PostsService) {}

    ngOnInit(): void {
      this.userSrvc.getUsers().subscribe((data) => {
        this.users = data;
        this.filteredUsers = data;
      });
    
      this.userSrvc.getPhotos().subscribe((data) => {
        this.filteredUserPhotos = data;
      });
    
      // Chiamare il metodo getPosts() del servizio dei post per recuperare i post
      this.postSrvc.getPosts().subscribe((data) => {
        console.log('Array dei post:', data);
        this.posts = data;
      });
    }

    getUserById(userId: number): User | undefined {
        return this.users.find((user) => user.id === userId);
    }

    getUserPhoto(userId: number): string | undefined {
        const userPhoto = this.filteredUserPhotos.find(
            (photo) => photo.id === userId
        );
        return userPhoto ? userPhoto.thumbnailUrl : undefined;
    }

    getUserPosts(userId: number): Post[] {
        // Filtra i post per l'ID dell'utente
        return this.posts.filter((post) => post.userId === userId);
    }
}
