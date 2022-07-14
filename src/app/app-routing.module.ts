import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UseDirectiveComponent } from './components/use-directive/use-directive.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [ {path:"register", component:UserFormComponent} , {path:'product',component:AddProductComponent}, 
{path:"directive", component:UseDirectiveComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
