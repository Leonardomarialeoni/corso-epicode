import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/interfaces/favorite.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  movies!: Movie[];
  user!: User;
  favorites!: Favorite[];

  constructor(
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
  this.movies = this.utilsService.getMoviespopular();
  this.user = this.utilsService.getUsers()[0];
  this.favorites = this.utilsService.getFavorites();
}
}
