import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { FireNotification } from '../models/fireNotification'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private data = new BehaviorSubject<FireNotification[]>([])
  data$ = this.data.asObservable()

  changeData (data: FireNotification[]) {
    this.data.next(data)
  }
}
