import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductsComponent } from './products/products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';

const routes: Routes = [
  {path: "", component : LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "inventory", component: InventoryComponent},
  {path: "products", component: ProductsComponent},
  {path: "dashboard", component: AdminDashboardComponent},
  {path: "admin", component: SuperDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
