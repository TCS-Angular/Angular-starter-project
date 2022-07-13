import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductTypesForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.addProductTypesForm = new FormGroup({
      "productName" : new FormControl(),
      "productDescription" : new FormControl() 
    })
  }
  addProductType() {
    console.log(this.addProductTypesForm.value);
     
  }

}
