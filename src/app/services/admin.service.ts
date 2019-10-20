import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = `${ environment.api.url }/users`

  constructor (private http: HttpClient) {
  }

  getAllUsers () {
    return this.http.get<User[]>(`${ this.url }/`).toPromise()
  }

  async save (user: User) {
    return this.http.post<User>(`${ this.url }/`, user).toPromise()
  }

  async delete (id: number) {
    return this.http.delete(`${ this.url }/${ id }`).toPromise()
  }

  async update (user: User) {
    return this.http.put<User>(`${ this.url }/${ user.id }`, user).toPromise()
  }
}
