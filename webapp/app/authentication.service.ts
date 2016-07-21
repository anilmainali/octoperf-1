import { Injectable }    from '@angular/core';
import {Router} from '@angular/router-deprecated';



import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class AuthenticationService {
 
  constructor(
    private router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['Login']);
  }
 
  login(user){
    var authenticatedUser = USERS.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.email);
      this.router.navigate(['Dashboard']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this.router.navigate(['Login']);
    }
  } 
}
