import { Component, ViewChild } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material'
import { RegistrationPanelComponent } from '../registration-panel/registration-panel.component'


@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: [ './login-panel.component.scss' ]
})
export class LoginPanelComponent {

  @ViewChild('username', { static: false }) username: { nativeElement: HTMLInputElement }
  @ViewChild('password', { static: false }) password: { nativeElement: HTMLInputElement }

  constructor (private dialogRef: MatDialogRef<LoginPanelComponent>, public dialog: MatDialog) {
  }

  async tryLogin () {

    const username = this.username.nativeElement.value
    const password = this.password.nativeElement.value

    localStorage.setItem('username', username)

    this.dialogRef.close()

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

  openRegisterDialog (): void {
    this.dialogRef.close()
    this.dialog.open(RegistrationPanelComponent, {
      width: '50vw'
    })
  }
}
