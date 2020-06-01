import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/User.model';
import { UserList } from '../Shared/UserList';
import { CrudService } from '../Service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private crudService:CrudService,private router:Router,private _route:ActivatedRoute) { }
  newUser=new User();
  a=UserList;
  user:User;
  newId:number;

  ngOnInit(): void {    
    // this._route.paramMap.subscribe(paramMap=>
    //   {
    //   const id=+paramMap.get('id');
    //   this.getUser(id);
    //   });  
    const id = +this._route.snapshot.paramMap.get('id');   
    
    this.getUser(id);
  }

  getUser(id:number)
  {
    console.log(id)
    if(id==0)
    {
      this.newId = this.a[this.a.length-1].id+1;
      this.user={
      id:null,
      name:'',
      email:'',
      contact:''
      }
    }
    else{
      this.user=this.a.find(u=>u.id==id);
      
    }
  }
  
  Submit()
  {
    if(this.user.id==null){
      this.newUser.id=this.newId;
      this.newUser.name=this.user.name;
      this.newUser.email=this.user.email;
      this.newUser.contact=this.user.contact;
      this.newUser.id=this.newId;
      this.crudService.addUser(this.newUser);
    }
    else{
      this.crudService.editUser(this.user);            
    }    
    this.router.navigate(['home']);
  }
}
