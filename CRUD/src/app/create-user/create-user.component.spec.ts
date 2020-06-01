import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';
import { Router, ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EMPTY } from "rxjs";

class RouterStub
{
  navigate(param)
  {

  }
}

class ActivatedRouteStub{
  params:Observable<any> = of({});
}

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      providers:[
        {provide:Router,useClass:RouterStub},
        {provide: ActivatedRoute,useValue: {
          snapshot: {
            paramMap: convertToParamMap({id: 1})
          }
        }
      }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect the user to home components', () => {
    let route=TestBed.get(Router);
    let spy = spyOn(route,'navigate');

     component.Submit()
     
     expect(spy).toHaveBeenCalled();  
  });
});
