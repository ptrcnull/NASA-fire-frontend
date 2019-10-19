import { Component, ViewChild } from '@angular/core'

import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent {

  @ViewChild('username', { static: false }) username: { nativeElement: HTMLInputElement }
  @ViewChild('password', { static: false }) password: { nativeElement: HTMLInputElement }

  constructor(private httpClient: HttpClient, private router: Router) { }

   async tryLogin() {

    console.log(this.username);
    console.log(this.password);
    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value

    // this.httpClient.post<void>(`${environment.api.url}/login`, {}, {
    //   headers: {
    //     Authorization: `Basic ${btoa(username + ':' + password)}`
    //   }
    // }).toPromise()
    //   .then(() => {
    //     return this.router.navigate(['/main'])
    //   })
    //   .catch(() => {
    //     alert('Invalid credentials')
    //   })
  }

}
