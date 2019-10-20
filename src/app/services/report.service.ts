import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { FireReport } from '../models/fireReport'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = `${ environment.api.url }/fireReports`

  constructor (private http: HttpClient) {
  }

  send (report: FireReport) {
    return this.http.post<FireReport>(`${ this.url }/unregistered`, report).toPromise()
  }
}
