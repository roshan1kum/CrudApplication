import { Component, OnInit,ViewChild } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { User } from '../Shared/User.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private crudservice:CrudService,private router:Router) { }

  user:User[];
  dataSource;
  displayedColumns: string[] = ['Id', 'name', 'operations'];

  ngOnInit(): void {
    this.user = this.crudservice.getUserList()
    this.dataSource=this.user;  
   
  }

  Create()
  {
    this.router.navigate(['create']);
  }

  Del(u)
  {
    this.crudservice.deleteUser(u);
    
  }
  edit(id)
  {
    this.router.navigate(['/edit',id]);
  }
  details(id)
  {
    this.router.navigate(['/details',id]);
  }




}
