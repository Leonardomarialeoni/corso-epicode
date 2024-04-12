import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo } from '../interface/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
apiUrl=environment.apiURL
  constructor(private http: HttpClient) { }


getphotos(){
  return this.http.get<Photo[]>(`${this.apiUrl}photos`)
}

getphoto(id: number){
  return this.http.get<Photo>(`${this.apiUrl}photos/${id}`)
}

}


