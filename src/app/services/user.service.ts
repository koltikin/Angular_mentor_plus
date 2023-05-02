import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList : User[] = [
    { username : 'Ower', likecount : 1 },
    { username : 'Matt', likecount : 1 },
    { username : 'Sahin', likecount : 1 }
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

  getUserByUsername(userName: string): User{
    let index : number = this.userList.findIndex(d => d.username === userName);
    return this.userList[index];
  };

  addUser(user: User): void{
    this.userList.push(user);
    this.users.next(this.userList);
  }

  deleteUser(index: number):void{
    this.userList.splice(index, 1);
    this.users.next(this.userList);
  }

  likeUser(user:User):void{
    let index : number = this.userList.findIndex(d => d === user);
    this.userList[index].likecount += 1;
    this.users.next(this.userList);
  }

  unLikeUser(user:User):void{
    let index : number = this.userList.findIndex(d => d === user);
    this.userList[index].likecount -= 1;
    this.users.next(this.userList);
  }
}
