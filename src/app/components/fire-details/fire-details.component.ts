import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { FireNotification } from '../../models/fireNotification'
import { MatDialog, MatDialogRef } from '@angular/material'
import { ReportFireComponent } from '../report-fire/report-fire.component'
import { FireService } from '../../services/fire.service'
import { ActivatedRoute } from '@angular/router'
import { LoginPanelComponent } from '../login-panel/login-panel.component'
import { RegistrationPanelComponent } from '../registration-panel/registration-panel.component'

@Component({
  selector: 'app-fire-details',
  templateUrl: './fire-details.component.html',
  styleUrls: [ './fire-details.component.scss' ]
})
export class FireDetailsComponent implements OnInit {

  fire: FireNotification = null

  constructor (private location: Location,
               private fireService: FireService,
               private route: ActivatedRoute,
               private dialogRef: MatDialogRef<FireDetailsComponent>,
               public dialog: MatDialog) {
  }

  backClicked () {
    this.location.back()
  }


  ngOnInit () {
    this.getFire()
  }

  async getFire () {
    const id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.fire = await this.fireService.getFire(id)
  }

}
