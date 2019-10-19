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

  // onLogIn ($event: Event) {
  //   // @TODO
  // }

  openDialog (): void {
    const dialogRef = this.dialog.open(LoginPanelComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // onLogOut ($event: Event) {
  //   localStorage.removeItem('username')
  // }
}
