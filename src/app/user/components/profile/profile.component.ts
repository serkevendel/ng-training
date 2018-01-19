import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthService } from '../../../shared/index';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private oldPassword: string;

  public user: User;
  public form = new FormGroup(
    {
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
    RegistrationComponent.passwordMatchValidator
  );

  constructor(private _authService: AuthService, private _profileService: ProfileService, private _router: Router) { }

  ngOnInit() {
    this.oldPassword = this._authService.user.password;
    this.user = this._authService.user;
  }

  public changePassword(user: User){
    this._profileService.update(user).subscribe(
      () => {
        this._authService.logout();
        this._router.navigate(['/user/login']);
      },
      (error: any) => {
        console.log(error);
        window.alert('Update failed.');
        this.user.password = this.oldPassword;
      }
    )
  }

}
