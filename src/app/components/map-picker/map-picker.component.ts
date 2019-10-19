import { Component, OnInit } from '@angular/core'

declare let L

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: [ './map-picker.component.scss' ]
})
export class MapPickerComponent implements OnInit {
  map: any

  constructor () {
  }

  ngOnInit () {
    this.map = L.map('map-picker').setView([ 51.9194, 19.1451 ], 5)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
    let marker
    this.map.on('click', ev => {
      console.log(ev)
      this.map.removeLayer(marker)
      marker = L.marker([ev.latlng.lat, ev.latlng.lng])
        .addTo(this.map)
    })
  }

}
