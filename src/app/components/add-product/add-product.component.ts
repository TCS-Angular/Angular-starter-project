import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductTypesForm : FormGroup;

  contactForm = new FormGroup({
    firstname: new FormControl(``,[Validators.required, Validators.minLength(5)]),
    lastname: new FormControl(),
    email: new FormControl() ,
    gender: new FormControl() ,
    isMarried : new FormControl() ,
    country: new FormControl()
  })

  onSubmit() {
    console.log(this.contactForm.value);
    
  }

  product = {
    ProductName:"Samsung Galaxy s22",
    color:"Pearl white",
    price: "70000",
    launchedOn : Date.now(),
    ProductId: "hdgfyuwgbajsbn2213ghbh2134j"
  }

  constructor() { }

  ngOnInit(): void {
    // this.addProductTypesForm = new FormGroup({
    //   "productName" : new FormControl(),
    //   "productDescription" : new FormControl() 
    // })
  }
  // addProductType() {
  //   console.log(this.addProductTypesForm.value);
     
  // }

}
