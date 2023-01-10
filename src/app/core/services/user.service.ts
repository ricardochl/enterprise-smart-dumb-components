import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      name: 'Ricardo Chavarria',
      email: 'ricardo.chavarria@gmail.com',
    },
    {
      name: 'Roberto Lopez',
      email: 'roberto.lopez@gmail.com',
    },
    {
      name: 'Laura Perez',
      email: 'laura.perez@gmail.com',
    },
  ];
  constructor() {}

  selectAll(): Observable<User[]> {
    return of(this.users);
  }
}
