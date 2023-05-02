import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent{
  @Input('selectedUser') selectedUser?: User; 
  @Output() userLikeEvent:EventEmitter<User> =new EventEmitter<User>();
  liked: boolean = false;

  constructor(private userService: UserService){}
  
  onLikeUser(user : User){
    this.userLikeEvent.emit(user);
    this.liked = true;
  }

  onUnLikeUser(user: User){
    this.userService.unLikeUser(user);
    this.liked = false;
  }

}
