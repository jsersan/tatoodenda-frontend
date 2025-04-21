// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ProductListComponent } from '../app/components/product/product-list/product-list.component';
import { ProductDetailComponent } from '../app/components/product/product-detail/product-detail.component';
import { CartComponent } from '../app/components/cart/cart.component';
import { CheckoutComponent } from '../app/components/checkout/checkout.component';

import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

import { CategoryManagerComponent } from '../app/components/admin/category-manager/category-manager.component';
import { ProductManagerComponent } from '../app/components/admin/product-manager/product-manager.component';
import { SearchResultsComponent } from '../app/components/product/search-results/search-results.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'search', component: SearchResultsComponent },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [authGuard, adminGuard],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'categories', component: CategoryManagerComponent },
      { path: 'products', component: ProductManagerComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }