import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs";
import {User} from './user';
@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  save(user:User)
  {
    console.log(user.name);
return this._http.post("/login",user).map(data=>data.json()).toPromise();
  }
  addQ(user: User)
  {
   return this._http.post("/addQuestion",user).map(data=>data.json()).toPromise();
  }
  showAll()
  {
    return this._http.get('/show').map(data=>data.json()).toPromise();
  }
 getUser()
 {
   return this._http.get('/getUser').map(data=>data.json()).toPromise();
 }

}
