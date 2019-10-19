import { Component, OnInit } from '@angular/core'
import { CommonService } from '../../services/common.service'
import { FireNotification } from '../../models/fireNotification'
import { Router } from '@angular/router'

declare let L

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
  private map: any

  constructor (private service: CommonService, private router: Router) {
  }

  ngOnInit () {
    this.map = L.map('map').setView([ 51.9194, 19.1451 ], 5)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
    this.service.data$.subscribe(res => {
      for (const fire of res) {
        this.addMarker(fire)
      }
    })
  }

  addMarker (fire: FireNotification) {
    console.log(fire)
    L.marker([ fire.x, fire.y ])
      .addTo(this.map)
      .on('click', () => {
        return this.router.navigate([`/main/details/${fire.id}`])
      })
  }
}
