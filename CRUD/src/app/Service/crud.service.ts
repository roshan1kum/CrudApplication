import { Injectable } from '@angular/core';
import { UserList } from '../Shared/UserList';
import { User } from '../Shared/User.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  user:User;
  userList=UserList;
  getUserList()
  {
    return (this.userList);
  }
  getUser(id:number)
  {
    return (this.userList.find(a=>a.id==id));
  }

  addUser(u:User)
  {
    this.userList.push(u);
  }
  deleteUser(id:number)
  {
    console.log(id)
    const u=this.userList.find(e=>e.id==id);
    const index = this.userList.indexOf(u, 0);
    console.log(this.userList);
    if(index>-1)
    {
      this.userList.splice(index, 1);
    }
  }
  editUser(editUser:User)
  {
    const index=this.userList.findIndex(user=>user.id==editUser.id);
    this.userList[index]=editUser;
  }
}
