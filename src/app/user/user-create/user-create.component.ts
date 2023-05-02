import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userList : User[] = [];
  likedUsers: User[] = [];
  selectedUser: User | undefined;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    // this.userList = this.userService.getUsers();
   this.userService.getUsers().subscribe(
      response => {
        this.userList = response
      },
      err => {
          console.log('error');
      }
    );
  }

  addUser(item : any){
    let user : User = {username: item.username , likecount : 0 };
    // this.userList.push(user);
    this.userService.addUser(user);
  }

  deleteUser(name : string){
    let index : number = this.userList.findIndex(d => d.username === name);
    // this.userList.splice(index, 1);
    this.userService.deleteUser(index);
  }

  onSelectUser(user: User){
    this.selectedUser = user;
  }

  likeUser(user: User){
    // this.likedUsers.push(user);
    this.userService.likeUser(user);
  }
}
