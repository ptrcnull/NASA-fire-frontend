import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-registration-panel',
  templateUrl: './registration-panel.component.html',
  styleUrls: [ './registration-panel.component.scss' ]
})
export class RegistrationPanelComponent implements OnInit {

  // // Minimum six characters, at least one letter and one number:
  patternNormal: any = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'


  user: User = {
    notificationRangeInMeters: 0,
    x: 0,
    y: 0,
    id: undefined,
    name: '',
    surname: '',
    cellPhoneNumber: '',
    email: '',
    photo: '',
    password: ''
  }
  fPassword = new FormControl()
  // password: string
  errorMgs: string
  selectedPattern: string
  hide = true

  constructor (private service: UserService, private dialogRef: MatDialogRef<RegistrationPanelComponent>) {
  }

  ngOnInit () {

    // nie dziala nie wiem o co chodzi  :<<<<<<<<<<<<<<<<<<<<<<<
    this.selectedPattern = this.patternNormal // will change based on user preference

    if (this.selectedPattern === this.patternNormal) {
      this.errorMgs = 'Minimum six characters, at least one letter and one number'
    }
  }


  async addUser () {
    console.log(this.user)
    this.service.addUser(this.user)
      .then(() => {
        this.dialogRef.close()
      })
      .catch(err => {
        alert('Something went wrong')
        console.error(err)
      })
  }

  updateCoords ($event: { x: number, y: number }) {
    console.log($event)
    this.user.x = $event.x
    this.user.y = $event.y
  }

}
