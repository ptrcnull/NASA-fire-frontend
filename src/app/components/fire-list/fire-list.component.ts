import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-fire-list',
  templateUrl: './fire-list.component.html',
  styleUrls: ['./fire-list.component.scss']
})
export class FireListComponent implements OnInit {
  fires = [
    {

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
    },
    {

      id: 1,
      reporterId: true,
      x: 1,
      y: 1,
      startDate: '02-32-1999',
      fireReportApproveCounter: 1,
      isFireTeam: true,
      isFire: true,
      description: 'Lorem iingdi, est fugiat laudantium magnam minima modi voluptas?',
      fireDepartmentDescription: 'Lorem iingdi, est fugiat laudantium magnam minima modi voluptas?',
      arePeople: true,
      isWood: true,
      isBuilding: true,
      isElectricity: true,
      isHazardousMaterial: true,
      isReal: true,
      photo: '',

      address: 'ul.asdsadasd 12'
    }

  ]

  constructor () {
  }

  ngOnInit () {
  }

  add () {
    console.log('lol')
  }
}
