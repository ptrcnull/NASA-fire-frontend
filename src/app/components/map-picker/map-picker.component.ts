import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { latLng, tileLayer, Map, LeafletMouseEvent, marker, icon } from 'leaflet'

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: [ './map-picker.component.scss' ]
})
export class MapPickerComponent implements OnInit {
  @Output()
  coords: EventEmitter<{ x: number, y: number }> = new EventEmitter<{x: number, y: number}>();

  options = {
    layers: [
      tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 5,
    center: latLng([ 51.9194, 19.1451 ])
  }

  constructor () {
  }

  onMapReady (map: Map) {
    let m
    map.on('click', (ev: LeafletMouseEvent) => {
      console.log(ev)
      if (m) {
        map.removeLayer(m)
      }
      this.coords.emit({ x: ev.latlng.lat, y: ev.latlng.lng })
      m = marker([ ev.latlng.lat, ev.latlng.lng ], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      })
        .addTo(map)
    })
  }

  ngOnInit () {
  }

}
