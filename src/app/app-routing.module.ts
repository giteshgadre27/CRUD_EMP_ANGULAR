import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'employees',component:EmployeeListComponent,canActivate: [AuthGuard]},
  {path:'create-employee',component:CreateEmployeeComponent,canActivate: [AuthGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'update-employee/:id',component:UpdateEmployeeComponent,canActivate: [AuthGuard]}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
