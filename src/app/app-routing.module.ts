import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './core/overview/overview.component';
import { ActivityLogComponent } from './core/activity-log/activity-log.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { RequestRaisedComponent } from './core/request-raised-menu/request-raised/request-raised.component';
import { RequestDetailsComponent } from './core/request-raised-menu/request-details/request-details.component';
import { SocietyDetailsComponent } from './core/society-details/society-details.component';
import { SocietyDetailsSpecificComponent } from './core/society-details/society-details-specific/society-details-specific.component';

const routes: Routes = [
  {
    path: 'home',
    component: OverviewComponent,
  },
  {
    path: 'activityLog',
    component: ActivityLogComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'requestRaised',
    component: RequestRaisedComponent,
  },
  {
    path: 'requestRaisedDetails',
    component: RequestDetailsComponent,
  },
  {
    path: 'societydetails',
    component: SocietyDetailsComponent,
  },
  {
    path: 'societyspecific',
    component: SocietyDetailsSpecificComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
