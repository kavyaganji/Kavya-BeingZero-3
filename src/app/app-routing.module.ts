import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CountryComponent } from './country/country.component';
import { ColorComponent } from './color/color.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nav', component: NavComponent},
  { path: 'country', component: CountryComponent},
  { path: 'color', component: ColorComponent},
  { path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
