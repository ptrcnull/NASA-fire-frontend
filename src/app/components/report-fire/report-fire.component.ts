import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FireReport } from '../../models/fireReport'
import { ReportService } from '../../services/report.service'
import { Snackbar } from '../../snackbar'
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-report-fire',
  templateUrl: './report-fire.component.html',
  styleUrls: ['./report-fire.component.scss']
})
export class ReportFireComponent implements OnInit {

  fireReport: FireReport

  icons = {
    isBuilding: false,
    isElectricity: false,
    isHazardousMaterial: false,
    isWood: false,
    arePeople: false
  }

  constructor (private reportService: ReportService, private snackbar: Snackbar,
               private matDialogRef: MatDialogRef<ReportFireComponent>) {
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

  async send () {
    this.fireReport.isWood = this.icons.isWood
    this.fireReport.arePeople = this.icons.arePeople
    this.fireReport.isHazardousMaterial = this.icons.isHazardousMaterial
    this.fireReport.isElectricity = this.icons.isElectricity
    this.fireReport.isBuilding = this.icons.isBuilding

    await this.reportService.send(this.fireReport)
      .then(() => {
        this.snackbar.showSnackbar('Succes ', 'save')

      })
      .catch(err => {
        console.error(err)
        this.snackbar.showSnackbar('Error ', 'error')

      })
    this.matDialogRef.close()
  }

  setCords ($event: { x: number; y: number }) {
    this.fireReport.x = $event.x
    this.fireReport.y = $event.y

  }
}
