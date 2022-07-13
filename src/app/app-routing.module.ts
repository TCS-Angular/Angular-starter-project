import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [ {path:"register", component:UserFormComponent} , {path:'product',component:AddProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
