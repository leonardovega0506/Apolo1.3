import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
