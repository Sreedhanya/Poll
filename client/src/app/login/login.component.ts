import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';
import {Router } from '@angular/router';
import {User} from './../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService : UserService, private _router: Router) { }
user=new User()
  ngOnInit() {
  }
  saveUser()
  {
    console.log(this.user.name);
this._userService.save(this.user).then(()=>{this._router.navigateByUrl("/dashboard");}
);

  }

}
