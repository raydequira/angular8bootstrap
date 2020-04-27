import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService,ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
