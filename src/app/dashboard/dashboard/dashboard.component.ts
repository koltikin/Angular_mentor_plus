import { Component, OnInit } from '@angular/core';
import { Observable, filter} from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  likedUser$!: Observable<User[]>;

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.likedUser$ = this.userService.getUsers();
  }

}
