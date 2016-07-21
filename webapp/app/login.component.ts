import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import { User } from './user';
 
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl:'login.component.html'
})
 
export class LoginComponent {
 
    public user = new User(0,'','');
    public errorMsg = '';
 
    constructor(
        private service:AuthenticationService) {}
 
    login() {
        if(!this.service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}