import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, RouterOutlet } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

describe('AppComponent', () => {
  let component:AppComponent
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        CreateUserComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CRUD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CRUD App');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('CRUD app is running!');
  // });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('should navigate the user to create page on click Create button',()=>{

    let router=TestBed.get(Router);
    let spy = spyOn(router,'navigate')

    component.Create()

    expect(spy).toHaveBeenCalled();

  })

  it('should have the router outlet',()=>{
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();

  })
  
});
