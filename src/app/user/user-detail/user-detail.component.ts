import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  @Input('selectedUser') selectedUser?: User; 
  @Output() userLikeEvent:EventEmitter<User> =new EventEmitter<User>();
  liked: boolean = false;
  userName: string | null | undefined;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap.get('username');
    this.userName = routeParam;
  }
  
  onLikeUser(user : User){
    this.userLikeEvent.emit(user);
    this.liked = true;
    this.router.navigate(['dashboard']);
  }

  onUnLikeUser(user: User){
    this.userService.unLikeUser(user);
    this.liked = false;
  }

}
