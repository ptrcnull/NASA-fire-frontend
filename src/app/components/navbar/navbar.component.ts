import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  localStorage: Storage = localStorage

  constructor () {
  }

  ngOnInit () {
  }

  onLogIn ($event: Event) {
    // @TODO
  }

  onLogOut ($event: Event) {
    localStorage.removeItem('username')
  }
}
