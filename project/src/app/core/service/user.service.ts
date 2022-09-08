import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currentUser$ = new BehaviorSubject<User | null>(null);
  tokenSync!: Observable<string | null>;

  public set setCurrentUser(user: User) {
    this._currentUser$.next(user);
  }

  public get getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  constructor() {
    this.tokenSync = of(this.getToken);
  }
}
