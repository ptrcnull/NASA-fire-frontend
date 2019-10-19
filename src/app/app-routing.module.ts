import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './components/main/main.component'
import { LoginPanelComponent } from './components/login-panel/login-panel.component'
import { RegistrationPanelComponent } from './components/registration-panel/registration-panel.component'

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPanelComponent
  },
  {
    path: 'registration',
    component: RegistrationPanelComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
