import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    NavbarComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
