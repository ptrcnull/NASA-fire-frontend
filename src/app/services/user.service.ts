import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `178.32.217.80:48322/api/users`

  constructor(private http: HttpClient) { }

  addUser (user: User) {
    return this.http.post<User>(this.url, user).toPromise();
  }

}
