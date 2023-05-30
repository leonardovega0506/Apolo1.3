import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './views/admin/sidebar-admin/sidebar-admin.component';
import { TopbarAdminComponent } from './views/admin/topbar-admin/topbar-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './views/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { RegistrosAdminComponent } from './views/admin/registros-admin/registros-admin.component';
import { OrdenesAdminComponent } from './views/admin/ordenes-admin/ordenes-admin.component';
import { ItemsAdminComponent } from './views/admin/items-admin/items-admin.component';
import { UsuarioAdminComponent } from './views/admin/usuario-admin/usuario-admin.component';
import { DetalleRegistrosAdminComponent } from './views/admin/detalle-registros-admin/detalle-registros-admin.component';
import { DetallesOrdenesAdminComponent } from './views/admin/detalles-ordenes-admin/detalles-ordenes-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    SidebarAdminComponent,
    TopbarAdminComponent,
    LoginComponent,
    RegistrosAdminComponent,
    OrdenesAdminComponent,
    ItemsAdminComponent,
    UsuarioAdminComponent,
    DetalleRegistrosAdminComponent,
    DetallesOrdenesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
