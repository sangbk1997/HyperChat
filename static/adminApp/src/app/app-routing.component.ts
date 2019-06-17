import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {ViewUserComponent} from "./user/view-user/view-user.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {ViewChannelComponent} from "./channel/view-channel/view-channel.component";
import {ChannelDetailComponent} from "./channel/channel-detail/channel-detail.component";
import {ViewReportComponent} from "./view-report/view-report.component";

const routes: Routes = [
  {
    path: 'users',
    component: ViewUserComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'channels',
    component: ViewChannelComponent
  },
  {
    path: 'channels/:id',
    component: ChannelDetailComponent
  },
  {
    path: 'reports',
    component: ViewReportComponent
  },
  {
    path: '', component: ViewUserComponent
  },
  {path: '**', component: ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
