import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './components/main/main.component'
import { LoginPanelComponent } from './components/login-panel/login-panel.component'
import { RegistrationPanelComponent } from './components/registration-panel/registration-panel.component'
import { FireListComponent } from './components/fire-list/fire-list.component'
import { FireDetailsComponent } from './components/fire-details/fire-details.component'

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [{
      path: 'details/:id',
      component: FireDetailsComponent
    },
      {
        path: '',
        component: FireListComponent
      }]

  },
  {
    path: 'login',
    component: LoginPanelComponent
  },
  {
    path: 'registration',
    component: RegistrationPanelComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
