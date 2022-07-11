import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
user: User = new User();

  save() {
    console.log(this.user.name);
    console.log(this.user.city);
  }

  constructor() {}

  ngOnInit(): void {}
}
