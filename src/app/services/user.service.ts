import { Injectable } from '@angular/core';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList : User[] = [
    { username : 'Mike', password : 'Abc1' },
    { username : 'John', password : 'Abc1' },
    { username : 'Mary', password : 'Abc1' }
  ];

  constructor() { }

  getUsers():User[]{
    return this.userList.slice();
  }

  addUser(user: User):void{
    this.userList.push(user);
  }

  deleteUser(index: number):void{
    this.userList.splice(index, 1);
  }
}
