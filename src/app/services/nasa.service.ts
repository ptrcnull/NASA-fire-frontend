import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private url = 'https://sa19-node.projekty.space/api/europe'

  constructor (private http: HttpClient) {
  }


  async getAllNasaFires () {
    return await this.http.get<any[]>(this.url).toPromise()
  }

}
