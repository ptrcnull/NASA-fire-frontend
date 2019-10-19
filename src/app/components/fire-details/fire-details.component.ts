import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { FireNotification } from '../../models/fireNotification'

@Component({
  selector: 'app-fire-details',
  templateUrl: './fire-details.component.html',
  styleUrls: ['./fire-details.component.scss']
})
export class FireDetailsComponent implements OnInit {

  fire = {

    id: 1,
    reporterId: true,
    x: 1,
    y: 1,
    startDate: '02-32-1999',
    fireReportApproveCounter: 1,
    isFireTeam: true,
    isFire: true,
    description: 'Lorem iingdi, est fugiat laudantium magnam minima modi voluptas?',
    fireDepartmentDescription: 'blablalbal',
    arePeople: true,
    isWood: true,
    isBuilding: true,
    isElectricity: true,
    isHazardousMaterial: true,
    isReal: false,
    photo: '',
    address: 'ul.asdsadasd 12'
  }

  constructor (private location: Location) {
  }

  backClicked () {
    this.location.back()
  }

  ngOnInit () {
  }

}
