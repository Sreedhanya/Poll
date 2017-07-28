import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';
import {User} from './../user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _userService: UserService) { }
users=[];
userData= new User();
  ngOnInit() {
   this.show();
  
  }
  show()
  {
this._userService.showAll().then((data)=>{this.users=data}).catch((err)=>console.log(err));
 this.findCurrentUser();
  }
  findCurrentUser()
  {
    this._userService.getUser().then((data)=>{this.userData=data}).catch((err)=>console.log(err));
   // console.log(this.userData.name);
  }
}
