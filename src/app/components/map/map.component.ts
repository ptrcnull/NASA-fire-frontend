import { Component, OnInit } from '@angular/core'
import { CommonService } from '../../services/common.service'
import { FireNotification } from '../../models/fireNotification'
import { Router } from '@angular/router'
import { latLng, tileLayer, Map, marker, icon } from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  checked = false
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

  constructor (private service: CommonService, private router: Router) {
  }

  ngOnInit () {}

  onMapReady (map: Map) {
    this.service.data$.subscribe(res => {
      for (const fire of res) {
        this.addMarker(map, fire)
      }
    })

    this.addMarker(map, {
      arePeople: false,
      description: '',
      fireDepartmentDescription: '',
      fireReportApproveCounter: 0,
      id: 0,
      isBuilding: false,
      isElectricity: false,
      isFire: false,
      isFireTeam: false,
      isHazardousMaterial: false,
      isReal: false,
      isWood: false,
      photo: '',
      reporterId: false,
      startDate: '',
      x: 53.4285,
      y: 14.5528
    })
  }

  addMarker (map: Map, fire: FireNotification) {
    console.log(fire)
    marker([ fire.x, fire.y ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    })
      .addTo(map)
      .on('click', () => {
        return this.router.navigate([`/main/details/${ fire.id }`])
      })
  }
}
