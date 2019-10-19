import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material'
import { FireListComponent } from './components/fire-list/fire-list.component'
import { MainComponent } from './components/main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FireListComponent
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
