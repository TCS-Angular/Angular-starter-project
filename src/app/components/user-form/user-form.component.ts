import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User = new User();
  users: User[] = [];

  deleteRow(user, index) {
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response: any) => {
      console.log(response);
      this.users.splice(index, 1);
    });
  }

  save() {
    // console.log(this.user.name);
    // console.log(this.user.city);
    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
        alert('something went wrong, Please try again!');
      }
    );
  }
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.users = response as User[];
    });
  }
}
