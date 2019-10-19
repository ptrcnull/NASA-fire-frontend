import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import {
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSlideToggleModule, MatSnackBarModule,
  MatToolbarModule,
  MatButtonModule, MatCardModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { NavbarComponent } from './components/navbar/navbar.component'
import { MainComponent } from './components/main/main.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FireListComponent } from './components/fire-list/fire-list.component'
import { LoginPanelComponent } from './components/login-panel/login-panel.component'
import { RegistrationPanelComponent } from './components/registration-panel/registration-panel.component'
import { MapPickerComponent } from './components/map-picker/map-picker.component'
import { MapComponent } from './components/map/map.component'
import { FireDetailsComponent } from './components/fire-details/fire-details.component'
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ReportFireComponent } from './components/report-fire/report-fire.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MapComponent,
    FireListComponent,
    LoginPanelComponent,
    RegistrationPanelComponent,
    FireDetailsComponent,
    AdminPanelComponent,
    MapPickerComponent,
    ReportFireComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    LeafletModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    FormsModule,
    MatListModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
