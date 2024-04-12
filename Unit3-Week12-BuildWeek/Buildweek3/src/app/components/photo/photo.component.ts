import { SocialUser } from '@abacritt/angularx-social-login';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/interface/auth.interface';
import { Photo } from 'src/app/interface/photo.interface';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photo!: Photo
  user!: Auth | null | SocialUser;
  constructor(private photoSrv: PhotosService, private authSrv: AuthService ,private router: ActivatedRoute ) {
    this.authSrv.user$.subscribe((value) => {
      this.user = value;
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.photoSrv.getphoto(id).subscribe((data) => {
        this.photo = data;
      });
    });
  }


  checkTypeOfAuthData(object: any): object is Auth {
    return 'user' in object
  }

  checkTypeOfSocialUser(object: any): object is SocialUser {
    return 'id' in object
  }


}
