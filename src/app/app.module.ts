import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { MatDialogModule, MatIconModule, MatToolbarModule } from '@angular/material'
import { NavbarComponent } from './components/navbar/navbar.component'
import { MainComponent } from './components/main/main.component'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material'
import { FireListComponent } from './components/fire-list/fire-list.component'
import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { MatCardModule} from '@angular/material'
import {HttpClientModule} from '@angular/common/http';
import { RegistrationPanelComponent } from './components/registration-panel/registration-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FireListComponent
    LoginPanelComponent
    RegistrationPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
