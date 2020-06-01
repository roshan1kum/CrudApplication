import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { Observable, EMPTY, of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

class ActivatedRouteStub{
  params:Observable<any> = EMPTY;
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers:[
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
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
