import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../shared/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = true;
  public user: User = new User();
  public form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  );

  public constructor(private _authService: AuthService, private _router: Router) {
    //
  }

  public ngOnInit() {
    this.loading = false;
  }

  public login() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this._authService.login(this.user).subscribe(
      (response: Response) => {
        this.user = new User();
        this.form.reset();
        this._router.navigate(['/']);
        console.log(this.user.password);
      },
      (error: any) => {
        console.log(error);
        window.alert('Login failed.');
        this.loading = false;
      },
      () => {
        //
      }
    );
  }

}
