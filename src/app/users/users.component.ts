import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';
import { UserService } from '../core/services/user.service';
import { SmartComponent } from '../core/smart-component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends SmartComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) {
    super();
  }

  ngOnInit() {
    this.userService
      .selectAll()
      .pipe(this.untilComponentDestroy())
      .subscribe((users) => {
        this.users = users as User[];
      });
  }
}
