import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './client/home/home.component';
import { LoginComponent } from './client/login/login.component';
import { ProductComponent } from './client/product/product.component';
import { ManageEmployeeComponent } from './client/manage-employee/manage-employee.component';
import { AuthService } from './services/auth.service';
import { LoginGuard } from './admin/guards/login.guard';
import { AuthGuard } from './admin/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ManageEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
