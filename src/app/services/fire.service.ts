import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FireNotification } from '../models/fireNotification'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FireService {

  private url = `${ environment.api.url }/fireReports`

  constructor (private http: HttpClient) {
  }

  async getAllFires () {
    return await this.http.get<FireNotification[]>(`${ this.url }/`).toPromise()
  }

}
