import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyPlComponent } from './apply-pl/apply-pl.component';
import { ExistingCustomerComponent } from './apply-pl/existing-customer/existing-customer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'apply-pl',component:ApplyPlComponent},
  { path:'existing-customer',component:ExistingCustomerComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
