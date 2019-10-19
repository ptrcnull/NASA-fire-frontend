import { Component, OnInit } from '@angular/core'
import { FireNotification } from '../../models/fireNotification'

@Component({
  selector: 'app-fire-details',
  templateUrl: './fire-details.component.html',
  styleUrls: ['./fire-details.component.scss']
})
export class FireDetailsComponent implements OnInit {

  fire: FireNotification

  constructor () {
  }

  ngOnInit () {
  }

}
