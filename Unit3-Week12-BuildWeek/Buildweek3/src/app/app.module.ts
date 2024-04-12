import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {
    SocialLoginModule,
    SocialAuthServiceConfig,
    GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { MentionModule } from 'angular-mentions';



import { GoogleSigninComponent } from './components/google-signin/google-signin.component';
import { PostComponent } from './components/post/post.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AlbumComponent } from './components/album/album.component';
import { UserComponent } from './components/user/user.component';
import { BrowseComponent } from './components/browse/browse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        LoginComponent,
        GoogleSigninComponent,
        PostComponent,
        PhotoComponent,
        AlbumComponent,
        UserComponent,
        BrowseComponent,
        NavbarComponent,
        ToDoListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        SocialLoginModule,
        MentionModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '172576683473-5tlu2maqjuedqe4fgmjo06vailuev76e.apps.googleusercontent.com',
                            {
                                scopes: 'openid profile email',
                            }
                        ),
                    },
                ],
                onError: (err) => {
                    console.error(err);
                },
            } as SocialAuthServiceConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
