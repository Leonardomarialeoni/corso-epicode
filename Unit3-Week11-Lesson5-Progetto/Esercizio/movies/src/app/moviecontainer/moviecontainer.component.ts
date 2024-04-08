import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { User } from '../interfaces/user.interface';
import { Favorite } from '../interfaces/favorite.interface';

@Component({
  selector: 'app-moviecontainer',
  templateUrl: './moviecontainer.component.html',
  styleUrls: ['./moviecontainer.component.scss'],
})
export class MoviecontainerComponent {
  @Input() movies!: Movie[];
  @Input() user!: User;
  @Input() favorites!: Favorite[];

  userFavorites: Favorite[] = [];

  isFavorite(id: number) {
    this.userFavorites = this.favorites.filter(
      (fav: Favorite) => fav.userId === this.user.id
    );
    let retVal = false
    this.userFavorites.forEach((fav: Favorite) => {
      if (fav.movieId === id) {
         retVal= true;
      }
    });
    return retVal;
  }
}
