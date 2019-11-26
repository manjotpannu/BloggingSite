import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {SignupComponent} from './app/signup/signup.component';
import {FrontpageComponent} from './app/frontpage/frontpage.component';
import {HomepageComponent} from './app/homepage/homepage.component';
import {AddblogComponent} from "./app/addblog/addblog.component";
import {EditblogComponent} from "./app/editblog/editblog.component";
import {MyprofileComponent} from "./app/myprofile/myprofile.component";
import {SureComponent} from "./app/sure/sure.component";
import {BlogdetailsComponent} from "./app/blogdetails/blogdetails.component";

// tslint:disable-next-line:variable-name
export const Main_Routes: Routes = [
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign',
    component: SignupComponent
  },
  {
    path: 'front',
    component: FrontpageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'add',
    component: AddblogComponent
  },
  {
    path: 'edit',
    component: EditblogComponent
  },
  {
    path: 'profile',
    component: MyprofileComponent
  },
  {
    path: 'sure',
    component: SureComponent
  },
  {
    path: 'blogdetails/:id',
    component: BlogdetailsComponent
  },
  ]
