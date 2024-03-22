import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { AudiComponent } from './audi/audi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fiat', component: FiatComponent }, 
  { path: 'ford', component: FordComponent }, 
  { path: 'audi', component: AudiComponent }, 
  { path: '**', redirectTo: '' } // Rotta di fallback per gestire gli URL non validi, reindirizza alla homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
