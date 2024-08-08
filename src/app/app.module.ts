import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RegisterFormComponent } from './login/register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { IngredientFormComponent } from './inventory/ingredient-form/ingredient-form.component';
import { IngredientListComponent } from './inventory/ingredient-list/ingredient-list.component';
import { ProductsComponent } from './products/products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    NavBarComponent,
    InventoryComponent,
    IngredientFormComponent,
    IngredientListComponent,
    ProductsComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
