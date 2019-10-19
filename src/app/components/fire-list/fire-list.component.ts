import { Component, OnInit } from '@angular/core'
import { FireService } from '../../services/fire.service'
import { FireNotification } from '../../models/fireNotification'

@Component({
  selector: 'app-fire-list',
  templateUrl: './fire-list.component.html',
  styleUrls: ['./fire-list.component.scss']
})
export class FireListComponent implements OnInit {
  fires: FireNotification[]

  constructor (private fireService: FireService) {
  }

  ngOnInit () {
    this.getAllFires()
  }

  add () {
    console.log('lol')
  }

  async getAllFires () {
    this.fires = await this.fireService.getAllFires()

  }
}
