import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductComponent } from './components/top-product/top-product.component';
import { Err404Component } from './components/err404/err404.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerGuardService } from './services/customer-guard.service';
import { CompanyGuardService } from './services/company-guard.service';
import { AdminGuardService } from './services/admin-guard.service';

const routes: Routes =[
    {path: "top-product", component: TopProductComponent}, 
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "admin", canActivate: [AdminGuardService], component: AdminComponent},
    {path: "company", canActivate: [CompanyGuardService], component: CompanyComponent},
    {path: "customer", canActivate: [CustomerGuardService], component: CustomerComponent},
    {path: "products", component: ProductsComponent},
    {path: "about", component: AboutComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", component: Err404Component}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}