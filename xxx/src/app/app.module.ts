import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from './components/products/products.component';
import { TopProductComponent } from './components/top-product/top-product.component';
import { Err404Component } from './components/err404/err404.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    TopProductComponent,
    Err404Component,
    AdminComponent,
    CompanyComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    TopProductComponent,
    Err404Component
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
