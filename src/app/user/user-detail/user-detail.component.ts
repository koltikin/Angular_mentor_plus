import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent{
  @Input('selectedUser') selectedUser?: User; 
  @Output() userLikeEvent:EventEmitter<User> =new EventEmitter<User>();
  
  onLikeUser(user : User){
    this.userLikeEvent.emit(user);
  }

}
