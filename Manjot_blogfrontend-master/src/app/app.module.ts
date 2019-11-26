import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddblogComponent } from './addblog/addblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SureComponent } from './sure/sure.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AddblogComponent,
    EditblogComponent,
    MyprofileComponent,
    NavbarComponent,
    SureComponent,
    BlogdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
