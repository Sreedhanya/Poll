import { Component, OnInit } from '@angular/core';
import {User} from './../user';
import {UserService} from './../user.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
user=new User();
  constructor(private _userService: UserService,private _router: Router) { }

  ngOnInit() {
  }
addQuestion()
{
this._userService.addQ(this.user).then(()=>{this._router.navigateByUrl("/dashboard");
})
}
}
