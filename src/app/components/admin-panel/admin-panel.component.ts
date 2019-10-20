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
  users: User[] = [{
    id: 1,
    name: 'Michał',
    surname: 'Matera',
    cellPhoneNumber: '+40 0920234234',
    email: 'asdasdasd',
    photo: 'asdsadad',
    password: ''
  }]
  userToSave: User = null

  constructor (private adminService: AdminService, private snackbar: Snackbar) {
  }

  ngOnInit (): void {
    this.getAllUsers()
  }

  add () {
    this.userToSave = { cellPhoneNumber: '', email: '', id: 0, name: '', photo: '', surname: '' ,password: ''}
  }

  async getAllUsers () {
    this.users = await this.adminService.getAllUsers()

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
