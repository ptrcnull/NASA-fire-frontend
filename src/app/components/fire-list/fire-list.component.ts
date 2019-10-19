import { Component, OnInit } from '@angular/core'
import { FireService } from '../../services/fire.service'
import { FireNotification } from '../../models/fireNotification'
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-fire-list',
  templateUrl: './fire-list.component.html',
  styleUrls: ['./fire-list.component.scss']
})
export class FireListComponent implements OnInit {
  fires: FireNotification[]

  constructor (private fireService: FireService, private common: CommonService) {
  }

  ngOnInit () {
    this.getAllFires()
  }

  add () {
    console.log('lol')
  }

  async getAllFires () {
    this.fires = await this.fireService.getAllFires()

    this.common.changeData(this.fires)
  }
}
