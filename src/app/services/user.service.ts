import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList : User[] = [
    { username : 'Mike', password : 'Abc1' },
    { username : 'John', password : 'Abc1' },
    { username : 'Mary', password : 'Abc1' }
  ];

  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.userList);
  public readonly users$: Observable<User[]> = this.users.asObservable();

  constructor() { }

  // getUsers():User[]{
  //   return this.userList.slice();
  // }

  getUsers(): Observable<User[]>{
    return this.users$;
  }

  // addUser(user: User):void{
  //   this.userList.push(user);
  // }

  addUser(user: User): void{
    this.userList.push(user);
    this.users.next(this.userList);
  }

  deleteUser(index: number):void{
    this.userList.splice(index, 1);
    this.users.next(this.userList);
  }
}
