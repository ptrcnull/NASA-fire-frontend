import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { MatDialogModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material'
import { NavbarComponent } from './components/navbar/navbar.component'
import { MainComponent } from './components/main/main.component'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { MatButtonModule } from '@angular/material'
import { FireListComponent } from './components/fire-list/fire-list.component'
import { LoginPanelComponent } from './components/login-panel/login-panel.component'
import { MatCardModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http'
import { RegistrationPanelComponent } from './components/registration-panel/registration-panel.component'
import { MapComponent } from './components/map/map.component';
import { FireDetailsComponent } from './components/fire-details/fire-details.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MapComponent,
    FireListComponent,
    LoginPanelComponent,
    RegistrationPanelComponent,
    FireDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
