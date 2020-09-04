import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NationalComponent } from './national/national.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
},
{ path: 'forgetpassword', component: ForgetpasswordComponent },
{ path: 'register', component: RegisterComponent },
{
  path: 'home', component: HomeComponent
},
{ path: 'aboutus', component: AboutusComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'national', component: NationalComponent },

{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
