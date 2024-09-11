import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: ManageEmployeeComponent},
  {path: 'product', component: ProductComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
