import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { User } from '../Shared/User.model';
import { ComponentFactoryResolver } from '@angular/core';

class RouterStub
{
  navigate(param)
  {

  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;   
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[CrudService, 
        {provide:Router , useClass:RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  // it('should set the user propert returned from service user',()=>{
  //   let u=[{ id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000'}]
  //   spyOn(service,'getUserList').and.returnValue(u);
  //   component.ngOnInit();
  //   expect(component.user).toBe(u);
  // });

  it('should navigate the user to create page on click Create button',()=>{
    let router=TestBed.get(Router);
    let spy = spyOn(router,'navigate')

    component.Create();

    expect(spy).toHaveBeenCalled();

  })

  it('should navigate the user to details page on click  on details button',()=>{
    let router=TestBed.get(Router);
    let spy = spyOn(router,'navigate')

    component.details(null);

    expect(spy).toHaveBeenCalled();

  })

  it('should navigate the user to create page on click on edit button',()=>{
    let router=TestBed.get(Router);
    let spy = spyOn(router,'navigate')

    component.edit(null);

    expect(spy).toHaveBeenCalled();

  })

  it('should load user from service',()=>{
    let u=[{ id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000'}]
    let service = TestBed.get(CrudService);

    spyOn(service,'getUserList').and.returnValue([u]);

    component.ngOnInit()

    fixture.detectChanges();
    expect(component.user.length).toBe(1);
  })

  it('should call delte from service',()=>{
    let service = TestBed.get(CrudService);

    let spy = spyOn(service,'deleteUser')

    component.Del(1);

    expect(spy).toHaveBeenCalledWith(1);

  })


  
});
