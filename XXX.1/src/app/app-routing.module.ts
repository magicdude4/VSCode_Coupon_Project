import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TopProductComponent } from './components/top-product/top-product.component';
import { Err404Component } from './components/err404/err404.component';

const routes: Routes =[
    {path: "top-product", component: TopProductComponent}, 
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
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