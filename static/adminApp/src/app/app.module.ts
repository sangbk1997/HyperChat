import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.component";
import {ViewReportComponent} from "./view-report/view-report.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {ChannelDetailComponent} from "./channel/channel-detail/channel-detail.component";
import {ViewUserComponent} from "./user/view-user/view-user.component";
import {ViewChannelComponent} from "./channel/view-channel/view-channel.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ViewReportComponent,
    UserDetailComponent,
    ChannelDetailComponent,
    ViewUserComponent,
    ViewChannelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
