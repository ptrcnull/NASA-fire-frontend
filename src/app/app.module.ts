import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { MatIconModule, MatToolbarModule } from '@angular/material'
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
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FireListComponent
    LoginPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
