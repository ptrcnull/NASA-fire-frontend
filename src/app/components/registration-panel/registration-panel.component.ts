import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { User } from '../../models/user'

@Component({
  selector: 'app-registration-panel',
  templateUrl: './registration-panel.component.html',
  styleUrls: ['./registration-panel.component.scss']
})
export class RegistrationPanelComponent implements OnInit {

  // // Minimum six characters, at least one letter and one number:
  patternNormal: any = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$'


  user: User = {
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

  constructor () {
  }

  ngOnInit () {

    // nie dziala nie wiem o co chodzi  :<<<<<<<<<<<<<<<<<<<<<<<
    this.selectedPattern = this.patternNormal // will change based on user preference

    if (this.selectedPattern === this.patternNormal) {
      this.errorMgs = 'Minimum six characters, at least one letter and one number'
    }
  }


  async addUser (user: User) {
    this.user = user
    console.log(this.user)
  }

}
