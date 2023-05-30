import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrosAdminComponent } from './views/admin/registros-admin/registros-admin.component';
import { OrdenesAdminComponent } from './views/admin/ordenes-admin/ordenes-admin.component';
import { ItemsAdminComponent } from './views/admin/items-admin/items-admin.component';
import { UsuarioAdminComponent } from './views/admin/usuario-admin/usuario-admin.component';
import { DetalleRegistrosAdminComponent } from './views/admin/detalle-registros-admin/detalle-registros-admin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:DashboardAdminComponent, children:[
    {path:'registros',component:RegistrosAdminComponent},
    {path:'ordenes',component:OrdenesAdminComponent},
    {path:'items',component:ItemsAdminComponent},
    {path:'usuarios',component:UsuarioAdminComponent},
    {path:'registros/:id',component:DetalleRegistrosAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
