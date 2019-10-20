import { Component, OnInit } from '@angular/core'
import { User } from '../../models/user'
import { AdminService } from '../../services/admin.service'
import { Snackbar } from '../../snackbar'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  users: User[] = []
  userToSave: User = null

  constructor (private adminService: AdminService, private snackbar: Snackbar) {
  }

  ngOnInit (): void {
    this.getAllUsers()
  }

  add () {
    this.userToSave = {
      cellPhoneNumber: '+48509890849',
      email: 'tomKowalski@gmail.com',
      id: 2,
      name: 'Tom',
      notificationRangeInMeters: 30000,
      photo: null,
      surname: 'Kowalski',
      x: 53.421132,
      y: 14.53724,
      password: ''
    }
  }

  async getAllUsers () {
    this.users = await this.adminService.getAllUsers()
    console.log(this.users)

  }

  save (user: User) {
    this.adminService.save(user)
      .then(() => {
        this.snackbar.showSnackbar('Succes ', 'save')
        this.getAllUsers()
        this.userToSave = null
      }).catch(err => {
      console.error(err)
      this.snackbar.showSnackbar('Error save', 'error')
    })
  }

  delete (id: number) {
    this.adminService.delete(id)
      .then(() => {
        this.snackbar.showSnackbar('Succes ', 'save')
        this.getAllUsers()
      })
      .catch(err => {
        console.error(err)
        this.snackbar.showSnackbar('Error ', 'error')
      })
  }

  update (user: User) {
    this.adminService.update(user)
      .then(() => {
        this.snackbar.showSnackbar('Succes ', 'save')
        this.getAllUsers()
      }).catch(err => {
      console.error(err)
      this.snackbar.showSnackbar('Error ', 'error')
    })
  }

}
