import { Component, Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class Snackbar {

  constructor (private snackBar: MatSnackBar) {
  }

  showSnackbar (message: string, type: 'save' | 'info' | 'error') {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: [`snackbar-${ type }`]
    })
  }

}
