import { Component } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  userList : User[] = [
    { username : 'Mike', password : 'Abc1' },
    { username : 'John', password : 'Abc1' },
    { username : 'Mary', password : 'Abc1' }
  ];
  selectedUser: User | undefined;

  addUser(item : any){
    let user : User = {username: item.username , password : item.password };
    this.userList.push(user);
  }

  deleteUser(name : string){
    let index : number = this.userList.findIndex(d => d.username === name);
    this.userList.splice(index, 1);
  }

  onSelectUser(user: User){
    this.selectedUser = user;
  }
}
