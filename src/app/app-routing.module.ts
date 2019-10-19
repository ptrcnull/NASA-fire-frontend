import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginPanelComponent} from "./components/login-panel/login-panel.component";

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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
