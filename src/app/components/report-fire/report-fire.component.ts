import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FireReport } from '../../models/fireReport'

@Component({
  selector: 'app-report-fire',
  templateUrl: './report-fire.component.html',
  styleUrls: ['./report-fire.component.scss']
})
export class ReportFireComponent implements OnInit {

  fireReport: FireReport

  constructor () {
  }

  ngOnInit () {
    this.fireReport = {
      address: '',
      arePeople: false,
      description: '',
      fireDepartamentDescription: '',
      fireReportApproveCounter: 0,
      fireTeam: false,
      id: 0,
      isActiveFire: false,
      isBuilding: false,
      isElectricity: false,
      isHazardousMaterial: false,
      isWood: false,
      photo: '',
      reporterId: 0,
      startDate: '',
      userCellPhoneNumber: '',
      userName: '',
      userSurname: '',
      x: 0,
      y: 0
    }
  }

}
