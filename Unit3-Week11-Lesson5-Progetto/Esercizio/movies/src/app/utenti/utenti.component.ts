import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent {
  users!: User[];

  constructor(
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.users = this.utilsService.getUsers();
}
}