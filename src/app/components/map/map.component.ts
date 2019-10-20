import { Component, NgZone, OnInit } from '@angular/core'
import { CommonService } from '../../services/common.service'
import { Router } from '@angular/router'
import { gridLayer, icon, latLng, layerGroup, Map, marker, tileLayer } from 'leaflet'
import { NasaService } from '../../services/nasa.service'
import { MatDialog } from '@angular/material'
import { ReportFireComponent } from '../report-fire/report-fire.component'
import { NASAFire } from '../../models/nasaFire'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
  checked = false
  nasaFires: NASAFire[] = []

  nasaLayer = layerGroup()
  options = {
    layers: [
      tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }),
      this.nasaLayer
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
      height: '80vh'
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

    setInterval(() => this.pullNasa(), 60 * 1000)
    this.pullNasa()
  }

  async pullNasa () {
    this.nasaFires = await this.nasaService.getAllNasaFires()
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
      this.nasaLayer.clearLayers()
    } else {
      for (const fire of this.nasaFires) {
        marker([ fire.latitude, fire.longitude ], {
          icon: icon({
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            iconUrl: 'assets/nasa.png',
            shadowUrl: ''
          })
        }).addTo(this.nasaLayer)
      }
    }
  }

}
