import { Component } from '@angular/core';
import { Favorite } from 'src/app/interfaces/favorite.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  movies!: Movie[];
  user!: User;
  favorites!: Favorite[];
  favoriteMovies!: Movie[];
  userFavorites: Favorite[] = [];
  userMovies: Movie[] = [];

  constructor(
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
  this.movies = this.utilsService.getMoviespopular();
  this.user = this.utilsService.getUsers()[0];
  this.favorites = this.utilsService.getFavorites();
  this.userFavorites = this.favorites.filter(
    (fav: Favorite) => fav.userId === this.user.id
  );
  this.movies.forEach((mov: Movie) => {
    this.userFavorites.forEach((fav: Favorite) => {
      if (fav.movieId === mov.id) {
         this.userMovies.push(mov)
      }
    });
  })
}
}
