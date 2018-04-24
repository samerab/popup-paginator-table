import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {user} from './user.interface';


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData(){
    let params = new HttpParams().set('id','3');
    const headers = new HttpHeaders().set('Authorization','samer');
     return this.http.get<user[]>('https://jsonplaceholder.typicode.com/posts');
            
  }

}
