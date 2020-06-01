import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Shared/User.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:CrudService,private router:ActivatedRoute) { }

  user:User;
  
  ngOnInit(): void {
    // this.router.paramMap.subscribe(data=>{
    //   const id = +data.get('id');
    //   this.user=this.service.getUser(id);
    // });
    const id = +this.router.snapshot.paramMap.get('id');
    this.user = this.service.getUser(id);
    
  }

}
