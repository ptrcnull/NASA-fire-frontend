import { Component, NgZone, OnInit } from '@angular/core'
import { CommonService } from '../../services/common.service'
import { FireNotification } from '../../models/fireNotification'
import { Router } from '@angular/router'
import { latLng, tileLayer, Map, marker, icon } from 'leaflet'
import { NasaService } from '../../services/nasa.service'
import { MatDialog } from '@angular/material'
import { LoginPanelComponent } from '../login-panel/login-panel.component'
import { ReportFireComponent } from '../report-fire/report-fire.component'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
  checked = false
  nasaFires: any[] = []
  options = {
    layers: [
      tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 5,
    center: latLng([51.9194, 19.1451])
  }

  constructor (private service: CommonService, private ngZone: NgZone, private router: Router, private nasaService: NasaService,
               public dialog: MatDialog) {
  }

  ngOnInit () {
  }

  createReport () {

    this.dialog.open(ReportFireComponent, {
      width: '80vw',
      height: 'auto'
    })

  }


  onMapReady (map: Map) {
    this.service.data$.subscribe(res => {
      for (const fire of res) {
        this.addMarker(map, fire, () => {
          return this.ngZone.run(() => this.router.navigate([ `/main/details/${ fire.id }` ]))
        })
      }
    })
  }

  addMarker (map: Map, coords: { x: number, y: number }, callback?: () => void) {
    marker([ coords.x, coords.y ], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    })
      .addTo(map)
      .on('click', callback)
  }

  async getNasaFires () {
    console.log('get nasa locations')
    this.checked = !this.checked
    if (this.checked) {
      // nasa object
      // {
      //   "latitude": "51.487",
      //   "longitude": "6.718",
      //   "confidence": "76"
      // }

      this.nasaFires = await this.nasaService.getAllNasaFires()
      console.log('done')
      console.log(this.nasaFires)
    } else {
      console.log('error')
      this.nasaFires = []
    }
  }

}
