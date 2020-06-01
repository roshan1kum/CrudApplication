import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import { User } from '../Shared/User.model';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase the userList array on add',()=>{

    service.userList=[];
    const u:User={ id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000'}
    service.addUser(u)
    expect(service.userList.length).toBe(1);
  })

  it('should delete the user form userList',()=>{
    service.userList=[{ id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000'}];
    const id:number=1;
    service.deleteUser(id);
    expect(service.userList.length).toBe(0);


  })

  
});
