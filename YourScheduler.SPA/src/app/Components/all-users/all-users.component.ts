import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { User } from 'src/app/Shared/Models/user';
import { AuthorizationService } from 'src/app/Shared/Services/authorization.service';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit,OnDestroy {
  users: User[] = [];
  destroyed$ = new Subject();
  constructor(public auth: AuthorizationService, private userService: UserService){
    this.userService.user$.pipe(
      tap(data => this.users = data),
      takeUntil(this.destroyed$)
    )
    .subscribe();
  }
  ngOnInit(): void {
    this.userService.getUsers();
  }
  ngOnDestroy(): void {
    this.destroyed$.complete();
  }
  onRefresh(){
    this.userService.getUsers();
  }
}
