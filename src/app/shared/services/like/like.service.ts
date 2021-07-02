import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie';
// import  'rxjs/add/operator/map';
import 'rxjs/Rx';

import { AppConfig } from '../../config';
import { AppConstants } from '../../constants';
import { Like } from '../../models/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  uri = AppConfig.apiURL + 'like/';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Like[]>(this.uri);
  }

  getById(id: string) {
    return this.http.get(this.uri + id);
  }

  update(post: Like) {
    return this.http.put(this.uri + post.id, post);
  }

  delete(id: string) {
    return this.http.delete(this.uri + id);
  }

  create(post): Observable<any> {
    console.log(post);
    return this.http.post(this.uri, { post: post._id });
  }

  countByUser(userId: string) {
    return this.http.get(this.uri + 'countByUser/' + userId);
  }
}
