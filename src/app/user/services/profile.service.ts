import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/index';
import { User } from '../index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService extends ApiService{

  public update(user: User): Observable<User> {
    return this.request('PATCH', 'user/' + user.id, user);
  }
}
