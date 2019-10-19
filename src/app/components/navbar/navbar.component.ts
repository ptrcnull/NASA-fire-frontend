import { Component, OnInit } from '@angular/core'
import { LoginPanelComponent } from '../login-panel/login-panel.component'
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  localStorage: Storage = localStorage

  constructor (public dialog: MatDialog) {
  }

  ngOnInit () {
  }

  onLogIn ($event: Event) {
    this.dialog.open(LoginPanelComponent, {
      width: '250px',
    })
  }

  onLogOut ($event: Event) {
    localStorage.removeItem('username')
  }
}
